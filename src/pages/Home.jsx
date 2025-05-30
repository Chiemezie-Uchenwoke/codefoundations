import Header from "../components/Header/Header";
import Hero from "../components/Hero/hero";
import ProgramFor from "../components/ProgramFor/ProgramFor";
import ProgramFeatures from "../components/ProgramFeatures/ProgramFeatures";
import HowToGetStarted from "../components/HowToGetStarted/HowToGetStarted";
import Pricing from "../components/Pricing/Pricing";
import ReadyToStart from "../components/ReadyToStart/ReadyToStart";
import WhyJoin from "../components/WhyJoin/WhyJoin";
import Apply from "../components/Apply/Apply";
import TakeStep from "../components/TakeStep/TakeStep";
import Footer from "../components/Footer/Footer";

const Home = () => {
    return (
        <>
            <Header />
            <Hero />
            <ProgramFor />
            <ProgramFeatures />
            <HowToGetStarted />
            <Pricing />
            <ReadyToStart />
            <WhyJoin />
            <Apply />
            <TakeStep />
            <Footer />
        </>
    )
}

export default Home;