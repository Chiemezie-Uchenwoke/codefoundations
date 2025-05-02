import codeTogether from "../../assets/code_together_1.jpg";
import SectionHeadingText from "../SectionHeadingText/SectionHeadingText";
import { FaCheckCircle } from "react-icons/fa";

const WhyJoin = () => {
    return (
        <section className="bg-prim/3 py-12 lg:py-16 top-margin" id="why_join">
            <div className="container-custom flex flex-col items-center gap-6 md:gap-8 lg:gap-10">
                <SectionHeadingText headingText="Why Join This Mentorship?" />
                <div className="flex flex-col lg:flex-row gap-4 sm:gap-8 lg:gap-10">
                    <figure className="overflow-hidden rounded-md w-full lg:w-[40%]">
                        <img src={codeTogether} alt="Young developers learning and collaborating" loading="lazy" className="w-full h-auto object-fit-cover" />
                    </figure>      
                      
                    <ul className="w-full lg:w-[60%] flex flex-col gap-4 justify-center">
                        <h3 className="font-semibold text-base lg:text-lg">Start Confidently. Learn Effectively. Launch Your Coding Career with Hands-on Mentorship</h3>
                        <li className="text-sm lg:text-base flex gap-2 leading-6">
                            <span className="py-1"><FaCheckCircle className="text-base text-prim" /></span> 
                            Structured learning with hands-on projects + code reviews
                        </li>
            
                        <li className="text-sm lg:text-base flex gap-2 leading-6">
                            <span className="py-1"><FaCheckCircle className="text-base text-prim" /></span>  
                            1-on-1 mentorship & instant feedback
                        </li>
            
                        <li className="text-sm lg:text-base flex gap-2 leading-6">
                            <span className="py-1"><FaCheckCircle className="text-base text-prim" /></span> 
                            Beginner-friendly and career-focused
                        </li>
            
                        <li className="text-sm lg:text-base flex gap-2 leading-6">
                            <span className="py-1"><FaCheckCircle className="text-base text-prim" /></span> 
                            Learn on your schedule
                        </li>

                        <p className="text-sm italic mt-4">Curious if this is right for you? <a href="#form" className="text-prim underline font-medium">Book a free discovery call.</a></p>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default WhyJoin;