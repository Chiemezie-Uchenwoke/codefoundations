import { FaHtml5 } from "react-icons/fa";
import { MdOutlineCss } from "react-icons/md";
import { IoLogoJavascript } from "react-icons/io5";
import illustration from "../../assets/illustration_2b.png";

const Hero = () => {
    return (
        <section className="border border-borderColor py-8 md:py-12 lg:py-16 bg-prim/3">
            <div className="container-custom flex flex-col gap-8 sm:flex-row">
                <div className="flex flex-col gap-6 w-[100%] md:w-[60%] border">
                    <h1 className="font-medium text-shade-of-black capitalize text-[1.52rem] md:text-3xl lg:text-5xl leading-10 lg:leading-16">Still Struggling With <span className="text-prim">JavaScript</span> or <span className="text-prim">Web Fundamentals</span>?</h1>

                    <p className="text-[0.95rem] md:text-base capitalize text-justify">
                        Get personalized 1:1 mentorship designed for <span className="font-[600]">beginners</span> and self-taught <span className="font-[600]">developers</span> feeling stuck, overwhelmed, or lost in their coding journey.
                    </p>

                    <div className="flex gap-2 my-2">
                        <button className="capitalize border border-borderColor bg-prim text-white-lite py-2 px-4 text-sm rounded-md cursor-pointer hover:brightness-90 duration-300">enroll now</button>
                        <button className="capitalize border border-borderColor py-2 px-4 text-sm rounded-md cursor-pointer hover:bg-gray-200 duration-300">book a free call</button>
                    </div>
                </div>

                <figure className="md:w-[40%] border flex justify-center items-center">
                    <img src={illustration} alt="illustration" loading="lazy" className="w-full max-w-[25rem] sm:max-w-[30rem]" />
                </figure>
            </div>
        </section>
    )
}

export default Hero;