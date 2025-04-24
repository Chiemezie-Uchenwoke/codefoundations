import SectionHeadingText from "../SectionHeadingText/SectionHeadingText";
import { AiOutlineForm } from "react-icons/ai";
import { TbTargetArrow } from "react-icons/tb";
import { FaRegCreditCard } from "react-icons/fa6";
import { MdMailOutline } from "react-icons/md";
// import bgImage from "../../assets/bg_3.jpg";

const HowToGetStarted = () => {
    return (
        <section className=" bg-prim py-16 lg:py-24 m-0" >
            <div className="container-custom flex flex-col gap-6 md:gap-8 lg:gap-10 items-center">
                <h2 className="font-semibold capitalize text-xl sm:text-2xl lg:text-3xl text-white-lite text-center">How to join the mentorship</h2>

                <div className="grid grid-cols-1 gap-8 w-full max-[549px]:max-w-[18rem] min-[550px]:grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 lg:w-full">
                    <div className="bg-white-lite text-shade-of-black p-4 rounded-md flex flex-col gap-4 items-center justify-center text-center border border-borderColor shadow-md capitalize font-medium group py-6">
                        <span className="group-hover:animate-bounce"><AiOutlineForm className="text-4xl" /></span>
                        <p className="text-xs min-[500px]:text-sm">Fill the interest form</p>
                    </div>

                    <div className="bg-white-lite text-shade-of-black p-4 rounded-md flex flex-col gap-4 items-center justify-center text-center border border-borderColor shadow-md capitalize font-medium group py-6">
                        <span className="group-hover:animate-bounce"><TbTargetArrow className="text-4xl" /></span>
                        <p className="text-xs min-[500px]:text-sm">Choose your track</p>
                    </div>

                    <div className="bg-white-lite text-shade-of-black p-4 rounded-md flex flex-col gap-4 items-center justify-center text-center border border-borderColor shadow-md capitalize font-medium group py-6">
                        <span className="group-hover:animate-bounce"><FaRegCreditCard className="text-4xl" /></span>
                        <p className="text-xs min-[500px]:text-sm">Make payment on Selar</p>
                    </div>

                    <div className="bg-white-lite text-shade-of-black p-4 rounded-md flex flex-col gap-4 items-center justify-center text-center border border-borderColor shadow-md capitalize font-medium group py-6">
                        <span className="group-hover:animate-bounce"><MdMailOutline className="text-4xl" /></span>
                        <p className="text-xs min-[500px]:text-sm">Receive Onboarding email</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HowToGetStarted;