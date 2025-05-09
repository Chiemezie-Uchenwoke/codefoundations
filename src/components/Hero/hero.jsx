import { FaHtml5 } from "react-icons/fa";
import { MdOutlineCss } from "react-icons/md";
import { IoLogoJavascript } from "react-icons/io5";
// import illustration from "../../assets/illustration_2b.png";
import CodeSnippet from "../CodeSnippet/CodeSnippet";
import CodeDisplay from "../../utils/CodeDisplay";
import bgImage from "../../assets/bg_10.jpg";


const Hero = () => {
    const code = CodeDisplay();

    return (
        <section className="border border-borderColor py-12 md:py-12 lg:py-20 bg-[prim/3] relative before:content-[''] before:absolute before:w-full before:h-full before:bg-prim/5 before:left-0 before:top-0 before:z-10 " style={{backgroundImage: `url(${bgImage})`}}>
            <div className="container-custom flex flex-col gap-8 lg:gap-10 md:flex-row">
                <div className="flex flex-col gap-6 w-[100%] md:w-[60%]">
                    <h1 className="z-20 font-medium text-white-lite capitalize text-[1.3rem] sm:text-3xl md:text-2xl lg:text-[2rem] xl:text-[2.3rem] 2xl:text-[2.35rem] leading-10 sm:leading-12 ">Still Struggling With <span className="">JavaScript</span> or <span className="">Web Fundamentals</span>?</h1>
 
                    <p className="z-20 text-[0.9rem] md:text-[0.8rem] text-white-lite lg:text-[0.95rem] capitalize text-justify leading-6 sm:leading-8 hyphens-auto">
                        Get personalized 1:1 mentorship designed for <span className="font-[600]">beginners</span> and self-taught <span className="font-[600]">developers</span> feeling stuck, overwhelmed, or lost in their coding journey.
                    </p>

                    <div className="z-20 flex flex-col md:flex-row gap-4 md:gap-4 lg:gap-6 my-3">
                        <a href="#enroll" className="capitalize border border-borderColor bg-prim text-white-lite py-3 px-8 text-[0.9rem] rounded-md cursor-pointer hover:brightness-90 duration-300 grow font-[600] text-center ">enroll now</a>

                        <button className="capitalize border border-borderColor py-3 px-8 text-[0.9rem] rounded-md cursor-pointer bg-gray-200 hover:brightness-95 duration-300 grow font-[600] ">book a free call</button>
                    </div>
                </div>

                <CodeSnippet code={code} language="javascript" />

            </div>
        </section>
    )
}

export default Hero;