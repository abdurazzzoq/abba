import React, { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "./styles.css";

// import required modules
import { Autoplay, FreeMode } from "swiper";
import { styles } from "../../constant";
import { Link } from "react-router-dom";


export default function ReceptSlider() {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => {
        
        setProduct(data);
      })
      
  }, []);
  return (
    <div
      className={`${styles.paddingX}  bg-colorYellow flex justify-between mt-20 py-20`}
    >
      <div className=" max-w-md">
        <h3 className="font-mulish text-[20px] text-colorRed font-bold">
          “Oleo” Pishiriqlar
        </h3>
        <p className="font-mulish text-colorRed">
          Oleo margarin va saryog’laridan tayyorlangan psihiriqlarimiz. Bizning
          Margarinlarimizdan tayyorlangan narsalarni retseptini koring
        </p>
      </div>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        modules={[FreeMode, Autoplay]}
        className="mySwiper"
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          480: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
      >
        {product.map((item) => (
          <div key={item.id}>
            <div className="">
              <SwiperSlide key={item.id}>
                <div className="bg-colorRed slider h-full pb-11 w-full rounded-xl flex items-center flex-col">
                  <img
                    className="rounded-xl  h-52 w-full"
                    src={item.image}
                    alt=""
                  />
                  <h3 className="text-colorWhite font-bold tex-[20px]">
                    {item.title}
                  </h3>

                  <Link to={"/single-slider/" + item.id}>
                    <button className=" mt-5 bg-colorWhite text-colorRed font-semibold rounded-lg py-1 px-3">
                      Retsepni ko'rish
                    </button>
                  </Link>
                </div>
              </SwiperSlide>
            </div>
          </div>
        ))}
      </Swiper>
    </div>
  );
}
