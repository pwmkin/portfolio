import { useState } from "react";

import { CustomCursor } from "./components/CustomCursor";
import { Globe } from "./components/Globe";
import { NewsTicker } from "./components/NewsTicker";
import { ProjectList } from "./components/ProjectList";
import { SkillsList } from "./components/SkillsList";
import { SocialLinks } from "./components/SocialLinks";
import { TabLinks, TabLinkValue } from "./components/TabLinks";

function App() {
  const [currentTab, setCurrentTab] = useState<TabLinkValue>(null);

  return (
    <div className="min-h-screen bg-white flex flex-col items-center relative">
      <CustomCursor />
      <NewsTicker />
      <Globe />
      <SocialLinks />

      <div className="w-full max-w-2xl mx-auto px-4 py-32 z-10">
        <div className="flex items-center justify-between mb-8">
          <div className="inline-block bg-black px-6 py-3">
            <h1 className="font-mono text-4xl text-white">PWMKIN</h1>
          </div>

          <div className="flex items-center space-x-4">
            <TabLinks
              currentTab={currentTab}
              setCurrentTab={setCurrentTab}
              links={[
                { value: null, label: "/me" },
                { value: "skills", label: "/skills" },
                { value: "projects", label: "/projects" },
              ]}
            />
          </div>
        </div>

        {currentTab === null && (
          <>
            <div className="font-mono mb-12">
              <p className="text-lg mb-6">
                Exploring the intersection of design and technology through
                minimalistic, purposeful creations. Each project represents a
                unique challenge solved with elegant solutions.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                <div>
                  <h2 className="text-xl font-bold border-b border-black pb-2 mb-4">
                    Experience
                  </h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-bold">Frontend Development</h3>
                      <p className="text-sm opacity-70">
                        React, Vite, Next, Tailwind CSS.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-bold">Backend Developer</h3>
                      <p className="text-sm opacity-70">
                        NestJS, GraphQL, SQL, MongoDB, Redis
                      </p>
                    </div>
                    <div>
                      <h3 className="font-bold">Cloud & Infra</h3>
                      <p className="text-sm opacity-70">
                        AWS, Docker, GCP, Linux, Nginx, Jenkins
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-xl font-bold border-b border-black pb-2 mb-4">
                    About Me
                  </h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-bold">I live in</h3>
                      <p className="text-sm opacity-70">
                        Argentina, Buenos Aires.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-bold">I speak</h3>
                      <p className="text-sm opacity-70">
                        Spanish (Native), English (B1)
                      </p>
                    </div>

                    <div>
                      <h3 className="font-bold">I've been programming for</h3>
                      <p className="text-sm opacity-70">
                        10 years (Since 2015)
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}

        {currentTab === "projects" && <ProjectList />}

        {currentTab === "skills" && <SkillsList />}
      </div>
    </div>
  );
}

export default App;
