import aboutImage from "../../assets/bgImages/aboutImage.png";

function About() {
    return (
        <section id="about" className="bg-[#f5f5f5] min-h-screen flex items-center text-left">
            <div className="max-w-7xl mx-auto px-8">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-red-600 text-6xl font-extrabold uppercase mb-4">
                            ABOUT US
                        </h2>
                        <h3 className="uppercase text-2xl font-medium text-gray-800 mb-8">
                            Know More To Be More With Us
                        </h3>
                        <p className="text-gray-600 leading-10 text-lg">
                            Lorem ipsum dolor sit amet consectetur.
                            Non faucibus ut turpis magnis suscipit.
                            Lorem etiam sem condimentum ultrices mauris lacus.
                            Vel sed eget nulla sit sit.
                            Vitae aliquet fames accumsan magna tempor et
                            adipiscing aliquet arcu.

                            Mauris nisi mauris dignissim morbi.
                            Donec aliquam nisl eu pretium tortor enim nunc risus rhoncus.

                            Urna a eu in nibh mi malesuada.
                            Eget curabitur bibendum semper non eget.
                            Nibh faucibus eget fermentum nibh mauris.

                            Turpis eget in morbi nec.
                            Sit at luctus ultricies tristique magna pulvinar.
                        </p>
                    </div>
                    <div className="relative flex justify-center">
                        <img src={aboutImage} alt="fitness" className="relative z-10 max-h-175 object-contain" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;