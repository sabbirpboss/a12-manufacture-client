import React from "react";
import { Helmet } from "react-helmet-async";
import { toast } from "react-toastify";
import useProducts from "../Hooks/useProducts";
import Loading from "../Shared/Loading";
import Product from "./Product";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";

const Products = () => {
  const [products, isLoading, error] = useProducts();

  if (isLoading) {
    return <Loading />;
  }
  if (error) {
    toast.error(error.massage);
  }

  return (
    <>
      <Helmet>
        <title>Products - Frineds Moto Ltd</title>
      </Helmet>
      <h3 className="text-2xl text-center font-bold my-8">
        <span className=" border-b-2 border-accent">All Your Needs</span>
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-10 pl-6 text-white">
        {products?.map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </div>
      <div className="btn-group flex justify-center items-center my-6 bg-accent w-max mx-auto rounded">
        <button className="btn bg-accent border-0 text-white">
          <FaAngleLeft /> Previous
        </button>
        ||
        <button className="btn bg-accent border-0 text-white">
          Next <FaAngleRight />{" "}
        </button>
      </div>
    </>
  );
};

export default Products;
