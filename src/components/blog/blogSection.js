import {
    CalendarDays,
} from "lucide-react";
import blogImage1 from "../../assets/bgImages/blogImage1.png";
import blogImage2 from "../../assets/bgImages/blogImage2.png";
import blogImage3 from "../../assets/bgImages/blogImage3.png";
const blogs = [
    {
        id: 1,
        image: blogImage1,
        date: "22 NOV",
        title: "Build yourself in hours of exercise everyday for 6 months.",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
    },
    {
        id: 2,
        image: blogImage2,
        date: "22 NOV",
        title: "Fat burning cardio workout to keep yourself in shape",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
    },
    {
        id: 3,
        image: blogImage3,
        date: "22 NOV",
        title: "Crossfit Guide for beginners: 10 things you must know",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
    },
];

export default function Blog() {
    return (
        <section id="blog" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-14">
                    <h2 className="text-5xl font-extrabold uppercase text-red-600 tracking-wider">
                        Blog
                    </h2>

                    <p className="mt-3 text-gray-500 uppercase tracking-widest text-sm">
                        Read to stay in shape
                    </p>
                </div>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {blogs.map((blog) => (
                        <article
                            key={blog.id}
                            className="group cursor-pointer"
                        >
                            <div className="relative overflow-hidden">
                                <img
                                    src={blog.image}
                                    alt={blog.title}
                                    className="w-full h-72 object-cover transition duration-500 group-hover:scale-110"
                                />

                                <div className="absolute top-5 right-5 bg-red-600 text-white px-5 py-3 font-bold text-sm uppercase">
                                    {blog.date}
                                </div>
                            </div>

                            <div className="pt-6">
                                <h3 className="text-2xl font-medium leading-snug text-gray-900 group-hover:text-red-600 transition">
                                    {blog.title}
                                </h3>

                                <p className="mt-5 text-gray-500 leading-8">
                                    {blog.description}
                                </p>

                                <button className="mt-6 flex items-center gap-2 font-semibold text-red-600 hover:gap-3 transition-all">
                                    <CalendarDays size={18} />
                                    Read More
                                </button>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}