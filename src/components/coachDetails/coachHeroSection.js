import { useParams } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import coaches from "../../datas/coachDatas";
import { FaFacebookF, FaSquareTwitter, FaInstagram, FaLinkedin } from "react-icons/fa6";

function CoachDetails() {
    const { slug } = useParams();

    const coach = coaches.find(
        (item) => item.slug === slug
    );

    if (!coach) {
        return (
            <div className="h-screen flex items-center justify-center">
                <h1 className="text-4xl font-bold">
                    Coach Not Found
                </h1>
            </div>
        );
    }

    return (
        <>

            <section className="relative min-h-screen">


                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: `url(${coach.background})`,
                    }}
                />

                <div className="absolute inset-0 bg-black/70" />

                <div
                    className="
            relative z-10
            max-w-7xl
            mx-auto
            px-6
            py-32
          "
                >
                    <div
                        className="
              grid
              grid-cols-1
              lg:grid-cols-2
              gap-16
              items-center
            "
                    >

                        <div>
                            <img
                                src={coach.image}
                                alt={coach.name}
                                className="
                  w-full
                  border-[6px]
                  border-red-600
                "
                            />
                        </div>


                        <div className="text-white">

                            <h1
                                className="
                  text-6xl
                  md:text-7xl
                  lg:text-8xl
                  font-bold
                  uppercase
                  mb-4
                "
                            >
                                {coach.name}
                            </h1>

                            <p
                                className="
                  text-red-600
                  uppercase
                  text-xl
                  mb-10
                "
                            >
                                {coach.role}
                            </p>

                            <div className="space-y-6 text-xl">

                                <p>
                                    AGE:
                                    <span className="ml-4 font-bold">
                                        {coach.age}
                                    </span>
                                </p>

                                <p>
                                    EXPERIENCE:
                                    <span className="ml-4 font-bold">
                                        {coach.experience}
                                    </span>
                                </p>

                                <p>
                                    PHONE:
                                    <span className="ml-4 font-bold">
                                        {coach.phone}
                                    </span>
                                </p>

                                <p>
                                    EMAIL:
                                    <span className="ml-4 font-bold">
                                        {coach.email}
                                    </span>
                                </p>

                            </div>


                            <div className="flex gap-4 mt-14">

                                <a
                                    href={coach.socials.facebook}
                                    className="
                    w-12 h-12
                    bg-white
                    text-black
                    flex
                    items-center
                    justify-center
                    hover:bg-red-600
                    hover:text-white
                    transition
                  "
                                >
                                    <FaFacebookF />
                                </a>

                                <a
                                    href={coach.socials.twitter}
                                    className="
                    w-12 h-12
                    bg-white
                    text-black
                    flex
                    items-center
                    justify-center
                    hover:bg-red-600
                    hover:text-white
                    transition
                  "
                                >
                                    <FaSquareTwitter />
                                </a>

                                <a
                                    href={coach.socials.instagram}
                                    className="
                    w-12 h-12
                    bg-white
                    text-black
                    flex
                    items-center
                    justify-center
                    hover:bg-red-600
                    hover:text-white
                    transition
                  "
                                >
                                    <FaInstagram />
                                </a>

                                <a
                                    href={coach.socials.linkedin}
                                    className="
                    w-12 h-12
                    bg-white
                    text-black
                    flex
                    items-center
                    justify-center
                    hover:bg-red-600
                    hover:text-white
                    transition
                  "
                                >
                                    <FaLinkedin />
                                </a>

                            </div>

                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-white py-16">

                <div
                    className="
            max-w-7xl
            mx-auto
            px-6
            flex
            flex-wrap
            justify-center
            gap-12
          "
                >
                    {coach.certifications?.map(
                        (certification, index) => (
                            <img
                                key={index}
                                src={certification}
                                alt=""
                                className="
                  h-20
                  md:h-24
                  object-contain
                "
                            />
                        )
                    )}
                </div>

            </section>


            <section className="bg-[#f8f8f8] py-28">

                <div className="max-w-7xl mx-auto px-6">

                    <div className="text-center mb-16">

                        <h2
                            className="
                text-red-600
                uppercase
                text-5xl
                md:text-6xl
                font-bold
                mb-4
              "
                        >
                            Introduction
                        </h2>

                        <p className="uppercase text-gray-600">
                            Read Biography Of A Coach
                        </p>

                    </div>

                    <p
                        className="
              max-w-6xl
              mx-auto
              text-center
              text-gray-600
              leading-10
              text-lg
            "
                    >
                        {coach.biography}
                    </p>

                </div>

            </section>


            <section className="bg-[#f8f8f8] pb-32">

                <div className="max-w-7xl mx-auto px-6">

                    <div className="text-center mb-20">

                        <h2
                            className="
                text-red-600
                uppercase
                text-5xl
                md:text-6xl
                font-bold
                mb-4
              "
                        >
                            Skills
                        </h2>

                        <p className="uppercase text-gray-600">
                            Skillset Of Our Coach
                        </p>

                    </div>

                    <div
                        className="
              grid
              grid-cols-1
              lg:grid-cols-2
              gap-16
            "
                    >
                        <div>

                            <p
                                className="
                  text-gray-600
                  text-lg
                  leading-10
                "
                            >
                                {coach.biography}
                            </p>

                        </div>

                        <div>

                            {coach.skills.map((skill) => (
                                <div
                                    key={skill.name}
                                    className="mb-12"
                                >
                                    <div className="flex justify-between mb-3">

                                        <h4
                                            className="
                        uppercase
                        font-bold
                        text-2xl
                      "
                                        >
                                            {skill.name}
                                        </h4>

                                        <span
                                            className="
                        font-bold
                        text-2xl
                      "
                                        >
                                            {skill.value}%
                                        </span>

                                    </div>

                                    <div
                                        className="
                      h-3
                      bg-red-100
                      rounded-full
                    "
                                    >
                                        <div
                                            className="
                        h-full
                        bg-red-600
                        rounded-full
                      "
                                            style={{
                                                width: `${skill.value}%`,
                                            }}
                                        />
                                    </div>

                                </div>
                            ))}

                        </div>
                    </div>

                </div>

            </section>


            <section className="relative py-28">

                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: `url(${coach.background})`,
                    }}
                />

                <div className="absolute inset-0 bg-black/75" />

                <div className="relative z-10 max-w-7xl mx-auto px-6">

                    <div className="text-center mb-20">

                        <h2
                            className="
                text-red-600
                uppercase
                text-5xl
                md:text-6xl
                font-bold
                mb-4
              "
                        >
                            Instagram
                        </h2>

                        <p className="uppercase text-white">
                            Follow {coach.name} On Instagram
                        </p>

                    </div>

                    <div
                        className="
              grid
              grid-cols-2
              md:grid-cols-3
              lg:grid-cols-4
              gap-6
            "
                    >
                        {coach.gallery.map(
                            (image, index) => (
                                <div
                                    key={index}
                                    className="
                    overflow-hidden
                    group
                  "
                                >
                                    <img
                                        src={image}
                                        alt=""
                                        className="
                      w-full
                      h-55
                      md:h-65
                      lg:h-75
                      object-cover
                      transition
                      duration-500
                      group-hover:scale-110
                    "
                                    />
                                </div>
                            )
                        )}
                    </div>

                    <div className="text-center mt-16">

                        <button
                            className="
                bg-red-600
                text-white
                px-10
                py-4
                uppercase
                inline-flex
                items-center
                gap-3
                hover:bg-red-700
                transition
              "
                        >
                            <ig size={18} />
                            Follow
                            <ArrowRight size={18} />
                        </button>

                    </div>

                </div>
            </section>



        </>
    );
}

export default CoachDetails;