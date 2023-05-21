import React, { useEffect, useState } from "react";
import { styles } from "../../constant";
import { BASE_URL } from "../../services/BaseUrl";
import { Link } from "react-router-dom";
// import axios from "axios";
const Main = () => {
  const [mainProduct, setMainProduct] = useState([]);

  useEffect(() => {
    fetch(BASE_URL + "/posts")
      .then((res) => res.json())
      .then((data) => {
       
        setMainProduct(data);
      });
  }, []);

  return (
    <div className="bg pt-10 md:pt-96">
      {mainProduct.slice(0,1).map((item, id) => (
        <div
          key={id}
          className={`flex flex-col text-center md:flex-row  items-center justify-evenly bg-2 pb-20  ${styles.paddingX} `}
        >
          <img
            src="https://oleoapi.itlink.uz/media/product_images/%D1%81%D0%BF%D0%BE%D1%80%D0%BF%D0%B3%D0%B4%D1%80%D0%BE%D0%B4_4.png.600x600_q85.png"
            width="500"
            height="482"
            decoding="async"
            data-nimg="1"
            loading="lazy"
            alt="OLEO-MEHR BILAN DASTURXONINGIZGA"
          />

          <div className="  max-w-md flex flex-col justify-center mt-6">
            <li className=" mb-2 list-none font-mulish font-extrabold text-colorRed text-[20px] md:text-[36px]">
              {item.title}
            </li>
            <p className=" font-mulish font-normal text-colorRed text-[16px]  ">
              {item.subtitle}
            </p>

            <div className=" mt-8 flex flex-col md:flex md:flex-row gap-4 ">
              <Link to={"/products/" + item.id}>
                <button className=" w-full bg-colorRed text-colorWhite font-mulish font-bold text-[16px] xs:text-[18px] py-2 px-10 xs:py-4 rounded-full hover:bg-colorWhite hover:text-colorRed transition-all ease-in delay-150 radius">
                  Batafsil o'qish
                </button>
              </Link>
              <button
                className=" bg-colorYellow text-colorRed font-mulish font-bold text-[16px] xs:text-[18px]  py-2 xs:py-4 px-10 rounded-full hover:bg-colorRed hover:text-colorWhite transition-all ease-in delay-150 radui"
                data-te-toggle="modal"
                data-te-target="#exampleModalCenteredScrollable"
                data-te-ripple-init
                data-te-ripple-color="light"
              >
                Aloqa
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Main;
