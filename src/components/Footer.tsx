import facebook from "../assets/icons/facebook.svg";
import linkedin from "../assets/icons/linkedin.svg";
import X from "../assets/icons/x.svg";

export default function Footer() {
  return (
    <footer className="bg-zinc-950 relative overflow-hidden">
      <div className="container m-auto bg-transparent relative z-10">
        {/* footer content */}
        <div className="py-4 pb-10 flex justify-between">
          <div className="w-[30%] flex flex-col gap-3">
            <h1 className="text-xl underline underline-offset-3 decoration-1 text-white">
              About Me
            </h1>
            <p className="text-justify text-white">
              Lorem ipsum dolor stio corporis totam laborum sequi ad
              voluptatibus, tempore ea rerum incidunt quasi minima consectetur.
            </p>
            <a
              href="#"
              className="text-gray-50 text-md font-semibold bg-blue-600 rounded-4xl flex items-center justify-center gap-2 px-3 py-2 w-fit"
            >
              Download CV
            </a>
          </div>

          <div className="w-[15%] flex flex-col">
            <h1 className="text-xl underline underline-offset-3 decoration-1">
              Quick Links
            </h1>
            <ul className="list-none text-white">
              <li className="my-2">
                <a href="#" className="hover:text-gray-400">
                  Home
                </a>
              </li>
              <li className="my-2">
                <a href="#" className="hover:text-gray-400">
                  About
                </a>
              </li>
              <li className="my-2">
                <a href="#" className="hover:text-gray-400">
                  Services
                </a>
              </li>
              <li className="my-2">
                <a href="#" className="hover:text-gray-400">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="w-[30%] flex flex-col gap-3">
            {/* Follow Me */}
            <h1 className="text-xl underline underline-offset-3 decoration-1">
              Connect me on
            </h1>
            <a href="facebook.com" className="flex text-xl items-center gap-2">
                <img
                    src={facebook}
                    alt="Facebook"
                    className="w-8 h-8 hover:scale-110 transition-transform duration-300"
                />
                <div>facebook</div>
            </a>
            <a href="facebook.com" className="flex text-xl items-center gap-2">
                <img
                    src={linkedin}
                    alt="Facebook"
                    className="w-8 h-8 hover:scale-110 transition-transform duration-300"
                />
                <div>LinkedIn</div>
            </a>
            <a href="facebook.com" className="flex text-xl items-center gap-2">
                <img
                    src={X}
                    alt="Facebook"
                    className="w-7 h-7 hover:scale-110 transition-transform duration-300 bg-white rounded-md"
                />
                <div>Twitter</div>
            </a>
          </div>
        </div>

        <div className="border-t border-gray-400 flex flex-col items-center justify-between p-4 text-white md:flex-row">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Mahesh Udas. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-gray-400">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-gray-400">
              Terms of Service
            </a>
            <a href="#" className="hover:text-gray-400">
              Contact
            </a>
          </div>
        </div>

        {/* background circle */}
        <div className="w-[40%] h-[200px] rounded-[50%] -rotate-0  bg-pink-500/50 absolute -bottom-8 -right-32 blur-[120px] z-0" />
      </div>
    </footer>
  );
}
