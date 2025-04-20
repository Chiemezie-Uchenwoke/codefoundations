import SectionHeadingText from "../SectionHeadingText/SectionHeadingText";

const HowToGetStarted = () => {
    return (
        <section className=" bg-prim py-16 lg:py-24 m-0">
            <div className="container-custom flex flex-col gap-6 md:gap-8 lg:gap-10 items-center">
                <h2 className="font-semibold capitalize text-xl sm:text-2xl lg:text-3xl text-white-lite">How to join the mentorship</h2>

                <div className="grid grid-cols-1 gap-8 w-full sm:grid-cols-2 lg:grid-cols-4">
                    <div className="bg-white-lite text-shade-of-black p-4 rounded-md flex items-center justify-center text-center text-sm lg:text-base border border-borderColor shadow-md capitalize font-medium">Fill the interest form</div>

                    <div className="bg-white-lite text-shade-of-black p-4 rounded-md flex items-center justify-center text-center text-sm lg:text-base border border-borderColor shadow-md capitalize font-medium">Choose your track - Web or JavaScript</div>

                    <div className="bg-white-lite text-shade-of-black p-4 rounded-md flex items-center justify-center text-center text-sm lg:text-base border border-borderColor shadow-md capitalize font-medium">Make payment on Selar</div>

                    <div className="bg-white-lite text-shade-of-black p-4 rounded-md flex items-center justify-center text-center text-sm lg:text-base border border-borderColor shadow-md capitalize font-medium">Receive onboarding email + get started</div>
                </div>
            </div>
        </section>
    )
}

export default HowToGetStarted;