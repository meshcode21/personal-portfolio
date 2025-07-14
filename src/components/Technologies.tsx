export default function Technologies() {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Node.js",
    "Tailwind CSS",
    "MySQL",
    "Web3",
  ];

  return (
    <section
      id="technologies"
      className="bg-gray-950 py-10 text-white border-t border-gray-800"
    >
      <div className="container m-auto px-4">
        <h2 className="text-3xl font-bold mb-6 text-center">Technologies I Use</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill) => (
            <span
              key={skill}
              className="px-5 py-2 border border-gray-600 rounded-full bg-gray-800 hover:bg-gray-700 transition duration-300"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
