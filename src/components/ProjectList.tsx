import { useRef, useState } from "react";

import { Project, projects } from "../data/projects";

export const ProjectList = () => {
  const [hoveredProject, setHoveredProject] = useState<Project | null>(null);
  const [isLeaving, setIsLeaving] = useState(false);
  const leaveTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleMouseEnter = (project: Project) => {
    if (leaveTimeout.current) {
      clearTimeout(leaveTimeout.current);
      leaveTimeout.current = null;
    }
    setIsLeaving(false);
    setHoveredProject(project);
  };

  const handleMouseLeave = () => {
    setIsLeaving(true);
    leaveTimeout.current = setTimeout(() => {
      setHoveredProject(null);
      setIsLeaving(false);
      leaveTimeout.current = null;
    }, 300);
  };

  return (
    <>
      <div className="w-full">
        {projects.map((project) => (
          <a
            key={project.id}
            href={project.repository}
            target="_blank"
            rel="noopener noreferrer"
            className="block relative"
            onMouseEnter={() => handleMouseEnter(project)}
            onMouseLeave={handleMouseLeave}
          >
            <div className="flex justify-between items-center py-4 px-2 my-2 hover:bg-black group transition-all duration-300">
              <span className=" border-l-4 px-2 border-black group-hover:border-white font-mono text-lg group-hover:text-white transition-colors">
                {project.title}
              </span>
              <span className="font-mono text-sm text-gray-600 group-hover:text-white transition-colors pr-2">
                {project.techStack.join(" · ")}
              </span>
            </div>
          </a>
        ))}
      </div>

      {hoveredProject && (
        <div
          className={`fixed bottom-0 left-0 right-0 bg-black text-white h-12 flex items-center
            ${isLeaving ? "slide-out-down" : "slide-in-up"}`}
        >
          <div className="max-w-4xl mx-auto px-6">
            <p className="font-mono text-sm">{hoveredProject.description}</p>
          </div>
        </div>
      )}
    </>
  );
};
