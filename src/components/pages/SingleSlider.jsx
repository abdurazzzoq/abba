import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BASE_URL2 } from "../../services/BaseUrl";
import { styles } from "../../constant";

const SingleSlider = () => {
  const [product, setProduct] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    const getData = async () => {
      const res = await fetch("https://fakestoreapi.com/products/" + id);
      const data = await res.json();
     
      setProduct(data);
    };

    getData();
  }, []);

  return (
    <div className={`${styles.paddingX2} slider-single-card flex justify-between mt-10`}>
      <div className=" ">
        <h3 className="font-mulish text-colorRed font-bold text-[24px]">
          {product.title}
        </h3>
        <br />

        <div className="bg-colorRed slider-padding rounded-2xl w-[100%] max-w-2xl h-96">
        <p className="font-mulish text-colorWhite ">
          {" "}
          <span className="font-mulish text-colorWhite font-bold text-[20px]">
            Description:{" "}
          </span>
          {product.description}
        </p>
        <br />
        <p className="font-mulish text-colorWhite ">
          <span className="font-mulish text-colorWhite font-bold text-[20px]">
            Category:{" "}
          </span>
          {product.category}
        </p>
        <p className="font-mulish text-colorWhite "><span className="font-mulish text-colorWhite font-bold text-[20px]">
            Price:{" "}
          </span>{product.price}$</p>
      </div>
      </div>
      <img className="slider-img" width={550} height={590} src={product.image} alt="" />
    </div>
  );
};

export default SingleSlider;
