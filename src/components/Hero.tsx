import heroPhoto from "../assets/mahesh.jpg";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative  text-white min-h-[calc(100vh-80px)] flex items-center w-screen"
    // bg-gradient-to-r from-black via-gray-900 to-gray-950
    >
      <div className="container mx-auto px-4 flex flex-col-reverse md:flex-row items-center justify-between gap-6 overflow-clip">
        {/* Text Content */}
        <div className="flex-1">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
            Hello Guys <br /> I’m{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-pink-500">
              Mahesh Udas
            </span>
            <br />
            Full Stack Developer
          </h1>

          <p className="mt-6 text-gray-300 text-lg max-w-xl">
            I love building full stack web apps using modern technologies like
            React, Node.js, and Web3. Let’s connect and create something impactful.
          </p>

          <div className="mt-8 flex gap-4">
            <a
              href="#contact"
              className="px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-semibold transition duration-300 shadow-lg shadow-blue-500/30"
            >
              Contact Me
            </a>
            <a
              href="/Mahesh_Udas_CV.pdf"
              download
              className="px-6 py-3 rounded-full border border-gray-500 hover:border-white text-white font-semibold transition duration-300"
            >
              Download CV
            </a>
          </div>
        </div>

        {/* Image */}
        <div className="flex-1 relative">
          <div className="relative z-10 w-[300px] md:w-[400px] mx-auto">
            <img
              src={heroPhoto}
              alt="Mahesh Udas"
              className="m-auto rounded-full p-1 md:p-0 md:rounded-3xl size-70 md:size-auto md:h-auto object-cover object-top md:object-cover shadow-2xl border md:border-2 border-gray-700"
            />
          </div>

        </div>
        {/* Glowing Circle Background */}
        <div className="absolute -bottom-10 -right-10 w-[300px] h-[300px] rounded-full bg-blue-600/40 blur-[120px] z-0"></div>
        {/* line */}
        <div className="-z-10 absolute -top-36 -right-58 rotate-[30deg] w-7/12 h-[300px] blur-[100px] bg-red-600/50" />
        {/* line circle  */}
        <div className="-z-10 absolute -bottom-8 -right-40 w-[550px] h-[550px] border border-gray-500/50 rounded-[50%]" />
        <div className="-z-10 absolute -bottom-10 -right-20 w-[450px] h-[450px] border border-gray-500/50 rounded-[50%]" />
        {/* circle */}
        <div className="-z-10 hidden md:block absolute bottom-0 right-[13%] translate-x-1/4  w-[500px] h-[500px] rounded-full bg-blue-600/70 blur-[100px]"></div>

      </div>
    </section>
  );
}



// import heroPhoto from "../assets/mahesh.png";

// export default function Hero() {
//   return (
//     <div className="container relative px-2 m-auto w-full h-[calc(100vh-80px)] max-h-[688px] flex flex-col justify-center overflow-x-visible">
//       <div className="font-outfit font-semibold">
//         <h1 className="text-4xl my-1">Hello Guys</h1>
//         <h1 className="text-6xl my-2">I'm Mahesh Udas</h1>
//         <h1 className="text-6xl">Full Stack Developer</h1>
//       </div>
//       <div className="flex gap-5 w-1/2 h-40 my-3 items-center">
//         <div className="border w-25 h-25 flex justify-center items-center">
//           X
//         </div>
//         <div className="flex gap-1 flex-col">
//           <p className="">
//             Lorem ipsum dolo iandae, rem quae quae Lorem ipsum dolo iandae, rem
//             quae
//           </p>
//           <a
//             href="#"
//             className="text-gray-50 text-lg font-semibold bg-blue-600 rounded-4xl flex items-center justify-center gap-2 px-6 py-2 w-fit"
//           >
//             Download CV
//           </a>
//         </div>
//       </div>

//       {/* line  */}
//       <div className="-z-10 absolute -top-36 -right-58 rotate-[30deg] w-7/12 h-[300px] blur-[100px] bg-red-600/50" />
//       {/* line circle  */}
//       <div className="-z-10 absolute -bottom-8 -right-40 w-[550px] h-[550px] border border-gray-500/50 rounded-[50%]" />
//       <div className="-z-10 absolute -bottom-10 -right-20 w-[450px] h-[450px] border border-gray-500/50 rounded-[50%]" />
//       {/* circle */}
//       <div className="-z-10 absolute bottom-0 right-[13%] translate-x-1/4  w-[500px] h-[500px] rounded-full bg-blue-600/70 blur-[100px]"></div>
//       {/* image */}
//       <div className="absolute right-[15%] translate-x-1/6 bottom-0 bg-opacity-0">
//         <img src={heroPhoto} alt="Mahesh Udas" className="w-90 relative" />
//       </div>
//     </div>
//   );
// }
