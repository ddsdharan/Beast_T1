import { ArrowRight } from "lucide-react";
import {
    FaFacebookF,
    FaInstagram,
    FaLinkedinIn,
    FaXTwitter,
} from "react-icons/fa6";

import BeastLogo from "../../assets/logos/Logo white.png"

export default function Footer() {
    return (
        <footer className="bg-[#111111] text-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 py-14">
                <div className="flex flex-col lg:flex-row justify-between items-center gap-10">
                    {/* Logo */}
                    <div className="flex items-center">
                        <img
                            src={BeastLogo}
                            alt="Beast Fitness"
                            className="h-14 object-contain"
                        />
                    </div>

                    <div className="flex flex-col md:flex-row items-center gap-6 w-full lg:w-auto">
                        <h3 className="uppercase text-lg font-medium tracking-wide whitespace-nowrap">
                            Subscribe To Our Newsletter
                        </h3>

                        <div className="flex items-center bg-[#24272C] w-full md:w-105">
                            <input
                                type="email"
                                placeholder="YOUR EMAIL"
                                className="flex-1 bg-transparent px-5 py-5 text-white placeholder:text-white uppercase outline-none"
                            />

                            <button className="px-6 hover:bg-red-600 transition-colors duration-300">
                                <ArrowRight size={24} />
                            </button>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-800 my-12"></div>

                <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
                    <p className="text-gray-300 text-center lg:text-left">
                        © Beast 2019 All Rights Reserved.
                    </p>

                    <div className="flex items-center gap-6 text-sm uppercase font-semibold">
                        <a
                            href="/terms-and-conditions"
                            className="hover:text-red-500 transition-colors"
                        >
                            Terms & Conditions
                        </a>

                        <span className="text-gray-600">|</span>

                        <a
                            href="/privacy-policy"
                            className="hover:text-red-500 transition-colors"
                        >
                            Privacy Policy
                        </a>
                    </div>

                    <div className="flex items-center gap-4">
                        {[
                            { icon: <FaFacebookF />, link: "https://facebook.com" },
                            { icon: <FaXTwitter />, link: "https://twitter.com" },
                            { icon: <FaInstagram />, link: "https://instagram.com" },
                            { icon: <FaLinkedinIn />, link: "https://linkedin.com" },
                        ].map((item, index) => (
                            <a
                                key={index}
                                href={item.link}
                                className="w-10 h-10 bg-white text-black flex items-center justify-center rounded hover:bg-red-600 hover:text-white transition-all duration-300"
                            >
                                {item.icon}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}