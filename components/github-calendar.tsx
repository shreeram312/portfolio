import React from "react";
import GitHubCalendar from "react-github-calendar";

const GithubCalendarComponent = () => {
  return (
    <div className="w-full overflow-hidden">
      <h2 className="text-xl sm:text-2xl font-serif mb-2">
        Contribution Graph
      </h2>
      <div className="flex justify-center items-center p-4">
        <div className="w-full max-w-4xl">
          <GitHubCalendar
            username="shreeram312"
            fontSize={12}
            blockSize={12}
            blockMargin={2}
            hideColorLegend={false}
            showWeekdayLabels={true}
          />
        </div>
      </div>
    </div>
  );
};

export default GithubCalendarComponent;
