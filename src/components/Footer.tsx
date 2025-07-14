import { Facebook, Github, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="overflow-clip relative bg-gradient-to-t from-black to-gray-950 text-white border-t border-gray-800 pt-16 pb-8">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between gap-10">
        {/* About */}
        <div className="flex flex-col">
          <h3 className="text-xl font-bold mb-4 text-blue-500">Mahesh Udas</h3>
          <p className="text-gray-400 max-w-sm">
            A passionate full stack developer skilled in React, Node.js, Tailwind CSS, and more.
            I love building modern, scalable apps that solve real-world problems.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-gray-300">
            {["home", "about", "projects", "contact"].map((link) => (
              <li key={link}>
                <a
                  href={`#${link}`}
                  className="hover:text-white hover:underline underline-offset-4 transition"
                >
                  {link.charAt(0).toUpperCase() + link.slice(1)}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Socials */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Connect</h4>
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/meshcode21"
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-400 transition"
            >
              <Github />
            </a>
            <a
              href="https://www.linkedin.com/in/mahesh-udas-a691b32b3"
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-400 transition"
            >
              <Linkedin />
            </a>
            <a
              href="https://x.com/maheshudas10101"
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-400 transition"
            >
              <Twitter />
            </a>
            <a
              href="https://www.facebook.com/mahesh.10110"
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-400 transition"
            >
              <Facebook />
            </a>
          </div>
        </div>
      </div>

      {/* background circle */}
      <div className="w-[40%] h-[200px] rounded-[50%] -rotate-0  bg-blue-500/50 absolute -bottom-8 -right-32 blur-[120px] z-0" />

      {/* Copyright */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-400 text-sm">
        &copy; {new Date().getFullYear()} Mahesh Udas. All rights reserved.
      </div>
    </footer >
  );
}



// import X from "../assets/icons/x.svg";

// export default function Footer() {
//   return (
//     <footer className="bg-zinc-950 relative overflow-hidden">
//       <div className="container m-auto bg-transparent relative z-10">
//         {/* footer content */}
//         <div className="py-4 px-2 pb-10 flex md:justify-between flex-col gap-5">
//           <div className="md:w-[30%] flex flex-col gap-3">
//             <h1 className="text-xl underline underline-offset-3 decoration-1 text-white">
//               About Me
//             </h1>
//             <p className="text-justify text-white">
//               Lorem ipsum dolor stio corporis totam laborum sequi ad
//               voluptatibus, tempore ea rerum incidunt quasi minima consectetur.
//             </p>
//             <a
//               href="#"
//               className="text-gray-50 text-md font-semibold bg-blue-600 rounded-4xl flex items-center justify-center gap-2 px-3 py-2 w-fit"
//             >
//               Download CV
//             </a>
//           </div>

//           <div className="md:w-[15%] flex flex-col">
//             <h1 className="text-xl underline underline-offset-3 decoration-1">
//               Quick Links
//             </h1>
//             <ul className="list-none text-white flex gap-4">
//               <li className="my-2">
//                 <a href="#" className="hover:text-gray-400">
//                   Home
//                 </a>
//               </li>
//               <li className="my-2">
//                 <a href="#" className="hover:text-gray-400">
//                   About
//                 </a>
//               </li>
//               <li className="my-2">
//                 <a href="#" className="hover:text-gray-400">
//                   Services
//                 </a>
//               </li>
//               <li className="my-2">
//                 <a href="#" className="hover:text-gray-400">
//                   Contact
//                 </a>
//               </li>
//             </ul>
//           </div>
//           <div className="md:w-[30%] flex flex-col gap-3">
//             {/* Follow Me */}
//             <h1 className="text-xl underline underline-offset-3 decoration-1">
//               Get In Touch
//             </h1>
//             <div className="flex gap-3">
//               <a href="https://www.facebook.com/mahesh.10110" className="flex text-xl items-center gap-1">
//                 <svg className="size-7" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="none"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill="#1877F2" d="M15 8a7 7 0 00-7-7 7 7 0 00-1.094 13.915v-4.892H5.13V8h1.777V6.458c0-1.754 1.045-2.724 2.644-2.724.766 0 1.567.137 1.567.137v1.723h-.883c-.87 0-1.14.54-1.14 1.093V8h1.941l-.31 2.023H9.094v4.892A7.001 7.001 0 0015 8z"></path><path fill="#ffffff" d="M10.725 10.023L11.035 8H9.094V6.687c0-.553.27-1.093 1.14-1.093h.883V3.87s-.801-.137-1.567-.137c-1.6 0-2.644.97-2.644 2.724V8H5.13v2.023h1.777v4.892a7.037 7.037 0 002.188 0v-4.892h1.63z"></path></g></svg>
//                 <div>facebook</div>
//               </a>
//               <a href="https://www.linkedin.com/in/mahesh-udas-a691b32b3/" className="flex text-xl items-center gap-1">
//                 <svg className="size-7" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <circle cx="24" cy="24" r="20" fill="#0077B5"></circle> <path fill-rule="evenodd" clip-rule="evenodd" d="M18.7747 14.2839C18.7747 15.529 17.8267 16.5366 16.3442 16.5366C14.9194 16.5366 13.9713 15.529 14.0007 14.2839C13.9713 12.9783 14.9193 12 16.3726 12C17.8267 12 18.7463 12.9783 18.7747 14.2839ZM14.1199 32.8191V18.3162H18.6271V32.8181H14.1199V32.8191Z" fill="white"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M22.2393 22.9446C22.2393 21.1357 22.1797 19.5935 22.1201 18.3182H26.0351L26.2432 20.305H26.3322C26.9254 19.3854 28.4079 17.9927 30.8101 17.9927C33.7752 17.9927 35.9995 19.9502 35.9995 24.219V32.821H31.4922V24.7838C31.4922 22.9144 30.8404 21.6399 29.2093 21.6399C27.9633 21.6399 27.2224 22.4999 26.9263 23.3297C26.8071 23.6268 26.7484 24.0412 26.7484 24.4574V32.821H22.2411V22.9446H22.2393Z" fill="white"></path> </g></svg>
//                 <div>LinkedIn</div>
//               </a>
//               <a href="https://x.com/maheshudas10101" className="flex text-xl items-center gap-1">
//                 <img
//                   src={X}
//                   alt="Facebook"
//                   className="size-6 hover:scale-110 transition-transform duration-300 bg-gray-300 rounded-md"
//                 />
//                 <div>Twitter</div>
//               </a>
//             </div>
//           </div>
//         </div>

//         <div className="border-t border-gray-400 flex flex-col items-center justify-between p-4 text-white md:flex-row">
//           <p className="text-sm">
//             &copy; {new Date().getFullYear()} Mahesh Udas. All rights reserved.
//           </p>
//           <div className="flex space-x-4">
//             <a href="#" className="hover:text-gray-400">
//               Privacy Policy
//             </a>
//             <a href="#" className="hover:text-gray-400">
//               Terms of Service
//             </a>
//             <a href="#" className="hover:text-gray-400">
//               Contact
//             </a>
//           </div>
//         </div>

//         {/* background circle */}
//         <div className="w-[40%] h-[200px] rounded-[50%] -rotate-0  bg-pink-500/50 absolute -bottom-8 -right-32 blur-[120px] z-0" />
//       </div>
//     </footer>
//   );
// }
