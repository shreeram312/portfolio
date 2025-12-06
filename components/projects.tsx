import { Card } from "@/components/ui/card";
import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";
import { ExternalLink } from "lucide-react";
import React from "react";
import Link from "next/link";
import Image from "next/image";

interface Project {
  _id: string;
  title: string;
  description: string;
  imageUrl: string;
  githubUrl: string;
  projectUrl: string;
  url: string;
  img: string;
  subtitle: string;
}

export const revalidate = 60;
const Projects = async () => {
  let projects;

  try {
    projects =
      await client.fetch(groq`*[_type == "shreeram"] | order(_createdAt desc){
      _id,
      title,
      description,
      "imageUrl": image.asset->url,
      githubUrl,
      projectUrl,
      _createdAt
    }`);
  } catch (error) {
    console.error("Error fetching projects:", error);
    projects = [];
  }

  // Transform data to match expected format
  const transformedProjects =
    projects?.map((project: Project) => ({
      _id: project._id || Math.random().toString(),
      title: project.title,
      subtitle: project.description,
      img: project.imageUrl,
      githubUrl: project.githubUrl,
      url: project.projectUrl,
    })) || [];
  console.log(transformedProjects);
  return (
    <div>
      <div className="mb-8 sm:mb-12">
        <h2 className="text-xl sm:text-2xl font-mono mb-2 text-white">
          Projects
        </h2>
        <p className="text-white mb-4 sm:mb-6 font-mono text-xs sm:text-sm">
          Some of my recent work
        </p>

        <div className="space-y-4 sm:space-y-6">
          {transformedProjects.length > 0 ? (
            transformedProjects.map((project: Project) => (
              <Card
                key={project._id}
                className="bg-black border border-gray-900 p-0 overflow-hidden hover:border-gray-600 transition-colors cursor-pointer"
              >
                <div className="flex flex-col sm:flex-row">
                  <Link href={project.url} target="_blank">
                    <div className="w-full sm:w-48 h-32 bg-gray-800 flex-shrink-0">
                      {project.img ? (
                        <Image
                          src={project.img}
                          alt={project.title}
                          width={400}
                          height={400}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full bg-gray-700 flex items-center justify-center">
                          <span className="text-gray-400 text-sm">
                            No Image
                          </span>
                        </div>
                      )}
                    </div>
                  </Link>
                  <div className="p-3 sm:p-4 flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h4 className="text-blue-300 font-semibold text-base sm:text-lg">
                        {project.title}
                      </h4>
                      <div className="ml-auto flex items-center gap-2">
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-white transition-colors"
                          >
                            <svg
                              className="w-4 h-4"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                            </svg>
                          </a>
                        )}
                        {project.url && (
                          <a
                            href={project.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-white transition-colors"
                          >
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        )}
                      </div>
                    </div>
                    <p className="text-gray-300 text-xs sm:text-sm">
                      {project.subtitle}
                    </p>
                  </div>
                </div>
              </Card>
            ))
          ) : (
            <div className="text-center py-8">
              <p className="text-gray-400 text-sm">
                No projects available at the moment.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Projects;
