import heroPhoto from "../assets/mahesh.png";

export default function Hero() {
  return (
    <div className="container relative px-2 m-auto w-full h-[calc(100vh-80px)] max-h-[688px] flex flex-col justify-center overflow-x-visible">
      <div className="font-outfit font-semibold">
        <h1 className="text-4xl my-1">Hello Guys</h1>
        <h1 className="text-6xl my-2">I'm Mahesh Udas</h1>
        <h1 className="text-6xl">Full Stack Developer</h1>
      </div>
      <div className="flex gap-5 w-1/2 h-40 my-3 items-center">
        <div className="border w-25 h-25 flex justify-center items-center">
          X
        </div>
        <div className="flex gap-1 flex-col">
          <p className="">
            Lorem ipsum dolo iandae, rem quae quae Lorem ipsum dolo iandae, rem
            quae
          </p>
          <a
            href="#"
            className="text-gray-50 text-lg font-semibold bg-blue-600 rounded-4xl flex items-center justify-center gap-2 px-6 py-2 w-fit"
          >
            Download CV
          </a>
        </div>
      </div>

      {/* line  */}
      <div className="-z-10 absolute -top-36 -right-58 rotate-[30deg] w-7/12 h-[300px] blur-[100px] bg-red-600/50" />
      {/* line circle  */}
      <div className="-z-10 absolute -bottom-8 -right-40 w-[550px] h-[550px] border border-gray-500/50 rounded-[50%]" />
      <div className="-z-10 absolute -bottom-10 -right-20 w-[450px] h-[450px] border border-gray-500/50 rounded-[50%]" />
      {/* circle */}
      <div className="-z-10 absolute bottom-0 right-[13%] translate-x-1/4  w-[500px] h-[500px] rounded-full bg-blue-600/70 blur-[100px]"></div>
      {/* image */}
      <div className="absolute right-[15%] translate-x-1/6 bottom-0 bg-opacity-0">
        <img src={heroPhoto} alt="Mahesh Udas" className="w-90 relative" />
      </div>
    </div>
  );
}
