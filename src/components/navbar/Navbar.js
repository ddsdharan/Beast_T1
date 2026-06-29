// import heroLogo from "../../assets/logos/Logo white.png";

// export default function Navbar() {
//     const HandleJoinNowButtonClick = () => {
//         window.location.href = "#join-now";
//     };

//     const links = [
//         {
//             name: "ABOUT US",
//             href: "#about",
//         },
//         {
//             name: "FACILITIES",
//             href: "#facilities",
//         },
//         {
//             name: "BMI",
//             href: "#bmi",
//         },
//         {
//             name: "SCHEDULE",
//             href: "#schedule",
//         },
//         {
//             name: "REVIEWS",
//             href: "#reviews",
//         },
//         {
//             name: "COACHES",
//             href: "#coaches",
//         },
//         {
//             name: "BLOG",
//             href: "#blog",
//         },
//         {
//             name: "GALLERY",
//             href: "#gallery",
//         },


//     ];

//     return (
//         <nav className="fixed top-0 left-0 w-full z-20">
//             <div className="max-w-7xl mx-auto flex justify-between items-center py-6 px-0">
//                 <a href="/" className="heroLogo" aria-label="Home">
//                     <img src={heroLogo} alt="Home" />
//                 </a>
//                 <div className="flex justify-end items-center gap-8">
//                     {links.map((item) => (
//                         <a
//                             key={item.name}
//                             href={item.href}
//                             className="text-white uppercase text-sm hover:text-red-500"
//                         >
//                             {item.name}
//                         </a>
//                     ))}

//                     <button onClick={HandleJoinNowButtonClick} className="bg-red-600 px-8 py-4 text-white font-semibold hover:bg-red-700 transition">
//                         JOIN NOW
//                     </button>
//                 </div>
//             </div>
//         </nav>
//     );
// }




import { useState } from "react";
import { Menu, X } from "lucide-react";
import heroLogo from "../../assets/logos/Logo white.png";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const links = [
        { name: "ABOUT US", href: "#about" },
        { name: "FACILITIES", href: "#facilities" },
        { name: "BMI", href: "#bmi" },
        { name: "SCHEDULE", href: "#schedule" },
        { name: "REVIEWS", href: "#reviews" },
        { name: "COACHES", href: "#coaches" },
        { name: "BLOG", href: "#blog" },
        { name: "GALLERY", href: "#gallery" },
    ];

    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-black/40 backdrop-blur-md">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">

                    <a href="/">
                        <img
                            src={heroLogo}
                            alt="Logo"
                            className="h-10 w-auto"
                        />
                    </a>

                    <div className="hidden lg:flex items-center gap-8">
                        {links.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                className="text-white text-sm uppercase hover:text-red-500 transition"
                            >
                                {item.name}
                            </a>
                        ))}

                        <a
                            href="#join-now"
                            className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 font-semibold transition"
                        >
                            Join Now
                        </a>
                    </div>

                    <button
                        className="text-white lg:hidden"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? (
                            <X size={30} />
                        ) : (
                            <Menu size={30} />
                        )}
                    </button>
                </div>
            </div>

            <div
                className={`lg:hidden bg-black transition-all duration-500 overflow-hidden ${isOpen ? "max-h-screen py-6" : "max-h-0"
                    }`}
            >
                <div className="flex flex-col">

                    {links.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            onClick={() => setIsOpen(false)}
                            className="px-6 py-4 border-b border-gray-800 uppercase text-white hover:bg-red-600 transition"
                        >
                            {item.name}
                        </a>
                    ))}

                    <a
                        href="#join-now"
                        onClick={() => setIsOpen(false)}
                        className="mx-6 mt-6 bg-red-600 text-center py-4 font-semibold hover:bg-red-700 transition"
                    >
                        Join Now
                    </a>
                </div>
            </div>
        </nav>
    );
}



