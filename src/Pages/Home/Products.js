import React from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import useProducts from "../Hooks/useProducts";
import Loading from "../Shared/Loading";
import { BsArrowRightCircleFill } from "react-icons/bs";

const Products = () => {
  const [products, isLoading, error] = useProducts();

  if (isLoading) {
    return <Loading />;
  }
  if (error) {
    toast.error(error.massage);
  }

  return (
    <div className="container mx-auto my-16">
      <h3 className="text-2xl text-center font-bold my-4">
        <span className=" border-b-2 border-accent">Featured Products</span>
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-10 pl-6 text-white">
        {products
          ?.slice(0, 6)
          ?.map(
            ({ _id, name, img, description, minOrder, stock, unitPrice }) => (
              <div key={_id} className="card w-80 bg-base-100 shadow-xl bg-gradient-to-r from-accent to-[#2b0a37]">
                <figure>
                  <img src={img} alt="car" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title ">{name}</h2>
                  <h4 className="text-sm font-bold">
                    Unit Price: ${unitPrice}
                  </h4>
                  <p className="text-xs font-bold ">Stock: {stock}</p>
                  <p className="text-xs font-bold">Minimum Order: {minOrder}</p>
                  <p>{description}</p>
                  <div className="card-actions justify-end mt-3">
                    <Link to={`/purchase/${_id}`} className="btn btn-accent">
                      Order Now
                    </Link>
                  </div>
                </div>
              </div>
            )
          )}
      </div>
      <Link
        className="flex justify-center items-center text-xl text-accent font-bold mb-6"
        to="/products"
      >
        <BsArrowRightCircleFill className="mr-3" /> See All
      </Link>
    </div>
  );
};

export default Products;
