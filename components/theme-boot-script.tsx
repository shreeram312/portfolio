import { profile } from "@/data/profile";

export const THEME_KEY = "theme";
export const OVERRIDE_KEY = "theme-override";

/**
 * Blocking inline script (rendered in <head>) that decides the theme before
 * first paint: a recent manual toggle wins, otherwise the IST clock does.
 * It writes the result where next-themes reads it, so next-themes' own
 * script applies the same class with no flash.
 */
export function ThemeBootScript() {
  const { timeZone, darkFromHour, darkUntilHour, overrideHours } = profile.themeSchedule;
  const code = `(function(){try{
var tz=${JSON.stringify(timeZone)},from=${darkFromHour},until=${darkUntilHour},ttl=${overrideHours}*3600000;
var o=null;try{o=JSON.parse(localStorage.getItem(${JSON.stringify(OVERRIDE_KEY)})||"null")}catch(e){}
var t;
if(o&&(o.theme==="dark"||o.theme==="light")&&typeof o.at==="number"&&Date.now()-o.at<ttl){t=o.theme}
else{
  var h=Number(new Intl.DateTimeFormat("en-US",{hour:"numeric",hour12:false,timeZone:tz}).format(new Date()))%24;
  var night=from>until?(h>=from||h<until):(h>=from&&h<until);
  t=night?"dark":"light";
  localStorage.removeItem(${JSON.stringify(OVERRIDE_KEY)});
}
localStorage.setItem(${JSON.stringify(THEME_KEY)},t);
}catch(e){}})();`;
  return <script dangerouslySetInnerHTML={{ __html: code }} />;
}
