import FacilityCard from "./facilityCard";
import firstImage from "../../assets/bgImages/f1.png";
import secondImage from "../../assets/bgImages/f2.png";
import thirdImage from "../../assets/bgImages/f3.png";
import fourthImage from "../../assets/bgImages/f4.png";


const facilities = [
    {
        title: "Cardio Zone",
        image: firstImage,
    },
    {
        title: "Exercise Studio",
        image: secondImage,
    },
    {
        title: "Weight Training",
        image: thirdImage,
    },
    {
        title: "Functional Zone",
        image: fourthImage,
    },
];

function Facilities() {
    return (
        <section
            id="facilities"
            className="
        py-32
        bg-[#f8f8f8]
      "
        >
            <div className="max-w-7xl mx-auto px-8">


                <div className="text-center">

                    <h2
                        className="
              text-red-600
              text-6xl
              font-extrxabold
              uppercase
              mb-4
            "
                    >
                        Facilities
                    </h2>

                    <h3
                        className="
              uppercase
              text-2xl
              text-gray-700
              mb-12
            "
                    >
                        How It Feels To Be With Us
                    </h3>

                    <p
                        className="
              max-w-1217px
              h-56px
              mx-auto
              text-neutral-600
              text-lg
              leading-6
              mb-20
              align-middle
            "
                    >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna
                        aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                        ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate velit
                        esse laborum.
                    </p>

                </div>


                <div
                    className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-4
            gap-8
          "
                >
                    {facilities.map((facility) => (
                        <FacilityCard
                            key={facility.title}
                            image={facility.image}
                            title={facility.title}
                        />
                    ))}
                </div>

            </div>
        </section>
    );
}

export default Facilities;