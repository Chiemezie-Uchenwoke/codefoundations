import SectionHeadingText from "../SectionHeadingText/SectionHeadingText";
import { AiOutlineForm } from "react-icons/ai";
import { TbTargetArrow } from "react-icons/tb";
import { FaRegCreditCard } from "react-icons/fa6";
import { MdMailOutline } from "react-icons/md";

const HowToGetStarted = () => {
    return (
        <section className=" bg-prim py-16 lg:py-24 m-0">
            <div className="container-custom flex flex-col gap-6 md:gap-8 lg:gap-10 items-center">
                <h2 className="font-semibold capitalize text-xl sm:text-2xl lg:text-3xl text-white-lite">How to join the mentorship</h2>

                <div className="grid grid-cols-1 gap-8 w-full sm:grid-cols-2 lg:grid-cols-4 md:w-[90%] lg:w-full">
                    <div className="bg-white-lite text-shade-of-black p-4 rounded-md flex flex-col gap-4 items-center justify-center text-center text-sm lg:text-base border border-borderColor shadow-md capitalize font-medium group py-6">
                        <span className="group-hover:animate-bounce"><AiOutlineForm className="text-4xl" /></span>
                        <p className="text-sm">Fill the interest form</p>
                    </div>

                    <div className="bg-white-lite text-shade-of-black p-4 rounded-md flex flex-col gap-4 items-center justify-center text-center text-sm lg:text-base border border-borderColor shadow-md capitalize font-medium group py-6">
                        <span className="group-hover:animate-bounce"><TbTargetArrow className="text-4xl" /></span>
                        <p className="text-sm">Choose your track</p>
                    </div>

                    <div className="bg-white-lite text-shade-of-black p-4 rounded-md flex flex-col gap-4 items-center justify-center text-center text-sm lg:text-base border border-borderColor shadow-md capitalize font-medium group py-6">
                        <span className="group-hover:animate-bounce"><FaRegCreditCard className="text-4xl" /></span>
                        <p className="text-sm">Make payment on Selar</p>
                    </div>

                    <div className="bg-white-lite text-shade-of-black p-4 rounded-md flex flex-col gap-4 items-center justify-center text-center text-sm lg:text-base border border-borderColor shadow-md capitalize font-medium group py-6">
                        <span className="group-hover:animate-bounce"><MdMailOutline className="text-4xl" /></span>
                        <p className="text-sm">Receive Onboarding email</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HowToGetStarted;