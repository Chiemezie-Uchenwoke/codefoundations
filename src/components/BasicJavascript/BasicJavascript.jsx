const BasicJavascript = () => {
    return (
        <section className="container-custom max-w-[40rem] flex flex-col gap-8" style={{margin: "2rem auto"}}>
            <div className="flex flex-col gap-3">
                <h1 className="font-medium capitalize text-xl md:text-2xl">JavaScript Basics</h1>
                <p className="capitalize text-sm">duration: 6 weeks</p>
            </div>

            <div className="text-sm flex flex-col gap-3 leading-[1.7rem]">
                <p>
                    Our 6-week JavaScript Basics program is designed to give you a solid grasp of core JavaScript concepts. Through hands-on lessons and guided practice, you'll build confidence writing clean, functional code. This program is perfect for anyone who's comfortable with HTML and CSS and ready to dive into understanding JavaScript. Here's what you can expect to learn:
                </p>
            </div>
            
            <div className="text-sm flex flex-col gap-3 leading-[1.7rem]">
                <h2 className="font-medium text-lg">Week 1: JavaScript Introduction</h2>
                <ul className="">
                    <li className="list-disc list-inside">What is JavaScript?</li>
                    <li className="list-disc list-inside">Variables (var, let, const)</li>
                    <li className="list-disc list-inside">Data types & operators</li>
                    <li className="list-disc list-inside">String and math methods</li>
                </ul>
            </div>
            <div className="text-sm flex flex-col gap-3 leading-[1.7rem]">
                <h2 className="font-medium text-lg">Week 2: Functions & Scope</h2>
                <ul className="">
                    <li className="list-disc list-inside">Declaring and calling functions</li>
                    <li className="list-disc list-inside">Parameters, return values</li>
                    <li className="list-disc list-inside">Arrow functions</li>
                    <li className="list-disc list-inside">Hoisting & scoping</li>
                </ul>
            </div>

            <div className="text-sm flex flex-col gap-3 leading-[1.7rem]">
                <h2 className="font-medium text-lg">Week 3: Conditionals & Loops</h2>
                <ul className="">
                    <li className="list-disc list-inside">if/else, switch, ternary</li>
                    <li className="list-disc list-inside">for, while, do…while loops</li>
                </ul>
            </div>

            <div className="text-sm flex flex-col gap-3 leading-[1.7rem]">
                <h2 className="font-medium text-lg">Week 4: Arrays and Objects</h2>
                <ul className="">
                    <li className="list-disc list-inside">Array methods: map, filter, reduce, etc</li>
                    <li className="list-disc list-inside">Objects, key-value pairs</li>
                    <li className="list-disc list-inside">Destructuring, spread/rest operators</li>
                </ul>
            </div>

            <div className="text-sm flex flex-col gap-3 leading-[1.7rem]">
                <h2 className="font-medium text-lg">Week 5: DOM Manipulation</h2>
                <ul className="">
                    <li className="list-disc list-inside"> Selecting elements</li>
                    <li className="list-disc list-inside"> Changing content and styles</li>
                    <li className="list-disc list-inside"> Event listeners</li>
                    <li className="list-disc list-inside">Forms and event handling</li>
                </ul>
            </div>

            <div className="text-sm flex flex-col gap-3 leading-[1.7rem]">
                <h2 className="font-medium text-lg">Week 6: Project Week</h2>
                <ul className="">
                    <li className="list-disc list-inside">Feedback</li>
                    <li className="list-disc list-inside">Project</li>
                </ul>
            </div>
        </section>
    )
}

export default BasicJavascript;