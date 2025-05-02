import SectionHeadingText from "../SectionHeadingText/SectionHeadingText";
import { FaCheckCircle } from "react-icons/fa";

const Apply = () => {
    return (
        <section id="enroll" className="top-margin flex flex-col items-center gap-4 sm:gap-8 lg:gap-10">
            <SectionHeadingText headingText="Apply for the mentorship" />
            <div className="container-custom flex flex-col min-[600px]:flex-row gap-8 lg:gap-10">
                <div className="w-full md:w-[50%] flex flex-col gap-5 ">
                    <h3 className="text-xl sm:text-2xl font-semibold text-shade-of-black">
                    Ready to Join?
                    </h3>

                    <p className="text-sm md:text-base">
                        Fill out the form to enroll for the mentorship.
                    </p>

                    <ul className="flex flex-col gap-3">
                        <h3 className="capitalize font-medium text-base md:text-lg">What you'll get:</h3>
                        <li className="text-sm lg:text-base flex gap-2 leading-6">
                            <span className="py-1"><FaCheckCircle className="text-base text-prim" /></span> 
                            <p className="">One-on-one mentorship: <span className="font-light">Receive personalized guidance and support tailored to your learning pace and goals.</span></p>
                        </li>
                        <li className="text-sm lg:text-base flex gap-2 leading-6">
                            <span className="py-1"><FaCheckCircle className="text-base text-prim" /></span> 
                            <p>
                                Hands-on projects: <span className="font-light">Apply your knowledge through practical, real-world projects that build your portfolio.</span>
                            </p>
                        </li>
                        <li className="text-sm lg:text-base flex gap-2 leading-6">
                            <span className="py-1"><FaCheckCircle className="text-base text-prim" /></span> 
                            <p>Feedback on code: <span className="font-light">Get constructive and detailed feedback on your code to improve your skills and understanding.</span></p>
                        </li>
                        <li className="text-sm lg:text-base flex gap-2 leading-6">
                            <span className="py-1"><FaCheckCircle className="text-base text-prim" /></span> 
                            <p>Beginner-friendly: <span className="font-light">Our curriculum is designed for individuals with no prior coding experience, making it easy to get started.</span></p>
                        </li>
                    </ul>
    
                    <div className="flex flex-col gap-3">
                        <h3 className="text-xl font-medium text-shade-of-black">Have questions?</h3>
                        <div className="flex gap-3">
                            <a href="mailto:codefoundationsng@gmail.com" target="_blank" className="border rounded-md py-2 px-4 grow text-center capitalize cursor-pointer">email</a>
                            <a href="https://wa.link/a9c1t0" target="_blank" className="border rounded-md py-2 px-4 grow text-center capitalize cursor-pointer">WhatsApp Us</a>
                        </div>
                    </div>
                </div>

                <form className="bg-white-lite border border-borderColor rounded-md w-full md:w-[50%] flex flex-col gap-8 py-10 px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input type="text" placeholder="First Name" className="input-style" required />
                        <input type="text" placeholder="Last Name" className="input-style" required />
                    </div>

                    <input type="email" placeholder="Email Address" className="input-style w-full" required />

                    <select className="input-style w-full" required>
                    <option value="">Select Your Track</option>
                    <option value="web-fundamentals">Web Fundamentals</option>
                    <option value="web-fundamentals">Advanced Web Fundamentals</option>
                    <option value="javascript">JavaScript Basics</option>
                    <option value="advanced-js">Advanced JavaScript</option>
                    </select>

                    <textarea placeholder="Tell us why you're joining (optional)" className="input-style w-full" rows="4" />

                    <button
                    type="submit"
                    className="bg-prim text-white-lite py-3 px-6 rounded-md hover:brightness-90 duration-300 w-full font-semibold cursor-pointer"
                    >
                    Submit Application
                    </button>
                </form>
            </div>
        </section>

    )
}

export default Apply;