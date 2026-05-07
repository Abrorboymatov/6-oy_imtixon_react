import Navbar from "../components/Navbar";
import About from "../components/About";
import CTA from "../components/CTA";
import Footer from "../components/Footer";
import HomeHeader from "../components/HomeHeader";
import Expertiseee from "../components/Expertiseee";
import Services from "../components/Services";
import Process from "../components/Process";
import Testimonials from "../components/Testimonials";
import Blogg from "../components/Blogg";


export default function Home() {
    


    return (
        <>
       <HomeHeader />
       <About />
       <Expertiseee />
       <Services />
       <Process />
       <Testimonials />
       <Blogg />
        <CTA />
       <Footer />
        </>
    )
}