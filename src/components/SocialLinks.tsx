import { Github, Linkedin, Twitter } from 'lucide-react';

export const SocialLinks = () => {
  return (
    <div className="fixed right-8 top-1/2 -translate-y-1/2 bg-black p-4">
      <div className="flex flex-col gap-4">
        <a href="https://github.com/pwmkin" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
          <Github size={24} />
        </a>
        <a href="https://www.linkedin.com/in/pwmkin" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
          <Linkedin size={24} />
        </a>
        <a href="https://twitter.com/pwmkin_" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
          <Twitter size={24} />
        </a>
      </div>
    </div>
  );
}
