import Navbar from '../components/navbar/Navbar';
import HeroSection from '../components/heroSection/hero';
import About from '../components/about/aboutPage';
import Facilities from '../components/facilities/facilitiesPage';
import BMI from '../components/bmi/BMI';
import Schedule from '../components/schedule/schedulePage';
import Review from '../components/reviewSection/review';
import JoinNowSection from '../components/joinNowSection/joinNowSection';
import Coaches from '../components/coachersSection/coaches';
import Blog from '../components/blog/blogSection';
import Gallery from '../components/gallery/gallerySection';
import ContactSection from "../components/contactUs/contactUsSection";
import Footer from "../components/footer/footerSection";

function HomePage() {
    return (
        <div className="home">
            <Navbar />
            <HeroSection />
            <About />
            <Facilities />
            <BMI />
            <Schedule />
            <Review />
            <JoinNowSection />
            <Coaches />
            <Blog />
            <Gallery />
            <ContactSection />
            <Footer />
        </div>
    );
}

export default HomePage;
