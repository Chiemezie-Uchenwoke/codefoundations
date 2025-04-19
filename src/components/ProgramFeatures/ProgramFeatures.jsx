import SectionHeadingText from "../SectionHeadingText/SectionHeadingText";
import { TbPointFilled } from "react-icons/tb";
import { Link } from "react-router-dom";

const ProgramFeatures = () => {
    return (
        <section className="top-margin bg-prim/3 py-12 lg:py-16">
            <div className="container-custom flex flex-col gap-6 md:gap-8 lg:gap-10 items-center">
                <SectionHeadingText headingText="Program Features" />

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="border border-borderColor py-8 px-4 flex flex-col gap-3 shadow rounded-md bg-white-lite">
                        <h3 className="text-base font-semibold">Web fundamentals <br /> (6 weeks)</h3>
                        <p className="text-sm">This program includes:</p>
                        <ul className="flex flex-col gap-3">
                            <li className="text-[0.8rem] flex gap-2 leading-[1.2rem]">
                                <span className="py-1"><TbPointFilled /></span>
                                Learning the basics of HTML, CSS, and JavaScript
                            </li>
                            <li className="text-[0.8rem] flex gap-2 leading-[1.2rem]">
                                <span className="py-1"><TbPointFilled /></span>
                                Mastering page layouts, styling, and responsiveness
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
                        <Link to="#" className="underline mt-3 text-prim text-sm font-semibold capitalize">view curriculum</Link>
                    </div>

                    <div className="border border-borderColor py-8 px-4 flex flex-col gap-3 shadow rounded-md bg-white-lite">
                        <h3 className="text-base font-semibold">Web fundamentals <br /> (12 weeks)</h3>
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
                        <Link to="#" className="underline mt-3 text-prim text-sm font-semibold capitalize">view curriculum</Link>
                    </div>
                    
                    <div className="border border-borderColor py-8 px-4 flex flex-col gap-3 shadow rounded-md bg-white-lite">
                        <h3 className="text-base font-semibold">JavaScript Basics <br /> (6 Weeks)</h3>
                        <p className="text-sm">This program includes:</p>
                        <ul className="flex flex-col gap-3">
                            <li className="text-[0.8rem] flex gap-2 leading-[1.2rem]">
                                <span className="py-1"><TbPointFilled /></span>
                                Understanding JavaScript syntax, logic, and flow
                            </li>
                            <li className="text-[0.8rem] flex gap-2 leading-[1.2rem]">
                                <span className="py-1"><TbPointFilled /></span>
                                Working with DOM manipulation, functions, and events
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
                        <Link to="#" className="underline mt-3 text-prim text-sm font-semibold capitalize">view curriculum</Link>
                    </div>

                    <div className="border border-borderColor py-8 px-4 flex flex-col gap-3 shadow rounded-md bg-white-lite">
                        <h3 className="text-base font-semibold">Advanced JavaScript <br /> (12 Weeks)</h3>
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
                        <Link to="#" className="underline mt-3 text-prim text-sm font-semibold capitalize">view curriculum</Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProgramFeatures;