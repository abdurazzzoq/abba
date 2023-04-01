import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./styles.css";
import "swiper/css/free-mode";

// import img
import btn from "../../images/btn.svg";
import down from "../../images/drop.svg";

// import required modules
import { Autoplay, Pagination } from "swiper";
import { BASE_URL } from "../../services/BaseUrl";
import { styles } from "../../constant";
import { Link } from "react-router-dom";

export default function Slider() {
  const [item, setItem] = useState([]);
  useEffect(() => {
    fetch(BASE_URL + "/posts")
      .then((res) => res.json())
      .then((data) => {
        
        setItem(data);
      });
  }, []);

  return (
    <div className={`${styles.paddingX2} `}>
      <Swiper
        slidesPerView={4}
        freeMode={true}
        spaceBetween={30}
        autoplay={{ delay: 2500 }}
        modules={[Autoplay, FreeMode]}
        className="mySwiper "
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          480: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
        }}
      >
        {item.map((product) => (
          <div className="" key={product.id}>
            <SwiperSlide key={product.id}>
              <Link to={"/product/" + product.id}>
                <div className=" height card  h-60 xm:h-96 mt-5 rounded-2xl flex items-center flex-col bg-colorYellow hover:bg-colorRed ">
                  <img className="" src={product.avatar} alt="" />

                  <div className="flex items-center flex-col px-2">
                    <h3 className="text-colorWhite max-w-xs font-mulish text-[16px] sm:text-[20px] font-extrabold">
                      {product.name}
                    </h3>
                    <p className="hidden xm:block mt-5 lg:mt-16 margin pb-3 text-colorWhite cards-par font-mulish text-[16px] font-normal">
                      {product.subtitle}
                    </p>
                    <button className="block items-baseline xm:hidden text-colorRed bg-colorWhite rounded-md py-1 px-10 font-semibold">
                      Batafsil o`qish
                    </button>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          </div>
        ))}
        <div className=" px-3 md:px-32 flex flex-col xs:flex-row xs:gap-3 ">

          <Link to={'/learn-more'}>
            <div className="bg-colorRed rounded-xl py-1 pl-4 flex gap-3 w-60 mt-3">
              <img src={btn} alt="" />
              <button className=" text-colorWhite font-bold text-[18px]">
                Batafsil ko`rish
              </button>
            </div>
          </Link>

          <div className="bg-colorWhite border-colorRed radui rounded-xl py-1 pl-4 flex gap-3 w-60 mt-3">
            <img src={down} alt="" />
          
            <button className="  text-colorRed font-bold text-[16px]">
              Katalogni yuklab olish
            </button>
          
          </div>
        </div>
      </Swiper>
    </div>
  );
}
