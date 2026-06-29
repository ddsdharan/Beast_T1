import CoachHeroSection from "../components/coachDetails/coachHeroSection";
import { useEffect } from "react";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/footerSection";

function CoachDetailsPage() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div>
            <Navbar />

            <CoachHeroSection />

            <Footer />


        </div>
    )
}

export default CoachDetailsPage;