import { useState, useEffect } from "react";

// Import your images
import gallery1 from "../../assets/bgImages/GalleryImage1.png";
import gallery2 from "../../assets/bgImages/GalleryImage2.png";
import gallery3 from "../../assets/bgImages/GalleryImage3.png";
import gallery4 from "../../assets/bgImages/GalleryImage4.png";
import gallery5 from "../../assets/bgImages/GalleryImage1.png";

const images = [
    {
        id: 1,
        src: gallery1,
        alt: "Workout 1",
    },
    {
        id: 2,
        src: gallery2,
        alt: "Workout 2",
    },
    {
        id: 3,
        src: gallery3,
        alt: "Workout 3",
    },
    {
        id: 4,
        src: gallery4,
        alt: "Workout 4",
    },
    {
        id: 5,
        src: gallery5,
        alt: "Workout 5",
    },
];


export default function Gallery() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [pause, setPause] = useState(false);
    const [fade, setFade] = useState(true);

    useEffect(() => {
        if (pause) return;

        const interval = setInterval(() => {
            nextSlide();
        }, 2000);

        return () => clearInterval(interval);
    }, [currentIndex, pause]);

    const nextSlide = () => {
        setFade(false);

        setTimeout(() => {
            setCurrentIndex((prev) => (prev + 1) % images.length);
            setFade(true);
        }, 200);
    };

    const changeImage = (index) => {
        setFade(false);

        setTimeout(() => {
            setCurrentIndex(index);
            setFade(true);
        }, 200);
    };

    return (
        <section id="gallery" className="py-20 bg-white">
            <div
                className="max-w-7xl mx-auto px-4"
                onMouseEnter={() => setPause(true)}
                onMouseLeave={() => setPause(false)}
            >
                <div className="relative overflow-hidden rounded-lg shadow-xl">
                    <img
                        src={images[currentIndex].src}
                        alt={images[currentIndex].alt}
                        className={`w-full h-162.5 object-cover transition-all duration-700 ${fade ? "opacity-100 scale-100" : "opacity-0 scale-105"
                            }`}
                    />

                    <div className="absolute inset-0 bg-black/20"></div>

                    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-4">
                        {images.map((image, index) => (
                            <button
                                key={image.id}
                                onClick={() => changeImage(index)}
                                className={`relative overflow-hidden transition-all duration-300
                  ${currentIndex === index
                                        ? "ring-4 ring-white scale-105"
                                        : "opacity-80 hover:opacity-100 hover:scale-105"
                                    }`}
                            >
                                <img
                                    src={image.src}
                                    alt={image.alt}
                                    className="w-40 h-24 md:w-44 md:h-28 object-cover"
                                />

                                <div
                                    className={`absolute inset-0 transition duration-300
                  ${currentIndex === index
                                            ? "bg-transparent"
                                            : "bg-black/40 hover:bg-black/10"
                                        }`}
                                ></div>
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}