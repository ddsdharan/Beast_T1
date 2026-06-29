// import heroImage from "../../assets/bgImages/heroBg.png";

// import VideoButton from "../buttons/videoButton";

// import HeroSlider from "../buttons/videoSlider";

// export default function HeroSection() {
//     return (
//         <>
//             <section
//                 className="relative h-screen bg-cover bg-center scale-100"
//                 style={{
//                     backgroundImage:
//                         `url(${heroImage})`,
//                 }}
//             >
//                 <div className="absolute inset-0 bg-black/70" />
//                 <div className="relative z-10 h-10/12 max-w-7xl mx-auto grid grid-cols-12">
//                     <div className="col-span-3 flex items-center">
//                         <VideoButton />
//                     </div>

//                     <div className="col-span-9 flex items-center">
//                         <div className="max-w-7xl p-0 justify-items-start">
//                             <p className="text-red-500 font-semibold uppercase text-lg mb-4">
//                                 CARDIO
//                             </p>

//                             <h1 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight letter-spacing-wide text-left vertical-align-middle">
//                                 LIVE IT
//                                 <br />
//                                 LIKE A ROCK!
//                             </h1>
//                         </div>
//                     </div>
//                 </div>
//                 <HeroSlider />
//             </section>

//         </>
//     );
// }


import heroImage from "../../assets/bgImages/heroBg.png";
import VideoButton from "../../components/buttons/videoButton";
import HeroSlider from "../../components/buttons/videoSlider";

export default function HeroSection() {
    return (
        <section
            className="relative min-h-screen bg-cover bg-center"
            style={{
                backgroundImage: `url(${heroImage})`,
            }}
        >
            <div className="absolute inset-0 bg-black/70"></div>
            <div className="relative z-10 max-w-7xl mx-auto min-h-screen px-6 lg:px-8 flex items-center">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full">
                    <div className="lg:col-span-3 flex justify-center lg:justify-start">
                        <VideoButton />
                    </div>
                    <div className="lg:col-span-9 text-center lg:text-left">
                        <p className="uppercase text-red-500 tracking-[4px] font-semibold text-sm md:text-base mb-4">
                            CARDIO
                        </p>
                        <h1
                            className="
              text-white
              font-black
              uppercase
              leading-tight
              text-4xl
              sm:text-5xl
              md:text-6xl
              lg:text-7xl
              xl:text-8xl
            "
                        >
                            LIVE IT
                            <br />
                            LIKE A ROCK!
                        </h1>
                    </div>
                </div>
            </div>
            <div className="absolute bottom-6 left-0 w-full px-6 lg:px-0">
                <HeroSlider />
            </div>
        </section>
    );
}