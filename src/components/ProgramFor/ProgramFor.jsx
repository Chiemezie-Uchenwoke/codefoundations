import youngDevs from "../../assets/team_laptop.jpg";
import { FaCheckCircle } from "react-icons/fa";

const ProgramFor = () => {
    return (
        <section className="container-custom top-margin flex flex-col items-center gap-6">
            <h2 className="font-bold capitalize text-xl">Who is this program for?</h2>
            <div className="">
                <figure>
                    <img src={youngDevs} alt="Image of young people working together" loading="lazy" />
                </figure>

                <ul>
                    <h3>This program is perfect for you if:</h3>
                    <li>
                        <FaCheckCircle /> 
                        You're a beginner who wants to learn web development the right way, not just from random YouTube tutorials.
                    </li>

                    <li>
                        <FaCheckCircle /> 
                        You're self-taught but feel stuck, especially with JavaScript.
                    </li>

                    <li>
                        <FaCheckCircle /> 
                        You've built some projects, but don't fully understand how things work under the hood.
                    </li>

                    <li>
                        <FaCheckCircle /> 
                        You feel overwhelmed trying to learn everything alone — you need structure, support, and real feedback.
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default ProgramFor;