export const SkillsList = () => {
  return (
    <div className="font-mono">
      <h2 className="text-2xl font-bold mb-8">Technical Proficiencies</h2>

      <div className="space-y-12">
        {/* Frontend */}
        <div>
          <div className="inline-block bg-black px-4 py-2 mb-6">
            <h3 className="text-white font-bold">Frontend Development</h3>
          </div>
          <div className="space-y-6">
            <p>
              My expertise in frontend development centers around{" "}
              <span className="font-bold">React</span> combined with{" "}
              <span className="font-bold">TypeScript</span>. For lightweight web
              applications, I prefer using{" "}
              <span className="font-bold">Vite</span>, while for projects
              requiring{" "}
              <span className="font-bold">server-side rendering (SSR)</span>, I
              leverage <span className="font-bold">Next.js</span> to optimize
              SEO and performance. For styling, I specialize in{" "}
              <span className="font-bold">Tailwind CSS</span>, and while I
              typically avoid pre-built component libraries, I have experience
              with <span className="font-bold">Chakra UI</span> and{" "}
              <span className="font-bold">Shadcn/ui</span> for rapid
              prototyping.
            </p>
          </div>
        </div>

        {/* Backend */}
        <div>
          <div className="inline-block bg-black px-4 py-2 mb-6">
            <h3 className="text-white font-bold">Backend Development</h3>
          </div>
          <div className="space-y-6">
            <p>
              On the backend, my preferred stack includes{" "}
              <span className="font-bold">Node.js</span> with{" "}
              <span className="font-bold">Express</span> for building RESTful
              APIs. For more complex architectures, such as those based on{" "}
              <span className="font-bold">microservices</span>, I utilize{" "}
              <span className="font-bold">NestJS</span> alongside{" "}
              <span className="font-bold">GraphQL</span> to ensure scalability
              and maintainability.
            </p>
            <p>
              For data persistence, I employ{" "}
              <span className="font-bold">SQLite</span> for local applications,{" "}
              <span className="font-bold">MongoDB</span> for write-intensive
              workloads, and <span className="font-bold">MariaDB (MySQL)</span>{" "}
              for read-heavy scenarios. Additionally, I integrate{" "}
              <span className="font-bold">Redis</span> for efficient caching
              solutions.
            </p>
          </div>
        </div>

        {/* DevOps */}
        <div>
          <div className="inline-block bg-black px-4 py-2 mb-6">
            <h3 className="text-white font-bold">DevOps & Infrastructure</h3>
          </div>
          <div className="space-y-6">
            <p>
              My development workflow is built around{" "}
              <span className="font-bold">Git</span> for version control. I have
              extensive experience configuring and managing{" "}
              <span className="font-bold">networks</span>, ranging from{" "}
              <span className="font-bold">Linux</span> environments and virtual
              machines to <span className="font-bold">Docker</span> containers.
              For continuous integration and deployment, I utilize tools such as{" "}
              <span className="font-bold">Jenkins</span> and{" "}
              <span className="font-bold">GitHub Actions</span>.
            </p>
            <p>
              In terms of cloud infrastructure, I specialize in{" "}
              <span className="font-bold">AWS</span>, leveraging services like{" "}
              <span className="font-bold">
                Workmail, SES, S3, EC2, and Lightsail
              </span>
              . I also have experience with{" "}
              <span className="font-bold">OVH</span>,{" "}
              <span className="font-bold">Vultr</span>, and{" "}
              <span className="font-bold">Google Cloud Platform (GCP)</span>.
              For serverless architectures, I rely on platforms like{" "}
              <span className="font-bold">Vercel</span>,{" "}
              <span className="font-bold">Railway</span>, and{" "}
              <span className="font-bold">Cloudflare Workers</span> (including{" "}
              <span className="font-bold">KV, AI, and R2</span>).
            </p>
          </div>
        </div>

        {/* Others */}
        <div>
          <div className="inline-block bg-black px-4 py-2 mb-6">
            <h3 className="text-white font-bold">Miscellaneous Expertise</h3>
          </div>
          <div className="space-y-6">
            <p>
              My skill set extends beyond traditional development, encompassing
              areas such as{" "}
              <span className="font-bold">blockchain technology</span>{" "}
              (including <span className="font-bold">Ethereum</span>,{" "}
              <span className="font-bold">ether.js</span>, and the{" "}
              <span className="font-bold">Polygon ecosystem</span>),
              introductory <span className="font-bold">cybersecurity</span> and{" "}
              <span className="font-bold">web penetration testing</span>, as
              well as <span className="font-bold">Cloudflare</span>{" "}
              configuration and optimization. I also have experience working
              with{" "}
              <span className="font-bold">large language models (LLMs)</span>{" "}
              and{" "}
              <span className="font-bold">vision-language models (VLMs)</span>,
              alongside basic{" "}
              <span className="font-bold">machine learning</span> projects.
            </p>
            <p>
              Beyond <span className="font-bold">JavaScript</span> and{" "}
              <span className="font-bold">TypeScript</span>, I am proficient in{" "}
              <span className="font-bold">Java</span> (with frameworks like{" "}
              <span className="font-bold">Micronaut</span> and{" "}
              <span className="font-bold">Netty</span>),{" "}
              <span className="font-bold">Python</span> (using{" "}
              <span className="font-bold">Flask</span>,{" "}
              <span className="font-bold">Uvicorn</span>, and{" "}
              <span className="font-bold">FastAPI</span>),{" "}
              <span className="font-bold">C#</span>, and{" "}
              <span className="font-bold">Rust</span>. For low-level programming
              or hobby projects, I occasionally work with{" "}
              <span className="font-bold">C</span> and{" "}
              <span className="font-bold">x86 Assembly</span>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
