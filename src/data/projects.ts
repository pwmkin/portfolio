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
  {
    id: "3",
    title: "gatekeep",
    techStack: ["Python", "Linux"],
    description:
      "Security log analyzer that scans service logs (SSH, MySQL, Apache, Nginx) to detect and report failed login attempts.",
    repository: "https://github.com/pwmkin/gatekeep",
  },
  {
    id: "4",
    title: "aicodegen",
    techStack: ["Python", "AI", "LLM"],
    description:
      "Python-based AI-powered project generator and editor. It connects to a Large Language Model (LLM) via an API (default: CloudFlare AI Worker) to create, modify, or extend codebases with intelligent decision-making.",
    repository: "https://github.com/pwmkin/aicodegen",
  },
  {
    id: "5",
    title: "minici",
    techStack: ["Go", "CI/CD", "DevOps"],
    description: "Lightweight miniature CI/CD system written in Go that allows you to build and deploy applications in Docker containers easily",
    repository: "https://github.com/pwmkin/minici"
  },
  {
    id: "6",
    title: "flare.io",
    techStack: ["JavaScript", "Bun", "API"],
    description: "Minimalist yet powerful HTTP backend framework designed for Bun",
    repository: "https://github.com/pwmkin/flareio"
  },
  {
    id: "7",
    title: "Aesthetic Music Player",
    techStack: ["HTML", "JavaScript", "Vite"],
    description: "A beautiful, minimalistic and modern music player built with HTML, JavaScript, and WaveSurfer.js",
    repository: "https://github.com/pwmkin/aesthetic-music-player"
  },
  {
    id: "8",
    title: "WebPAD",
    techStack: ["Java", "Micronaut", "MySQL"],
    description: "A personal note taking app built in Java and Micronaut.",
    repository: "https://github.com/pwmkin/WebPAD"
  }
];
