import React from "react";
import { Link } from "react-router-dom";
import me from "../../Assests/me.png";

const Portfolio = () => {
  return (
    <>
      <h3 className="text-2xl text-center font-bold my-8">
        <span className=" border-b-2 border-primary">Developer Portfolio</span>
      </h3>

      <div>
        <div className="avatar flex justify-center">
          <div className="w-36 mask mask-hexagon">
            <img src={me} alt="" />
          </div>
        </div>
        <div className="">
          <h3 className="text-2xl text-center text-transparent bg-clip-text bg-gradient-to-br from-accent to-secondary mt-3">
            Sabbir Ahammed
          </h3>
          <div className="flex flex-col justify-center items-center mb-6">
            <h3 className="text-lg text-sky-500">sabbir.ah799@gmail.com</h3>
            <Link
              to="https://www.linkedin.com/in/sabbir-ah/"
              className="text-lg btn-active btn-info btn-link"
            >
              Linkedin profile
            </Link>
            <Link
              to="https://github.com/sabbirpboss"
              className="text-lg btn-active btn-info btn-link"
            >
              Portfolio
            </Link>
          </div>
          <div className="flex justify-center items-center mb-10">
            <div className="card w-full md:w-2/4 lg:w-2/5 bg-gradient-to-r from-violet-500 to-fuchsia-500 text-primary-content">
              <div className="card-body">
                <h2 className="card-title">Skills</h2>
                <div className="flex">
                  <p>
                    {" "}
                    <span className="text-md font-bold">Expertise</span> <br />
                    1. JavaScript <br />
                    2. ES6 <br />
                    3. React <br />
                    4. HTML5 <br />
                    5. CSS3 <br />
                    6. Bootstrap <br />
                    7. Tailwind
                  </p>
                  <p>
                    {" "}
                    <span className="text-md font-bold">Comfortable</span>{" "}
                    <br />
                    1. Node.js <br />
                    2. MongoDB <br />
                    3. Firebase <br />
                    4. Daisy-UI
                  </p>
                  <p>
                    {" "}
                    <span className="text-md font-bold">Tools</span> <br />
                    1. GitHub <br />
                    2. VS Code <br />
                    3. Figma <br />
                    4. Chrome Dev Tools <br />
                    5. Heroku <br />
                    6. Netlify
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center mb-10">
            <div className="card w-full md:w-2/4 lg:w-2/5 bg-gradient-to-r from-purple-500 to-pink-500 text-primary-content">
              <div className="card-body">
                <h2 className="card-title">Projects</h2>
                <div className="grid grid-cols-1">
                  <p>
                    <Link
                      className="btn-link btn-active text-white"
                      to="https://hikehill-web.web.app/"
                    >
                      HikeHill (Hiking Gears)
                    </Link>{" "}
                    <br />
                    <Link
                      className="btn-link btn-active text-white"
                      to="https://travelsphere-18293.web.app/"
                    >
                      TravelSphere (Travel Agency)
                    </Link>{" "}
                    <br />
                    <br />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
