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
      className="py-20 bg-gradient-to-br from-gray-950 via-black to-gray-900 text-white border-t border-gray-800"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Technologies I Work With
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 place-items-center">
          {skills.map((skill) => (
            <div
              key={skill}
              className="w-full h-24 flex items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-xl shadow-md hover:shadow-blue-600/30 transition-shadow duration-300 font-semibold text-lg hover:scale-105"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
