import youngDevs from "../../assets/team_laptop.jpg";
import { FaCheckCircle } from "react-icons/fa";
import SectionHeadingText from "../SectionHeadingText/SectionHeadingText";

const ProgramFor = () => {
    return (
        <section className="container-custom top-margin flex flex-col items-center gap-6 md:gap-8 lg:gap-10">
            <SectionHeadingText headingText="Who is this program for?" />
            <div className="flex flex-col lg:flex-row gap-4 sm:gap-8 lg:gap-10">
                <figure className="overflow-hidden rounded-md w-full lg:w-[40%]">
                    <img src={youngDevs} alt="Young developers learning and collaborating" loading="lazy" className="w-full h-auto object-fit-cover" />
                </figure>

                <ul className="w-full lg:w-[60%] flex flex-col gap-4">
                    <h3 className="font-semibold text-base lg:text-lg">This program is perfect for you if:</h3>
                    <li className="text-sm lg:text-base flex gap-2 leading-6">
                        <span className="py-2"><FaCheckCircle className="text-base text-prim" /></span> 
                        You're a beginner who wants to learn web development the right way, not just from random YouTube tutorials.
                    </li>

                    <li className="text-sm lg:text-base flex gap-2 leading-6">
                        <span className="py-2"><FaCheckCircle className="text-base text-prim" /></span>  
                        You're self-taught but feel stuck, especially with JavaScript.
                    </li>

                    <li className="text-sm lg:text-base flex gap-2 leading-6">
                        <span className="py-2"><FaCheckCircle className="text-base text-prim" /></span> 
                        You've built some projects, but don't fully understand how things work under the hood.
                    </li>

                    <li className="text-sm lg:text-base flex gap-2 leading-6">
                        <span className="py-2"><FaCheckCircle className="text-base text-prim" /></span> 
                        You feel overwhelmed trying to learn everything alone — you need structure, support, and real feedback.
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default ProgramFor;