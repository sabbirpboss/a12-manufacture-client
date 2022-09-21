import React from "react";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
  const { _id, name, img, description, minOrder, stock, unitPrice } = product;
  return (
    <div className="card w-80 bg-base-100 shadow-xl text-white bg-gradient-to-r from-accent to-[#2b0a37]">
      <figure>
        <img src={img} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <h4 className="text-sm font-bold">Unit Price: ${unitPrice}</h4>
        <p className="text-xs font-bold">Stock: {stock}</p>
        <p className="text-xs font-bold">Minimum Order: {minOrder}</p>
        <p>{description}</p>
        <div className="card-actions justify-end mt-3">
          <Link to={`/purchase/${_id}`} className="btn btn-accent">
            Order Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Product;
