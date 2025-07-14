export default function Contact() {
  return (
    <section
      id="contact"
      className="py-16 bg-black text-white border-t border-gray-800"
    >
      <div className="container m-auto px-4 max-w-3xl">
        <h2 className="text-3xl font-bold mb-10 text-center">Get in Touch</h2>

        <div className="space-y-5 text-center text-lg">
          <p>You can reach me anytime through the platforms below:</p>

          <div className="space-y-3">
            <p>
              <span className="font-semibold">Email:</span>{" "}
              <a
                href="mailto:maheshudas2077@gmail.com"
                className="text-blue-400 underline hover:text-blue-300"
              >
                maheshudas2077@gmail.com
              </a>
            </p>

            <p>
              <span className="font-semibold">LinkedIn:</span>{" "}
              <a
                href="https://www.linkedin.com/in/mahesh-udas-a691b32b3"
                className="text-blue-400 underline hover:text-blue-300"
                target="_blank"
                rel="noreferrer"
              >
                linkedin.com/in/mahesh-udas
              </a>
            </p>

            <p>
              <span className="font-semibold">GitHub:</span>{" "}
              <a
                href="https://github.com/meshcode21"
                className="text-blue-400 underline hover:text-blue-300"
                target="_blank"
                rel="noreferrer"
              >
                github.com/meshcode21
              </a>
            </p>

            <p>
              <span className="font-semibold">Twitter:</span>{" "}
              <a
                href="https://x.com/maheshudas10101"
                className="text-blue-400 underline hover:text-blue-300"
                target="_blank"
                rel="noreferrer"
              >
                @maheshudas10101
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
