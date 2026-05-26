import { FaLocationArrow } from "react-icons/fa6";
import MagicButton from "./MagicButton";

const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-10 relative overflow-hidden" id="contact">
      {/* background grid */}
      <div className="w-full absolute left-0 bottom-0 min-h-96 pointer-events-none z-0">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50"
        />
      </div>

      <div className="flex flex-col items-center relative z-10">
        <h1 className="heading lg:max-w-[45vw]">
          Ready to build something <span className="text-purple">incredible</span> together?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Reach out to me today and let&apos;s discuss how I can contribute to your team&apos;s success.
        </p>
        <a href="mailto:harshashetty256@gmail.com">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      
      <div className="flex mt-16 md:flex-row flex-col justify-center items-center relative z-10">
        <p className="md:text-base text-sm md:font-normal font-light text-center">
          Copyright © 2025 Harsha Shetty
        </p>
      </div>
    </footer>
  );
};

export default Footer;

