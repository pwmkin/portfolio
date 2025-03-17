export interface Project {
  id: string;
  title: string;
  techStack: string[];
  description: string;
  repository: string;
}

export const projects: Project[] = [
  {
    id: "1",
    title: "porfolio",
    techStack: ["Vite", "React", "TailwindCSS"],
    description:
      "My personal portfolio, in fact, the website you are looking at right now.",
    repository: "https://github.com/pwmkin/portfolio",
  },
  {
    id: "2",
    title: "wcalc",
    techStack: ["HTML", "JavaScript", "CSS"],
    description:
      "Professional calculator for basic and scientific arithmetic to calculate values ​​with extreme precision.",
    repository: "https://github.com/pwmkin/wcalc",
  },
];
