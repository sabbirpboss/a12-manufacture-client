import React, { useEffect, useState } from "react";
import Part from "./Part/Part";

const Parts = () => {
  const [parts, setParts] = useState();

  useEffect(() => {
    fetch("Parts.json")
      .then((res) => res.json())
      .then((data) => setParts(data));
  }, []);
  return (
    <div>
      <div className="text-center">
        <h4 className="text-primary text-xl">Popular Products</h4>
        <h2 className=" text-4xl">
          We have the best quality industrial products.
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-ols-3 xl:grid-cols-3 gap-5 justify-items-center">
        {parts?.map((part) => (
          <Part key={part._id} part={part}></Part>
        ))}
      </div>
    </div>
  );
};

export default Parts;
