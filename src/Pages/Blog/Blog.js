import React from 'react';

const Blog = () => {
    return (
        <>
            <h3 className='text-2xl text-center font-bold my-8'><span className=' border-b-2 border-primary'>Blog</span></h3>

            <div className='flex flex-col justify-center items-center gap-5 mb-10'>
                <div className="card w-full md:w-2/3 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">How will you improve the performance of a React Application?</h2>
                        <p>Keeping component state local where necessary. Memoizing React components to prevent unnecessary re-renders. Code-splitting React using dynamic import. Windowing or list virtualization in React.Ignore Lazy loading images in React</p>
                    </div>
                </div>
                <div className="card w-full md:w-2/3 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title"> What are the different ways to manage a state in a React application?</h2>
                        <p>There are 4 different ways for manage a state in React application. <br />
                            1. Local state. <br />
                            2. Global state. <br />
                            3. Server state. <br />
                            4. URL state.</p>
                    </div>
                </div>
                <div className="card w-full md:w-2/3 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">How does prototypical inheritance work?</h2>
                        <p>The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object. getPrototypeOf and Object.</p>
                    </div>
                </div>
                <div className="card w-full md:w-2/3 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">Why you do not set the state directly in React? <br /> For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts</h2>
                        <p>One should never update the state directly because of the following reasons: If you update it directly, calling the setState() afterward may just replace the update you made. When you directly update the state, it does not change this.</p>
                    </div>
                </div>
                <div className="card w-full md:w-2/3 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</h2>
                        <p>You can use the Array.prototype.filter function which takes a callback and filters accordingly. Per the documentation: The filter() method creates a new array with all elements that pass the test implemented by the provided function. The callback, which is the provided function, takes three arguments. From the documentation: callback Function is a predicate, to test each element of the array. Return true to keep the element, false otherwise, taking three arguments: element The current element being processed in the array. index The index of the current element being processed in the array. array The array filter was called upon. We may use element to check the current element and test if it should be filtered or not, like so:
                            <br />
                            Here, we use a callback (the test) that checks if the current element (obj)'s property specified in filter is strictly equal to keyword. If it passes, it is kept, and thus all objects with property Level with vale Standart are kept. You can also shorten this with ES6 arrow functionsThis is just shorthand for the above. It is effectively the same, returning true or false based on if the current element's Level property is strictly equal to keyword.
                        </p>
                    </div>
                </div>
                <div className="card w-full md:w-2/3 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">What is a unit test? Why should write unit tests?</h2>
                        <p>Unit tests are typically automated tests written and run by software developers to ensure that a section of an application (known as the "unit") meets its design and behaves as intended. In procedural programming, a unit could be an entire module, but it is more commonly an individual function or procedure.</p>
                    </div>
                </div>

            </div>
        </>
    );
};

export default Blog;