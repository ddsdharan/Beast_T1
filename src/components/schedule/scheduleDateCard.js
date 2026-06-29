import { ChevronLeft, ChevronRight } from "lucide-react";

function ScheduleDateCard() {
    return (
        <div
            className="
        bg-red-600
        h-70
        w-auto
        text-white
        flex
        flex-col
        justify-between
        p-6
      "
        >
            <div>
                <h3
                    className="
            text-3xl
            font-bold
            text-right
            uppercase
          "
                >
                    24TH _ 30TH
                </h3>

                <h4
                    className="
            text-2xl
            font-bold
            uppercase
            text-right
            mt-2
          "
                >
                    November 2019
                </h4>
            </div>

            <div className="flex justify-end gap-6">
                <button>
                    <ChevronLeft size={24} />
                </button>

                <button>
                    <ChevronRight size={24} />
                </button>
            </div>
        </div>
    );
}

export default ScheduleDateCard;