import ScheduleCard from "../schedule/scheduleCard";
import ScheduleDateCard from "../schedule/scheduleDateCard";
import s2 from "../../assets/bgImages/ScheduleCardTwo.png";
import s3 from "../../assets/bgImages/ScheduleCardThree.png";
import s4 from "../../assets/bgImages/ScheduleCardFour.png";
import s5 from "../../assets/bgImages/ScheduleCardFive.png";
import s6 from "../../assets/bgImages/ScheduleCardSix.png";
import s7 from "../../assets/bgImages/ScheduleCardSeven.png";
import s8 from "../../assets/bgImages/ScheduleCardEight.png";



const scheduleData = [
    {
        day: "Sunday",
        date: "25TH NOV",
        image: s2,
        activities: [
            "Cardio",
            "Weight Training",
        ],
    },
    {
        day: "Monday",
        date: "25TH NOV",
        image: s3,
        activities: [
            "Cardio",
            "Weight Training",
        ],
    },
    {
        day: "Tuesday",
        date: "25TH NOV",
        image: s4,
        activities: [
            "Cardio",
            "Plyo",
        ],
    },
    {
        day: "Wednesday",
        date: "27TH NOV",
        image: s5,
        activities: [
            "Cardio",
            "Crossfit",
        ],
    },
    {
        day: "Thursday",
        date: "28TH NOV",
        image: s6,
        activities: [
            "Body Building",
            "Plyo",
        ],
    },
    {
        day: "Friday",
        date: "29TH NOV",
        image: s7,
        activities: [
            "Plyo",
            "Body Building",
        ],
    },
    {
        day: "Saturday",
        date: "30TH NOV",
        image: s8,
        activities: [
            "Weight Training",
            "Crossfit",
        ],
    },
];

function Schedule() {
    return (
        <section
            id="schedule"
            className="py-20 bg-[#f8f8f8]"
        >
            <div className="max-w-7xl mx-auto px-8">

                <div className="text-center mb-24">

                    <h2
                        className="
              text-red-600
              uppercase
              text-7xl
              font-semibold
              mb-4
            "
                    >
                        Schedule
                    </h2>

                    <h3
                        className="
              uppercase
              text-2xl
              text-gray-700
              mb-10
            "
                    >
                        Keep Up With The Schedule To Stay Fit
                    </h3>

                    <p
                        className="
              max-w-5xl
              mx-auto
              text-lg
              text-gray-500
              leading-9
            "
                    >
                        Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt
                        ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam.
                    </p>

                </div>
                <div
                    className="
            grid
            grid-cols-1
            md:grid-cols-2
            lg:grid-cols-4
            gap-8
          "
                >
                    <ScheduleDateCard />

                    {scheduleData.map((item) => (
                        <ScheduleCard
                            key={item.day}
                            {...item}
                        />
                    ))}
                </div>

            </div>
        </section>
    );
}

export default Schedule;