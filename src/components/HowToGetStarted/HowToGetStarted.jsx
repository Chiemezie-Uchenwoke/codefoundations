import SectionHeadingText from "../SectionHeadingText/SectionHeadingText";

const HowToGetStarted = () => {
    return (
        <section className="top-margin">
            <div className="container-custom flex flex-col gap-6 md:gap-8 lg:gap-10 items-center">
                <SectionHeadingText headingText="How to Join the Mentorship" />

                <div className="grid grid-cols-1 gap-8 w-full sm:grid-cols-2 lg:grid-cols-4">
                    <div className="bg-prim/5 text-shade-of-black p-4 rounded-md flex items-center justify-center text-center text-sm lg:text-base border border-borderColor shadow-md capitalize">Fill the interest form</div>

                    <div className="bg-prim/5 text-shade-of-black p-4 rounded-md flex items-center justify-center text-center text-sm lg:text-base border border-borderColor shadow-md capitalize">Choose your track - Web or JavaScript</div>

                    <div className="bg-prim/5 text-shade-of-black p-4 rounded-md flex items-center justify-center text-center text-sm lg:text-base border border-borderColor shadow-md capitalize">Make payment on Selar</div>

                    <div className="bg-prim/5 text-shade-of-black p-4 rounded-md flex items-center justify-center text-center text-sm lg:text-base border border-borderColor shadow-md capitalize">Receive onboarding email + get started</div>
                </div>
            </div>
        </section>
    )
}

export default HowToGetStarted;