import { useState } from "react";
import PricingCard from "../joinNowSection/pricingCard";

import { ArrowRight, Dumbbell, Activity, TrendingUp, } from "lucide-react";

const plans = [
    {
        id: "basic",
        name: "BASIC",
        price: 9.99,
        icon: <Dumbbell size={60} />,
        features: [
            "Personal Trainer",
            "Service Locker Rooms",
            "Fitness Assessment",
            "Morning Slot",
        ],
    },
    {
        id: "premium",
        name: "PREMIUM",
        price: 24.99,
        icon: <Activity size={60} />,
        features: [
            "Personal Trainer",
            "Service Locker Rooms",
            "Fitness Assessment / Consultation",
            "Morning & Evening Slot",
        ],
    },
    {
        id: "advanced",
        name: "ADVANCED",
        price: 14.99,
        icon: <TrendingUp size={60} />,
        features: [
            "Personal Trainer",
            "Service Locker Rooms",
            "Fitness Assessment",
            "Morning Slot",
        ],
    },
];

function JoinNow() {
    const [selectedPlan, setSelectedPlan] =
        useState("basic");

    const handleEnroll = () => {
        alert(
            `Selected Plan: ${selectedPlan}`
        );

    };

    return (
        <section
            id="join-now"
            className="
        py-24
        bg-[#f8f8f8]
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
                        Join Now
                    </h2>

                    <p
                        className="
              mt-4
              uppercase
              text-gray-700
              text-xl
            "
                    >
                        Join & Be One Of Us
                    </p>

                </div>

                {/* Cards */}

                <div
                    className="
            grid
            grid-cols-1
            md:grid-cols-2
            lg:grid-cols-3
          "
                >
                    {plans.map((plan) => (
                        <PricingCard
                            key={plan.id}
                            plan={plan}
                            selectedPlan={selectedPlan}
                            onSelect={setSelectedPlan}
                        />
                    ))}
                </div>

                {/* Enroll Button */}

                <div
                    className="
            mt-10
            flex
            justify-center
          "
                >
                    <button
                        onClick={handleEnroll}
                        className="
              bg-red-600
              hover:bg-red-700
              text-white
              px-16
              py-5
              uppercase
              flex
              items-center
              gap-4
              transition
            "
                    >
                        Enroll Now
                        <ArrowRight size={22} />
                    </button>
                </div>

            </div>
        </section>
    );
}

export default JoinNow;