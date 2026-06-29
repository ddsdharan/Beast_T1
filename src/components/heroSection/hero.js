import heroImage from "../../assets/bgImages/heroBg.png";

import VideoButton from "../buttons/videoButton";

import HeroSlider from "../buttons/videoSlider";

export default function HeroSection() {
    return (
        <>
            <section
                className="relative h-screen bg-cover bg-center scale-100"
                style={{
                    backgroundImage:
                        `url(${heroImage})`,
                }}
            >
                <div className="absolute inset-0 bg-black/70" />


                {/* <div className="relative z-10 h-full flex items-center">
                    <div className="max-w-7xl mx-auto px-8 justify-items-start">
                        <p className="text-red-500 uppercase text-xl mb-4">
                            Cardio
                        </p>
                        <h1 className="text-white text-7xl font-bold leading-tight text-left">
                            LIVE IT
                            <br />
                            LIKE A ROCK!
                        </h1>
                    </div>
                </div> */}

                <div className="relative z-10 h-10/12 max-w-7xl mx-auto grid grid-cols-12">
                    <div className="col-span-3 flex items-center">
                        <VideoButton />
                    </div>

                    <div className="col-span-9 flex items-center">
                        <div className="max-w-7xl p-0 justify-items-start">
                            <p className="text-red-500 font-semibold uppercase text-lg mb-4">
                                CARDIO
                            </p>

                            <h1 className="text-white text-8xl font-bold leading-tight letter-spacing-wide text-left vertical-align-middle">
                                LIVE IT
                                <br />
                                LIKE A ROCK!
                            </h1>
                        </div>
                    </div>




                </div>

                <HeroSlider />






            </section>

        </>
    );
}