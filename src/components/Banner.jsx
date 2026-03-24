import { FaAppStoreIos } from "react-icons/fa6";
import { PiGooglePlayLogoLight } from "react-icons/pi";
import heroImage from "../assets/hero.png";
const Banner = () => {
  return (
    <section className="text-center py-20 bg-gray-100">
      <h1 className="text-5xl font-bold">
        We Build <br /> <span className="text-[#9F62F2]">Productive</span> Apps
      </h1>

      <p className="mt-4 text-gray-600">
        At EaseCraft, we craft innovative apps designed to make everyday life
        simpler, smarter, and more exciting. <br /> Our goal is to turn your
        ideas into digital experiences that truly make an impact.
      </p>

      <div className="mt-6 flex justify-center gap-4">
        <a
          href="https://play.google.com/"
          className=" border px-6 py-3 rounded flex gap-2 items-center justify-center hover:bg-gray-300"
        >
          <PiGooglePlayLogoLight />
          <span>Google Play</span>
        </a>
        <a
          href="https://www.apple.com/app-store/"
          className="border px-6 py-3 rounded flex gap-2 items-center justify-center hover:bg-gray-300"
        >
          <FaAppStoreIos />
          <span>App Store</span>
        </a>
      </div>
      <img
        src={heroImage}
        alt="hero image"
        className="text-center mt-8 mx-auto w-1/2"
      />
    </section>
  );
};

export default Banner;
