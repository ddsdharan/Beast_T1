import BMIbg from "../../assets/bgImages/bmiBg.png";
import { ChevronDown, ArrowRight } from "lucide-react";


function BMI() {
    return (
        <section
            id="bmi"
            className="relative min-h-screen overflow-hidden"
        >

            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                    backgroundImage:
                        `url(${BMIbg})`,
                }}
            />


            <div className="absolute inset-0 bg-black/40" />
            <div className="relative z-10">
                <div
                    className="
            max-w-7xl
            mx-auto
            px-8
            min-h-screen
            grid
            lg:grid-cols-2
            items-center
          "
                >
                    <div />
                    <div className="flex justify-center lg:justify-end">
                        <div
                            className="
                bg-white
                w-full
                max-w-130
                shadow-2xl
              "
                        >
                            <div className="px-12 pt-16 pb-10">

                                <h2
                                    className="
                    text-center
                    text-red-600
                    uppercase
                    text-4xl
                    font-bold
                    mb-4
                  "
                                >
                                    Calculate Your
                                </h2>

                                <p
                                    className="
                    text-center
                    uppercase
                    text-gray-600
                    text-xl
                    mb-16
                  "
                                >
                                    Body Mass Index
                                </p>

                                <div className="mb-10">
                                    <div className="flex justify-between items-center">
                                        <input
                                            type="number"
                                            placeholder="HEIGHT"
                                            className="
                        w-full
                        bg-transparent
                        outline-none
                        uppercase
                        font-semibold
                        text-gray-700
                      "
                                        />

                                        <span className="font-bold">
                                            Cm
                                        </span>
                                    </div>

                                    <div className="border-b mt-4" />
                                </div>
                                <div className="mb-10">
                                    <div className="flex justify-between items-center">
                                        <input
                                            type="number"
                                            placeholder="WEIGHT"
                                            className="
                        w-full
                        bg-transparent
                        outline-none
                        uppercase
                        font-semibold
                      "
                                        />

                                        <span className="font-bold">
                                            Kg
                                        </span>
                                    </div>

                                    <div className="border-b mt-4" />
                                </div>
                                <div className="mb-10">
                                    <div className="flex justify-between items-center">
                                        <input
                                            type="number"
                                            placeholder="AGE"
                                            className="
                        w-full
                        bg-transparent
                        outline-none
                        uppercase
                        font-semibold
                      "
                                        />

                                        <span className="font-bold">
                                            Year
                                        </span>
                                    </div>

                                    <div className="border-b mt-4" />
                                </div>
                                <div>
                                    <div className="flex justify-between items-center">
                                        <select
                                            className="
                        w-full
                        bg-transparent
                        outline-none
                        uppercase
                        font-semibold
                        appearance-none
                      "
                                        >
                                            <option>Gender</option>
                                            <option>Male</option>
                                            <option>Female</option>
                                        </select>

                                        <ChevronDown />
                                    </div>

                                    <div className="border-b mt-4" />
                                </div>

                            </div>
                            <button
                                className="
                  w-full
                  bg-red-600
                  text-white
                  uppercase
                  font-bold
                  py-8
                  flex
                  justify-center
                  items-center
                  gap-4
                  hover:bg-red-700
                  transition
                "
                            >
                                Calculate BMI
                                <ArrowRight size={22} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default BMI;