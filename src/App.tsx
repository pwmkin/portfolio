import { CustomCursor } from "./components/CustomCursor";
import { Globe } from "./components/Globe";
import { NewsTicker } from "./components/NewsTicker";
import { ProjectList } from "./components/ProjectList";
import { SocialLinks } from "./components/SocialLinks";

function App() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center relative">
      <CustomCursor />
      <NewsTicker />
      <Globe />
      <SocialLinks />

      <div className="w-full max-w-2xl mx-auto px-4 py-32 z-10">
        <div className="inline-block bg-black px-6 py-3 mb-8">
          <h1 className="font-mono text-4xl text-white">PWMKIN</h1>
        </div>

        <p className="font-mono text-lg mb-12">
          Exploring the intersection of design and technology through
          minimalistic, purposeful creations. Each project represents a unique
          challenge solved with elegant solutions.
        </p>

        <ProjectList />
      </div>
    </div>
  );
}

export default App;
