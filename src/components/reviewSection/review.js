import { ArrowLeft, ArrowRight } from "lucide-react";
import NellImage from "../../assets/bgImages/ReviewNellImage.png";
import RedQuotation from "../../assets/bgImages/RedQuotation.png";


const reviews = [
    {
        id: 1,
        name: "Nell Francis",
        image: NellImage,
        review: `
      Lorem ipsum dolor sit amet consectetur.
      Magnis massa fringilla purus porta sed varius.
      Mauris egestas pharetra sed id eget.

      Vulputate malesuada purus amet turpis arcu
      venenatis cum nisl. Lorem tincidunt urna
      laoreet auctor.

      Vestibulum sit quam mi dui egestas convallis
      a tellus. Id urna aliquam risus mauris lectus
      lorem convallis elit.
    `,
    },
];

function Review() {
    const currentReview = reviews[0];

    return (
        <section
            id="reviews"
            className="bg-[#f7f7f7] py-32 overflow-hidden"
        >
            <div className="max-w-7xl mx-auto px-8">
                <div className="text-center mb-24">

                    <h2
                        className="
              text-red-600
              uppercase
              font-bebas
              text-7xl
              tracking-wide
              mb-4
            "
                    >
                        Review
                    </h2>

                    <p
                        className="
              uppercase
              text-gray-700
              text-xl
              tracking-wide
            "
                    >
                        Read What People Says
                    </p>

                </div>

                <div
                    className="
            grid
            lg:grid-cols-2
            gap-24
            items-center
            relative
          "
                >

                    <div className="relative">

                        <img
                            src={currentReview.image}
                            alt={currentReview.name}
                            className="
                w-full
                max-w-130
                h-130
                object-cover
              "
                        />
                        <img
                            src={RedQuotation}
                            alt="quote"
                            className="
                absolute
                top-1/2
                -right-15
                -translate-y-1/2
                w-45
                z-20
              "
                        />

                    </div>

                    <div className="max-w-140">

                        <p
                            className="
                text-gray-600
                text-lg 
                text-justify
                leading-10
                mb-12
              "
                        >
                            {currentReview.review}
                        </p>

                        <h3
                            className="
                font-bebas
                text-5xl
                tracking-wide
                mb-10
              "
                        >
                            {currentReview.name}
                        </h3>

                        <div className="flex items-center gap-8">

                            <button
                                className="
                  hover:text-red-600
                  transition
                "
                            >
                                <ArrowLeft size={28} />
                            </button>

                            <button
                                className="
                  text-gray-300
                  hover:text-red-600
                  transition
                "
                            >
                                <ArrowRight size={28} />
                            </button>

                        </div>

                    </div>

                </div>

            </div>
        </section>
    );
}

export default Review;