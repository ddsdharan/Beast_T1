import CoachCard from "../coachersSection/coachesCard"
import coaches from "../../datas/coachDatas";

function Coaches() {
    return (
        <section
            id="coaches"
            className="
        bg-[#20252d]
        py-28
      "
        >
            <div className="max-w-7xl mx-auto px-6">

                <div className="text-center mb-20">

                    <h2
                        className="
              font-bebas
              text-red-600
              text-7xl
              uppercase
            "
                    >
                        Coaches
                    </h2>

                    <p
                        className="
              uppercase
              text-white
              text-xl
              mt-4
            "
                    >
                        Our Training Force
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
                    {coaches.map((coach) => (
                        <CoachCard
                            key={coach.id}
                            coach={coach}
                        />
                    ))}
                </div>

            </div>
        </section>
    );
}

export default Coaches;