import { FaHtml5 } from "react-icons/fa";
import { MdOutlineCss } from "react-icons/md";
import { IoLogoJavascript } from "react-icons/io5";
import illustration from "../../assets/illustration_2b.png";

const Hero = () => {
    return (
        <section className="border border-borderColor py-8 md:py-12 lg:py-20 bg-prim/3">
            <div className="container-custom flex flex-col gap-8 sm:gap-4 lg:gap-8 md:flex-row">
                <div className="flex flex-col gap-6 w-[100%] md:w-[60%]">
                    <h1 className="font-medium text-shade-of-black capitalize text-[1.3rem] sm:text-3xl md:text-2xl lg:text-[2rem] xl:text-[2.3rem] 2xl:text-[2.35rem] leading-10 sm:leading-12 ">Still Struggling With <span className="text-prim">JavaScript</span> or <span className="text-prim">Web Fundamentals</span>?</h1>
 
                    <p className="text-[0.9rem] md:text-[0.95rem] capitalize text-justify leading-6 md:leading-8 hyphens-auto">
                        Get personalized 1:1 mentorship designed for <span className="font-[600]">beginners</span> and self-taught <span className="font-[600]">developers</span> feeling stuck, overwhelmed, or lost in their coding journey.
                    </p>

                    <div className="flex flex-col md:flex-row gap-3 md:gap-4 my-3">
                        <button className="capitalize border border-borderColor bg-prim text-white-lite py-3 px-8 text-[0.9rem] rounded-md cursor-pointer hover:brightness-90 duration-300 grow font-[600] ">enroll now</button>

                        <button className="capitalize border border-borderColor py-3 px-8 text-[0.9rem] rounded-md cursor-pointer hover:bg-gray-200 duration-300 grow font-[600] ">book a free call</button>
                    </div>
                </div>

                <figure className="md:w-[40%] flex justify-center items-center">
                    <img src={illustration} alt="illustration" loading="lazy" className="w-full max-w-[25rem] sm:max-w-[30rem] animate-rotate-illustration" />
                </figure>
            </div>
        </section>
    )
}

export default Hero;