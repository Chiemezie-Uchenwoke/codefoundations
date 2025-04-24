const AdvancedWebCourse = () => {
    return (
        <section className="container-custom max-w-[40rem] flex flex-col gap-8" style={{margin: "2rem auto"}}>
            <div className="flex flex-col gap-3">
                <h1 className="font-medium capitalize text-xl md:text-2xl">Advanced Web Fundamentals</h1>
                <p className="capitalize text-sm">duration: 12 weeks</p>
            </div>

            <div className="text-sm flex flex-col gap-3 leading-[1.7rem]">
                <p>
                    Our 12-week Web Fundamentals program offers a more extensive exploration of core concepts, ensuring you gain a strong and lasting understanding. You'll have more time for practice and deeper dives into HTML, CSS, and foundational JavaScript. Here's what you can expect to learn:
                </p>
            </div>
            
            <div className="text-sm flex flex-col gap-3 leading-[1.7rem]">
                <h2 className="font-medium text-lg">Week 1: Introduction + HTML Basics</h2>
                <ul className="">
                    <li className="list-disc list-inside">How websites and the internet work</li>
                    <li className="list-disc list-inside">What is HTML?</li>
                    <li className="list-disc list-inside">Boilerplate structure</li>
                    <li className="list-disc list-inside">Headings, paragraphs, lists</li>
                    <li className="list-disc list-inside">Links, images</li>
                </ul>
            </div>
            <div className="text-sm flex flex-col gap-3 leading-[1.7rem]">
                <h2 className="font-medium text-lg">Week 2: Block, Inline & Semantic Tags</h2>
                <ul className="">
                    <li className="list-disc list-inside">Block vs inline elements</li>
                    <li className="list-disc list-inside">semantic tag</li>
                    <li className="list-disc list-inside">File paths: relative vs absolute</li>
                </ul>
            </div>

            <div className="text-sm flex flex-col gap-3 leading-[1.7rem]">
                <h2 className="font-medium text-lg">Week 3: HTML Forms + Tables + Media</h2>
                <ul className="">
                    <li className="list-disc list-inside">Form inputs, labels, validation</li>
                    <li className="list-disc list-inside">Tables</li>
                    <li className="list-disc list-inside">Embedding videos, maps, and using iframes</li>
                    <li className="list-disc list-inside">Accessibility basics</li>
                </ul>
            </div>

            <div className="text-sm flex flex-col gap-3 leading-[1.7rem]">
                <h2 className="font-medium text-lg">Week 4: CSS Basics</h2>
                <ul className="">
                    <li className="list-disc list-inside">What is CSS? (Inline, internal, external)</li>
                    <li className="list-disc list-inside">Selectors, properties, values</li>
                    <li className="list-disc list-inside">CSS combinators</li>
                    <li className="list-disc list-inside">Box model</li>
                    <li className="list-disc list-inside">CSS colors, backgrounds</li>
                </ul>
            </div>

            <div className="text-sm flex flex-col gap-3 leading-[1.7rem]">
                <h2 className="font-medium text-lg">Week 5: CSS Basics</h2>
                <ul className="">
                    <li className="list-disc list-inside"> Pseudo-classes</li>
                    <li className="list-disc list-inside"> understanding folder structure</li>
                    <li className="list-disc list-inside"> importing fonts</li>
                    <li className="list-disc list-inside">Importing icons</li>
                    <li className="list-disc list-inside">Display: block, inline, inline-block</li>
                </ul>
            </div>

            <div className="text-sm flex flex-col gap-3 leading-[1.7rem]">
                <h2 className="font-medium text-lg">Week 6: Layouts and Positioning</h2>
                <ul className="">
                    <li className="list-disc list-inside">CSS positioning (relative, absolute, fixed, sticky)</li>
                    <li className="list-disc list-inside">Display: flexbox and grid introduction</li>
                    <li className="list-disc list-inside">Float & Clear</li>
                    <li className="list-disc list-inside">Design Principles</li>
                </ul>
            </div>

            <div className="text-sm flex flex-col gap-3 leading-[1.7rem]">
                <h2 className="font-medium text-lg">Week 7: Responsive Design and Transitions</h2>
                <ul className="">
                    <li className="list-disc list-inside">Media queries</li>
                    <li className="list-disc list-inside">Units (%, rem, em, vw, vh)</li>
                    <li className="list-disc list-inside">Mobile-first design</li>
                    <li className="list-disc list-inside">CSS Transitions</li>
                    <li className="list-disc list-inside">CSS Animations</li>
                </ul>
            </div>

            <div className="text-sm flex flex-col gap-3 leading-[1.7rem]">
                <h2 className="font-medium text-lg">Week 8: Version Control</h2>
                <ul className="">
                    <li className="list-disc list-inside">Basic CLI commands</li>
                    <li className="list-disc list-inside">Introduction to Git & GitHub</li>
                </ul>
            </div>

            <div className="text-sm flex flex-col gap-3 leading-[1.7rem]">
                <h2 className="font-medium text-lg">Week 9: Tailwind CSS</h2>
                <ul className="">
                    <li className="list-disc list-inside">Tailwind CSS Installation & usage</li>
                    <li className="list-disc list-inside">Tailwind utility classes</li>
                </ul>
            </div>

            <div className="text-sm flex flex-col gap-3 leading-[1.7rem]">
                <h2 className="font-medium text-lg">Week 10: Intro to JavaScript</h2>
                <ul className="">
                    <li className="list-disc list-inside">What is JavaScript? Where to use it</li>
                    <li className="list-disc list-inside">JavaScript Alerts, console</li>
                    <li className="list-disc list-inside">variables, data types, operators</li>
                </ul>
            </div>

            <div className="text-sm flex flex-col gap-3 leading-[1.7rem]">
                <h2 className="font-medium text-lg">Week 11: Intro to JavaScript</h2>
                <ul className="">
                    <li className="list-disc list-inside">if statements</li>
                    <li className="list-disc list-inside">Functions</li>
                    <li className="list-disc list-inside">Arrow functions & function expressions</li>
                    <li className="list-disc list-inside">Basic DOM manipulation</li>
                </ul>
            </div>

            <div className="text-sm flex flex-col gap-3 leading-[1.7rem]">
                <h2 className="font-medium text-lg">Week 12: </h2>
                <ul className="">
                    <li className="list-disc list-inside">Introduction to arrays & objects</li>
                    <li className="list-disc list-inside">Project</li>
                </ul>
            </div>
        </section>
    )
}

export default AdvancedWebCourse;