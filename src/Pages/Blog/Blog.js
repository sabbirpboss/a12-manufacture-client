import React from "react";

const Blog = () => {
  return (
    <>
      <h3 className="text-2xl text-center font-bold my-8">
        <span className=" border-b-2 pb-2 border-primary">Blogs</span>
      </h3>

      <div className="flex flex-col justify-center items-center gap-5 mb-10">
        <div className="card w-full md:w-2/3 bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">
              How will you improve the performance of a React Application?
            </h2>
            <p>
              Internally, React uses several clever techniques to minimize the
              number of costly DOM operations required to update the UI. For
              many applications, using React will lead to a fast user interface
              without doing much work to specifically optimize for performance.
              Nevertheless, there are several ways you can speed up your React
              application.Data immutability is not an architecture or design
              pattern, it's an opinionated way of writing code. This forces you
              to think about how you structure your application data flow. In my
              opinion, data immutability is a practice that revolves around a
              strict unidirectional data flow. Function components prevent
              constructing class instances while reducing the overall bundle
              size as it minifies better than classes.
            </p>
          </div>
        </div>
        <div className="card w-full md:w-2/3 bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">
              {" "}
              What are the different ways to manage a state in a React
              application?
            </h2>
            <p>
              React components have a built-in state object. The state is
              encapsulated data where you store assets that are persistent
              between component renderings. The state is just a fancy term for a
              JavaScript data structure. If a user changes state by interacting
              with your application, the UI may look completely different
              afterwards, because it's represented by this new state rather than
              the old state.
              <br />
              One of the reasons redux was so successful was the fact that
              react-redux solved the prop drilling problem. The fact that you
              could share data across different parts of your tree by simply
              passing your component into some magical connect function was
              wonderful. Its use of reducers/action creators/etc. is great too,
              but I'm convinced that the ubiquity of redux is because it solved
              the prop drilling pain point for developers. Not just global
              application state, but local state as well. This leads to a lot of
              problems, not the least of which is that when you're maintaining
              any state interaction, it involves interacting with reducers,
              action creators/types, and dispatch calls, which ultimately
              results in having to open many files and trace through the code in
              your head to figure out what's happening and what impact it has on
              the rest of the codebase.
            </p>
          </div>
        </div>
        <div className="card w-full md:w-2/3 bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">
              How does prototypical inheritance work?
            </h2>
            <p>
              Every object with its methods and properties contains an internal
              and hidden property known as [[Prototype]]. The Prototypal
              Inheritance is a feature in javascript used to add methods and
              properties in objects. It is a method by which an object can
              inherit the properties and methods of another object.
              Traditionally, in order to get and set the [[Prototype]] of an
              object, we use Object.getPrototypeOf and Object.
              <br />
              Simply put, prototypical inheritance refers to the ability to
              access object properties from another object. We use a JavaScript
              prototype to add new properties and methods to an existing object
              constructor. We can then essentially tell our JS code to inherit
              properties from a prototype. In programming, this is called
              “prototypal inheritance”. And soon we'll study many examples of
              such inheritance, as well as cooler language features built upon
              it.
            </p>
          </div>
        </div>
        <div className="card w-full md:w-2/3 bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">
              Why you do not set the state directly in React? <br /> For
              example, if you have const [products, setProducts] = useState([]).
              Why you do not set products = [...] instead, you use the
              setProducts
            </h2>
            <p>
              If you update it directly, calling the setState() afterward may
              just replace the update you made. When you directly update the
              state, it does not change this.state immediately. Instead, it
              creates a pending state transition, and accessing it after calling
              this method will only return the present value. You will lose
              control of the state across all components. So, it's obvious from
              the statement that if we mutate the state directly, it will change
              the reference of the state in the previous virtual DOM as well.
              So, React won't be able to see that there is a change of the state
              and so it won't be reflected in the original DOM until we reload.
              The problem is more obvious when we extend a component with
              React.PureComponent instead of React.component , where React tries
              to optimize some time by not rendering components if no changes
              are found.
            </p>
          </div>
        </div>
        <div className="card w-full md:w-2/3 bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">
              What is a unit test? Why should write unit tests?
            </h2>
            <p>
              UNIT TESTING is a type of software testing where individual units
              or components of a software are tested. The purpose is to validate
              that each unit of the software code performs as expected. Unit
              Testing is done during the development of an application by the
              developers. Unit Tests isolate a section of code and verify its
              correctness. A unit may be an individual function, method,
              procedure, module, or object. Unit testing allows software
              developers to actually think through the design of the software
              and what has to be done before they write the code. This can help
              them to stay focused and can also help them to create much better
              designs. Any bugs are found easily and quicker: Code covered with
              tests is more reliable than the code without. If a future change
              breaks something in the code, developers will be able to identify
              the root of the problem right away rather than coming through an
              unwieldy codebase to find the issue.Best practices suggest that
              developers first run all unit tests or a group of tests locally to
              make sure any coding changes don't disrupt the existing code.
              However, consider the human factor: A developer might forget to
              run unit tests after making changes and submit potentially
              non-working code to a common branch.
            </p>
          </div>
        </div>
        <div className="card w-full md:w-2/3 bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">
              What is a unit test? Why should write unit tests?
            </h2>
            <p>
              Unit tests are typically automated tests written and run by
              software developers to ensure that a section of an application
              (known as the "unit") meets its design and behaves as intended. In
              procedural programming, a unit could be an entire module, but it
              is more commonly an individual function or procedure.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
