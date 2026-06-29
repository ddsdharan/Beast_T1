import { FaPlay } from "react-icons/fa";

export default function VideoButton() {
    return (
        <div className="absolute left-24 top-1/2 -translate-y-1/2 flex flex-col items-center">
            <button
                className="
          w-32 h-32
          rounded-full
          bg-white/10
          backdrop-blur-sm
          flex items-center justify-center
          hover:scale-105
          transition
        "
            >
                <FaPlay
                    className="text-white text-3xl ml-1"
                />
            </button>

            <span
                className="
          text-white
          font-semibold
          tracking-widest
          -rotate-90
          mt-16
          whitespace-nowrap
        "
            >
                PLAY VIDEO
            </span>
        </div>
    );
}