import { WhatsApp } from "../icons/MySvgs";
import { Link } from "react-router-dom";

const Video = () => {
  return (
    <div className="h-[70vh] lg:h-screen w-full overflow-hidden">
      <video
        src="/videos/video.mp4"
        muted
        playsInline
        autoPlay
        loop
        className="w-full h-full object-cover overflow-hidden"
      ></video>
      <a
        href="https://wa.me/5493874685060"
        target="_blank"
        rel="noreferrer"
        className="fixed z-20 bottom-8 right-8 bg-primary rounded-full p-3 text-white hover:bg-black transition-colors"
      >
        <WhatsApp />
      </a>

      <div className="fixed z-20 bottom-10 left-8">
        <Link
          to="/pre-consulta"
          className="bg-primary px-8 py-3 font-bold hover:bg-black transition-colors text-white"
        >
          Pre-Consulta Online
        </Link>
      </div>
    </div>
  );
};

export default Video;
