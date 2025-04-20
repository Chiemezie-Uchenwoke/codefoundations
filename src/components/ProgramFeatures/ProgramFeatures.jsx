import SectionHeadingText from "../SectionHeadingText/SectionHeadingText";
import { TbPointFilled } from "react-icons/tb";
import { Link } from "react-router-dom";
import { FaGlobe } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";

const ProgramFeatures = () => {
    return (
        <section className="top-margin bg-prim/3 py-12 lg:py-16">
            <div className="container-custom flex flex-col gap-6 md:gap-8 lg:gap-10 items-center">
                <SectionHeadingText headingText="Program Features" />

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-5">
                    <div className="group border border-borderColor py-8 px-4 flex flex-col gap-3 shadow rounded-lg bg-white-lite hover:shadow-xl hover:scale-[1.02] hover:border-prim/40 duration-300">
                        <h3 className="text-sm font-semibold flex items-center gap-2">
                            <span className="transition-transform duration-300 group-hover:rotate-12">
                                <FaGlobe className="text-prim text-3xl" />
                            </span> 
                            Web fundamentals
                        </h3>
                        <p className="font-light text-sm">Duration: 6 weeks</p>
                        <p className="text-sm">This program includes:</p>
                        <ul className="flex flex-col gap-3">
                            <li className="text-[0.8rem] flex gap-2 leading-[1.2rem]">
                                <span className="py-1"><TbPointFilled /></span>
                                Learning the basics of HTML & CSS
                            </li>
                            <li className="text-[0.8rem] flex gap-2 leading-[1.2rem]">
                                <span className="py-1"><TbPointFilled /></span>
                                Mastering page layouts, styling, and responsiveness
                            </li>
                            <li className="text-[0.8rem] flex gap-2 leading-[1.2rem]">
                                <span className="py-1"><TbPointFilled /></span>
                                Learning basic JavaScript
                            </li>
                            <li className="text-[0.8rem] flex gap-2 leading-[1.2rem]">
                                <span className="py-1"><TbPointFilled /></span>
                                Completing hands-on tasks and a simple project
                            </li>
                            <li className="text-[0.8rem] flex gap-2 leading-[1.2rem]">
                                <span className="py-1"><TbPointFilled /></span>
                                Using Git & GitHub for version control
                            </li>
                            <li className="text-[0.8rem] flex gap-2 leading-[1.2rem]">
                                <span className="py-1"><TbPointFilled /></span>
                                Perfect for fast learners who want to get started quickly
                            </li>
                        </ul>
                        <Link to="#" className="underline mt-3 text-prim text-sm font-semibold capitalize hover:no-underline">view curriculum</Link>
                    </div>

                    <div className="group border border-borderColor py-8 px-4 flex flex-col gap-3 shadow rounded-lg bg-white-lite hover:shadow-xl hover:scale-[1.02] hover:border-prim/40 duration-300">
                        <h3 className="text-sm font-semibold flex items-center gap-2">
                            <span className="transition-transform duration-300 group-hover:rotate-12">
                                <FaGlobe className="text-prim text-3xl" />
                            </span> 
                            Web fundamentals
                        </h3>
                        <p className="font-light text-sm">Duration: 12 weeks</p>
                        <p className="text-sm">This program includes:</p>
                        <ul className="flex flex-col gap-3">
                            <li className="text-[0.8rem] flex gap-2 leading-[1.2rem]">
                                <span className="py-1"><TbPointFilled /></span>
                                Deep dive into HTML5, CSS3, and core JavaScript
                            </li>
                            <li className="text-[0.8rem] flex gap-2 leading-[1.2rem]">
                                <span className="py-1"><TbPointFilled /></span>
                                Layouts with Flexbox, CSS Grid, and responsive design
                            </li>
                            <li className="text-[0.8rem] flex gap-2 leading-[1.2rem]">
                                <span className="py-1"><TbPointFilled /></span>
                                Real-world projects to reinforce fundamentals
                            </li>
                            <li className="text-[0.8rem] flex gap-2 leading-[1.2rem]">
                                <span className="py-1"><TbPointFilled /></span>
                                Using Git & GitHub for version control
                            </li>
                            <li className="text-[0.8rem] flex gap-2 leading-[1.2rem]">
                                <span className="py-1"><TbPointFilled /></span>
                                Final project: Build and deploy a portfolio website
                            </li>
                            <li className="text-[0.8rem] flex gap-2 leading-[1.2rem]">
                                <span className="py-1"><TbPointFilled /></span>
                                Ideal for beginners who want a strong foundation in web development
                            </li>
                        </ul>
                        <Link to="#" className="underline mt-3 text-prim text-sm font-semibold capitalize hover:no-underline">view curriculum</Link>
                    </div>
                    
                    <div className="border border-borderColor group py-8 px-4 flex flex-col gap-3 shadow rounded-lg bg-white-lite hover:shadow-xl hover:scale-[1.02]  hover:border-prim/40 duration-300">
                        <h3 className="text-sm font-semibold flex items-center gap-2">
                            <span className="transition-transform duration-300 group-hover:rotate-12">
                                <SiJavascript className="text-yellow-500 text-3xl" />
                            </span>
                            JavaScript Basics
                        </h3>
                        <p className="font-light text-sm">Duration: 6 weeks</p>
                        <p className="text-sm">This program includes:</p>
                        <ul className="flex flex-col gap-3">
                            <li className="text-[0.8rem] flex gap-2 leading-[1.2rem]">
                                <span className="py-1"><TbPointFilled /></span>
                                Understanding JavaScript variables and data types
                            </li>
                            <li className="text-[0.8rem] flex gap-2 leading-[1.2rem]">
                                <span className="py-1"><TbPointFilled /></span>
                                Working with DOM manipulation, functions, and events
                            </li>
                            <li className="text-[0.8rem] flex gap-2 leading-[1.2rem]">
                                <span className="py-1"><TbPointFilled /></span>
                                Understanding conditional statements
                            </li>
                            <li className="text-[0.8rem] flex gap-2 leading-[1.2rem]">
                                <span className="py-1"><TbPointFilled /></span>
                                Weekly challenges to sharpen problem-solving
                            </li>
                            <li className="text-[0.8rem] flex gap-2 leading-[1.2rem]">
                                <span className="py-1"><TbPointFilled /></span>
                                Hands-on projects
                            </li>
                            <li className="text-[0.8rem] flex gap-2 leading-[1.2rem]">
                                <span className="py-1"><TbPointFilled /></span>
                                Perfect for those who already know HTML & CSS
                            </li>
                        </ul>
                        <Link to="#" className="underline mt-3 text-prim text-sm font-semibold capitalize hover:no-underline">view curriculum</Link>
                    </div>

                    <div className="group border border-borderColor py-8 px-4 flex flex-col gap-3 shadow rounded-lg bg-white-lite hover:shadow-xl hover:scale-[1.02] hover:border-prim/40 duration-300">
                        <h3 className="text-sm font-semibold flex items-center gap-2">
                            <span className="transition-transform duration-300 group-hover:rotate-12">
                                <SiJavascript className="text-yellow-500 text-3xl" />
                            </span>
                            Advanced JavaScript
                        </h3>
                        <p className="font-light text-sm">Duration: 12 weeks</p>
                        <p className="text-sm">This program includes:</p>
                        <ul className="flex flex-col gap-3">
                            <li className="text-[0.8rem] flex gap-2 leading-[1.2rem]">
                                <span className="py-1"><TbPointFilled /></span>
                                Deep dive into ES6+, callbacks, promises, and async/await
                            </li>
                            <li className="text-[0.8rem] flex gap-2 leading-[1.2rem]">
                                <span className="py-1"><TbPointFilled /></span>
                                OOP (Object-Oriented Programming) and modular JS
                            </li>
                            <li className="text-[0.8rem] flex gap-2 leading-[1.2rem]">
                                <span className="py-1"><TbPointFilled /></span>
                                Handling APIs and using fetch/async data
                            </li>
                            <li className="text-[0.8rem] flex gap-2 leading-[1.2rem]">
                                <span className="py-1"><TbPointFilled /></span>
                                Weekly challenges to sharpen problem-solving
                            </li>
                            <li className="text-[0.8rem] flex gap-2 leading-[1.2rem]">
                                <span className="py-1"><TbPointFilled /></span>
                                Building real projects
                            </li>
                            <li className="text-[0.8rem] flex gap-2 leading-[1.2rem]">
                                <span className="py-1"><TbPointFilled /></span>
                                Best for devs ready to level up their JavaScript skills
                            </li>
                        </ul>
                        <Link to="#" className="underline mt-3 text-prim text-sm font-semibold capitalize hover:no-underline">view curriculum</Link>
                    </div>
                </div>
                <Link to="#" className="bg-prim text-white-lite py-3 px-10 border border-borderColor rounded-md mt-5 hover:brightness-90 duration-300">Enroll Now</Link>
            </div>
        </section>
    )
}

export default ProgramFeatures;