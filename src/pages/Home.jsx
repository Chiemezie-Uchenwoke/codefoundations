import Header from "../components/Header/Header";
import Hero from "../components/Hero/hero";
import ProgramFor from "../components/ProgramFor/ProgramFor";
import ProgramFeatures from "../components/ProgramFeatures/ProgramFeatures";
import HowToGetStarted from "../components/HowToGetStarted/HowToGetStarted";
import Pricing from "../components/Pricing/Pricing";

const Home = () => {
    return (
        <>
            <Header />
            <Hero />
            <ProgramFor />
            <ProgramFeatures />
            <HowToGetStarted />
            <Pricing />
        </>
    )
}

export default Home;