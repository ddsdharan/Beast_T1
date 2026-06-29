function PricingCard({ plan, selectedPlan, onSelect, }) {

    const isSelected = selectedPlan === plan.id;

    return (
        <div
            onClick={() => onSelect(plan.id)}
            className={` 
        cursor-pointer 
        border 
        transition-all 
        duration-300 
        flex 
        flex-col 
        justify-between 
        min-h-125 
        ${isSelected
                    ? "border-red-600 shadow-xl scale-[1.02]"
                    : "border-gray-300"
                } 
      `}
        >
            <div className="p-12 text-center">
                <h3 className="text-5xl text-red-600 tracking-wide mb-12">
                    {plan.name}
                </h3>
                <img src={plan.icon} alt={plan.name} className="w-20 h-20 object-contain mx-auto mb-12" />
                <div className="space-y-3">
                    {plan.features.map((feature) => (
                        <p
                            key={feature}
                            className=" 
                uppercase 
                text-gray-700 
                text-lg 
              "
                        >
                            {feature}
                        </p>
                    ))}
                </div>
                <div className="mt-5 text-red-600 text-5xl">
                    ${plan.price}
                    <span className="text-3xl">
                        {" "}
                        / Month
                    </span>
                </div>
            </div>
            {isSelected && (
                <div className="bg-red-600 text-white text-center py-3 uppercase tracking-wider">
                    Selected Plan
                </div>
            )}
        </div>
    );
}
export default PricingCard;