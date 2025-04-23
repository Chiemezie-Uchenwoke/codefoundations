import SectionHeadingText from "../SectionHeadingText/SectionHeadingText";
import {Link} from "react-router-dom"
import learnCode1 from "../../assets/learn_1.jpg";
import learnCode2 from "../../assets/learn_2.jpg";
import learnCode3 from "../../assets/lady_laptop.jpg";
import learnCode4 from "../../assets/learn_4.jpg";
import { TbPointFilled } from "react-icons/tb";
import { MdOutlineCheck } from "react-icons/md";

const Pricing = () => {
    return (
        <section className="top-margin container-custom flex flex-col gap-6 md:gap-8 lg:gap-10 items-center">
            <SectionHeadingText headingText="Mentorship Plans" />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 md:w-[90%] lg:w-full">
                <div className="border border-borderColor flex flex-col shadow rounded-t-md hover:scale-105 duration-300 group">
                    <figure className="overflow-hidden rounded-t-md h-[10rem]">
                        <img src={learnCode1} alt="Image of people learning web development" loading="lazy" className="w-full object-fit-cover rounded-t-md" />
                    </figure>

                    <div className="flex flex-col gap-4 px-4 py-4">
                        <h3 className="text-sm font-medium capitalize">Web Fundamentals</h3>

                        <ul className="flex flex-col gap-2 capitalize">
                            <li className="text-[0.8rem] flex gap-2 leading-[1.2rem]">
                                <span className="py-1"><MdOutlineCheck /></span>
                                duration: 6 weeks
                            </li>
                            <li className="text-[0.8rem] flex gap-2 leading-[1.2rem]">
                                <span className="py-1"><MdOutlineCheck /></span>
                                mentorship: 1:1 sessions + assignments
                            </li>
                            <li className="text-[0.8rem] flex gap-2 leading-[1.2rem]">
                                <span className="py-1"><MdOutlineCheck /></span>
                                <p className="text-red-500 font-medium">Price: $200</p>
                            </li>
                        </ul>

                        <Link to="#" className="border border-borderLite text-sm capitalize py-2 px-4 my-2 self-start text-shade-of-black rounded-md hover:brightness-90 hover:bg-prim/10">Enroll now</Link>
                    </div>
                </div>

                <div className="border border-borderColor flex flex-col shadow rounded-t-md hover:scale-105 duration-300 group">
                    <figure className="overflow-hidden rounded-t-md h-[10rem]">
                        <img src={learnCode3} alt="Image of people learning web development" loading="lazy" className="w-full object-fit-cover rounded-t-md" />
                    </figure>

                    <div className="flex flex-col gap-4 px-4 py-4">
                        <h3 className="text-sm font-medium capitalize">Web Fundamentals +</h3>

                        <ul className="flex flex-col gap-2 capitalize">
                            <li className="text-[0.8rem] flex gap-2 leading-[1.2rem]">
                                <span className="py-1"><MdOutlineCheck /></span>
                                duration: 12 weeks
                            </li>
                            <li className="text-[0.8rem] flex gap-2 leading-[1.2rem]">
                                <span className="py-1"><MdOutlineCheck /></span>
                                mentorship: 1:1 sessions + tasks + reviews
                            </li>
                            <li className="text-[0.8rem] flex gap-2 leading-[1.2rem]">
                                <span className="py-1"><MdOutlineCheck /></span>
                                <p className="text-red-500 font-medium">Price: $400</p>
                            </li>
                        </ul>

                        <Link to="#" className="border border-borderLite text-sm capitalize py-2 px-4 my-2 self-start text-shade-of-black rounded-md hover:brightness-90 hover:bg-prim/10">Enroll now</Link>
                    </div>
                </div>

                <div className="border border-borderColor flex flex-col shadow rounded-t-md hover:scale-105 duration-300 group">
                    <figure className="overflow-hidden rounded-t-md h-[10rem]">
                        <img src={learnCode2} alt="Image of people learning web development" loading="lazy" className="w-full object-fit-cover rounded-t-md" />
                    </figure>

                    <div className="flex flex-col gap-4 px-4 py-4">
                        <h3 className="text-sm font-medium capitalize">JavaScript Basics</h3>

                        <ul className="flex flex-col gap-2 capitalize">
                            <li className="text-[0.8rem] flex gap-2 leading-[1.2rem]">
                                <span className="py-1"><MdOutlineCheck /></span>
                                duration: 6 weeks
                            </li>
                            <li className="text-[0.8rem] flex gap-2 leading-[1.2rem]">
                                <span className="py-1"><MdOutlineCheck /></span>
                                mentorship: 1:1 sessions + practice challenges 
                            </li>
                            <li className="text-[0.8rem] flex gap-2 leading-[1.2rem]">
                                <span className="py-1"><MdOutlineCheck /></span>
                                <p className="text-red-500 font-medium">Price: $300</p>
                            </li>
                        </ul>

                        <Link to="#" className="border border-borderLite text-sm capitalize py-2 px-4 my-2 self-start text-shade-of-black rounded-md hover:brightness-90 hover:bg-prim/10">Enroll now</Link>
                    </div>
                </div>

                <div className="border border-borderColor flex flex-col shadow rounded-t-md hover:scale-105 duration-300 group">
                    <figure className="overflow-hidden rounded-t-md h-[10rem]">
                        <img src={learnCode4} alt="Image of people learning web development" loading="lazy" className="w-full object-fit-cover rounded-t-md" />
                    </figure>

                    <div className="flex flex-col gap-4 px-4 py-4">
                        <h3 className="text-sm font-medium capitalize">Advanced JavaScript</h3>

                        <ul className="flex flex-col gap-2 capitalize">
                            <li className="text-[0.8rem] flex gap-2 leading-[1.2rem]">
                                <span className="py-1"><MdOutlineCheck /></span>
                                duration: 12 weeks
                            </li>
                            <li className="text-[0.8rem] flex gap-2 leading-[1.2rem]">
                                <span className="py-1"><MdOutlineCheck /></span>
                                mentorship: Full coaching, feedback, and projects
                            </li>
                            <li className="text-[0.8rem] flex gap-2 leading-[1.2rem]">
                                <span className="py-1"><MdOutlineCheck /></span>
                                <p className="text-red-500 font-medium">Price: $500</p>
                            </li>
                        </ul>

                        <Link to="#" className="border border-borderLite text-sm capitalize py-2 px-4 my-2 self-start text-shade-of-black rounded-md hover:brightness-90 hover:bg-prim/10">Enroll now</Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Pricing;