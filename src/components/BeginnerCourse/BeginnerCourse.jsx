const BeginnerCourse = () => {
    return (
        <section className="container-custom max-w-[40rem] flex flex-col gap-8" style={{margin: "2rem auto"}}>
            <div className="flex flex-col gap-3">
                <h1 className="font-medium capitalize text-xl md:text-2xl">Web Fundamentals Curriculum</h1>
                <p className="capitalize text-sm">duration: 6 weeks</p>
            </div>

            <div className="text-sm flex flex-col gap-3 leading-[1.7rem]">
                <p>
                    This 6-week intensive program is designed to take you from the basics of how the web works to building your first projects.
                </p>

                <p>
                    You'll start with HTML, move through CSS styling and layouts, and wrap up with a basic introduction to JavaScript. By the end, you'll build and launch your own mini project — like a landing page or portfolio site.
                </p>
            </div>
            
            <div className="text-sm flex flex-col gap-3 leading-[1.7rem]">
                <h2 className="font-medium text-lg">Week 1: Introduction + HTML Basics</h2>
                <ul className="">
                    <li className="list-disc list-inside">How websites and the internet work</li>
                    <li className="list-disc list-inside">What is HTML?</li>
                    <li className="list-disc list-inside">Boilerplate structure</li>
                    <li className="list-disc list-inside">Headings, paragraphs, lists</li>
                    <li className="list-disc list-inside">Links, images, block vs inline elements, semantic tags</li>
                </ul>
            </div>

            <div className="text-sm flex flex-col gap-3 leading-[1.7rem]">
                <h2 className="font-medium text-lg">Week 2: HTML Forms + Tables + Media</h2>
                <ul className="">
                    <li className="list-disc list-inside">Form inputs, labels, validation</li>
                    <li className="list-disc list-inside">Tables</li>
                    <li className="list-disc list-inside">Embedding videos, maps, and using iframes</li>
                    <li className="list-disc list-inside">Accessibility basics</li>
                </ul>
            </div>

            <div className="text-sm flex flex-col gap-3 leading-[1.7rem]">
                <h2 className="font-medium text-lg">Week 3: CSS Basics</h2>
                <ul className="">
                    <li className="list-disc list-inside">What is CSS? (Inline, internal, external)</li>
                    <li className="list-disc list-inside">Selectors, properties, values</li>
                    <li className="list-disc list-inside">CSS combinators</li>
                    <li className="list-disc list-inside">Box model</li>
                    <li className="list-disc list-inside">CSS colors, backgrounds, and typography</li>
                </ul>
            </div>

            <div className="text-sm flex flex-col gap-3 leading-[1.7rem]">
                <h2 className="font-medium text-lg">Week 4: Layouts and Positioning</h2>
                <ul className="">
                    <li className="list-disc list-inside">CSS positioning (relative, absolute, fixed, sticky)</li>
                    <li className="list-disc list-inside">Display: block, inline, inline-block</li>
                    <li className="list-disc list-inside">Display: flexbox and grid introduction</li>
                    <li className="list-disc list-inside">Float & Clear</li>
                </ul>
            </div>

            <div className="text-sm flex flex-col gap-3 leading-[1.7rem]">
                <h2 className="font-medium text-lg">Week 5: Responsive Design and Transitions</h2>
                <ul className="">
                    <li className="list-disc list-inside">Media queries</li>
                    <li className="list-disc list-inside">Units (%, rem, em, vw, vh)</li>
                    <li className="list-disc list-inside">Mobile-first design</li>
                    <li className="list-disc list-inside">CSS Transitions</li>
                </ul>
            </div>

            <div className="text-sm flex flex-col gap-3 leading-[1.7rem]">
                <h2 className="font-medium text-lg">Week 6: Intro to JavaScript</h2>
                <ul className="">
                    <li className="list-disc list-inside">What is JavaScript? Where to use it</li>
                    <li className="list-disc list-inside">JavaScript Alerts, console</li>
                    <li className="list-disc list-inside">variables, data types, operators</li>
                    <li className="list-disc list-inside">Functions, if statements</li>
                    <li className="list-disc list-inside">Basic DOM manipulation</li>
                </ul>
            </div>
        </section>
    )
}

export default BeginnerCourse;