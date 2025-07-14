export default function Projects() {
  return (
    <section
      id="projects"
      className="py-16 bg-gray-950 text-white border-t border-gray-800"
    >
      <div className="container m-auto px-4">
        <h2 className="text-3xl font-bold mb-10 text-center">Projects</h2>

        <div className="bg-gray-900 p-6 rounded-xl border border-gray-700">
          <h3 className="text-2xl font-semibold mb-2">
            EDV Result Automation using Web Scraping
          </h3>
          <p className="text-gray-300 mb-4">
            A powerful automation tool developed for a cyber to speed up
            the process of checking Diversity Visa (EDV) results. This system eliminates
            the manual effort of checking hundreds of entries individually, saving hours
            of time and increasing productivity.
          </p>

          <div className="flex flex-wrap gap-3 text-sm mb-4">
            <span className="bg-blue-600 px-3 py-1 rounded-full">React</span>
            <span className="bg-green-600 px-3 py-1 rounded-full">Node.js</span>
            <span className="bg-sky-600 px-3 py-1 rounded-full">Tailwind CSS</span>
          </div>

          <div className="flex gap-4">
            <a
              href="https://github.com/meshcode21/MESH-Automation-2.0-frontend"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 underline hover:text-blue-300"
            >
              GitHub Repo
            </a>
            <a
              href="https://www.linkedin.com/posts/mahesh-udas-a691b32b3_webscraping-reactjs-nodejs-activity-7309213653956726784-YNh-"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 underline hover:text-blue-300"
            >
              Demo Video
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
