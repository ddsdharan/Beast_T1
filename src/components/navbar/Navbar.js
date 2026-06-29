import heroLogo from "../../assets/logos/Logo white.png";

export default function Navbar() {
    const HandleJoinNowButtonClick = () => {
        window.location.href = "#join-now";
    };

    const links = [
        {
            name: "ABOUT US",
            href: "#about",
        },
        {
            name: "FACILITIES",
            href: "#facilities",
        },
        {
            name: "BMI",
            href: "#bmi",
        },
        {
            name: "SCHEDULE",
            href: "#schedule",
        },
        {
            name: "REVIEWS",
            href: "#reviews",
        },
        {
            name: "COACHES",
            href: "#coaches",
        },
        {
            name: "BLOG",
            href: "#blog",
        },
        {
            name: "GALLERY",
            href: "#gallery",
        },
        {

            name: "JOIN NOW",
            href: "#join-now",
        }

    ];

    return (
        <nav className="fixed top-0 left-0 w-full z-20">
            <div className="max-w-7xl mx-auto flex justify-between items-center py-6 px-0">
                <a href="/" className="heroLogo" aria-label="Home">
                    <img src={heroLogo} alt="Home" />
                </a>
                <div className="flex justify-end items-center gap-8">
                    {links.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            className="text-white uppercase text-sm hover:text-red-500"
                        >
                            {item.name}
                        </a>
                    ))}

                    <button

                        onClick={HandleJoinNowButtonClick}

                    >
                        <a href="#join-now" className="bg-red-600 px-8 py-4 text-white font-semibold">JOIN NOW</a>
                    </button>
                </div>
            </div>
        </nav>
    );
}

