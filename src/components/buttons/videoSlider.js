import { ArrowLeft, ArrowRight } from "lucide-react";

function HeroSlider() {
    return (
        <div className="bg-white w-1/2 p-2">
            <div className="px-8">
                <div className="h-28 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <span className="font-bold text-xl">
                            1
                        </span>

                        <span className="text-gray-900">
                            /
                        </span>

                        <span className="text-gray-900">
                            4
                        </span>

                        <div className="w-72 h-px ml-8"></div>

                    </div>

                    <div className="flex items-center gap-8">

                        <button className="hover:text-red-600">
                            <ArrowLeft size={22} />
                        </button>

                        <button className="hover:text-red-600">
                            <ArrowRight size={22} />
                        </button>

                    </div>

                </div>

            </div>
        </div>
    );
}

export default HeroSlider;