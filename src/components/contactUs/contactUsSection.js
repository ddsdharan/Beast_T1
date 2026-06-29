import { ArrowRight } from "lucide-react";

export default function ContactSection() {
    return (
        <section className="bg-white py-24">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-20 items-center">
                    <div>
                        <span className="text-red-600 uppercase tracking-widest text-sm">
                            Contact Us
                        </span>

                        <h2 className="mt-8 text-5xl md:text-6xl font-black uppercase leading-tight">
                            <span className="text-[#1A0A0A] block">
                                Get In Touch
                            </span>

                            <span className="text-red-600 block mt-2">
                                Reach Out To Us
                            </span>
                        </h2>
                    </div>

                    <form className="space-y-10">
                        <div>
                            <label className="block uppercase text-gray-700 font-semibold tracking-wide mb-3">
                                Name
                            </label>

                            <input
                                type="text"
                                placeholder="Your Name"
                                className="w-full border-b border-gray-300 focus:border-red-600 outline-none py-3 transition-all"
                            />
                        </div>

                        {/* Email */}
                        <div>
                            <label className="block uppercase text-gray-700 font-semibold tracking-wide mb-3">
                                Email
                            </label>

                            <input
                                type="email"
                                placeholder="example@email.com"
                                className="w-full border-b border-gray-300 focus:border-red-600 outline-none py-3 transition-all"
                            />
                        </div>

                        <div>
                            <label className="block uppercase text-gray-700 font-semibold tracking-wide mb-3">
                                Message
                            </label>

                            <textarea
                                rows={4}
                                placeholder="Write your message..."
                                className="w-full border-b border-gray-300 resize-none focus:border-red-600 outline-none py-3 transition-all"
                            />
                        </div>

                        <button
                            type="submit"
                            className="group w-full bg-red-600 hover:bg-red-700 text-white uppercase font-bold tracking-wider py-6 flex items-center justify-center gap-4 transition-all duration-300"
                        >
                            Send Message

                            <ArrowRight
                                size={22}
                                className="transition-transform duration-300 group-hover:translate-x-2"
                            />
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}