import heroPhoto from "../assets/mahesh.png";

export default function Hero() {
  return (
    <div className="container relative px-2 m-auto w-full h-[calc(100vh-80px)] flex flex-col justify-center">
      <div className="font-outfit font-semibold">
        <h1 className="text-4xl my-1">Hello Guys</h1>
        <h1 className="text-5xl my-2">I'm Mahesh Udas</h1>
        <h1 className="text-5xl">Full Stack Developer</h1>
      </div>
      <div className="flex gap-2 w-1/2 h-40 my-3 items-center">
        <div className="border w-25 h-25 flex justify-center items-center">X</div>
        <div className="flex gap-1 flex-col">
          <p className="">
          Lorem ipsum dolo iandae, rem quae quae Lorem ipsum dolo iandae, rem quae
          </p>
          <a
            href="#"
            className="text-gray-50 text-lg font-semibold bg-blue-600 rounded-4xl flex items-center justify-center gap-2 px-6 py-2 w-fit"
          >
            Download CV
          </a>
        </div>
      </div>
        {/* image */}
        <div className="absolute right-0  w-[350px] h-[350px] rounded-full bg-[radial-gradient(circle,_#012f7b_0%,_#000d2b_60%)] z-0"></div>

      <div className="absolute bottom-0 right-[15%]">
        <img
          src={heroPhoto}
          alt="Mahesh Udas"
          className="w-90"
        />
      </div>
    </div>
  );
}
