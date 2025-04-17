import { FaHtml5 } from "react-icons/fa";
import { MdOutlineCss } from "react-icons/md";
import { IoLogoJavascript } from "react-icons/io5";
// import bgImage from "../../assets/bg_1.jpg";

const Hero = () => {
    return (
        <section className="border border-borderColor py-8 px-3 bg-prim/5">
            <div className="flex flex-col gap-6 items-center sm:w-[70%] lg:w-[75%] max-w-[25rem] md:max-w-[35rem] lg:max-w-[50rem] my-0 mx-auto">
                <h1 className="font-medium text-shade-of-black capitalize text-2xl md:text-3xl lg:text-5xl text-center leading-10 lg:leading-16">Still Struggling With <span className="text-prim">JavaScript</span> or <span className="text-prim">Web Fundamentals</span>?</h1>

                <p className="text-center text-sm md:text-base lg:w-[90%] capitalize">
                    Get personalized 1:1 mentorship designed for <b>beginners</b> and self-taught <b>developers</b> feeling stuck, overwhelmed, or lost in their coding journey.
                </p>

                <div className="flex gap-2 my-2">
                    <button className="capitalize border border-borderColor bg-prim text-white-lite py-2 px-4 text-sm rounded-md cursor-pointer hover:brightness-90 duration-300">enroll now</button>
                    <button className="capitalize border border-borderColor py-2 px-4 text-sm rounded-md cursor-pointer hover:bg-gray-200 duration-300">book a free call</button>
                </div>

                <div className="flex items-center justify-center gap-8 md:gap-12 lg:gap-16">
                    <FaHtml5 className="text-red-400 text-3xl"/>
                    <MdOutlineCss className="text-purple-700 text-4xl"/>
                    <IoLogoJavascript className="text-yellow-400 text-2xl" />
                </div>
            </div>
        </section>
    )
}

export default Hero;