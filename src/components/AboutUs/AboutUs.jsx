import React from "react";
import { Link } from "react-router-dom";
import { styles } from "../../constant";
import btn from "../../images/btn.svg";
import down from "../../images/drop.svg";
import logo from "../../images/logo (9).svg";

const AboutUs = () => {
  return (
    <div className="">
      <div className={`bg-image pt-[292px] px pb-[344px] ${styles.paddingX3}`}>
        <h3 className="font-mulish font-bold text-colorRed text-[37px] sms:text-[24px] text-end sms:text-start">
          Biz haqimizda
        </h3>

        <div className="hidden sms:block">
          <p className=" font-mulish font-normal text-colorRed max-w-[641px]">
            “BARAKA FOOD” MChJ 2012-yilda tashkil etilgan bo‘lib, OLEO savdo
            belgisi ostida sariyog‘, sabzavot-qaymoq yormalari va margarinlar
            ishlab chiqarish bilan shug‘ullanadi. Mahsulotlarimizning keng
            assortimenti
          </p>

          <div className=" flex flex-col xs:flex-row xs:gap-3 ">
          <Link to={'/about-page'}>
            <div className="bg-colorRed rounded-xl py-1 pl-4 flex gap-3 w-60 mt-3">
              <img src={btn} alt="" />
              
              <button className=" text-colorWhite font-bold text-[18px]">
                Batafsil ko`rish
              </button>
            </div>
              </Link>

            <div className="bg-colorWhite rounded-xl py-1 pl-4 flex gap-3 w-60 mt-3">
              <img src={down} alt="" />
              <button className="  text-colorRed font-bold text-[16px]">
                Katalogni yuklab olish
              </button>
            </div>
          </div>
        </div>

        {/* hidden */}
      </div>
      <div className=" bg-colorYellow block sms:hidden">
        <div className="flex items-center">
          <img src={logo} alt="" />
          <h3 className="font-mulish font-bold text-colorRed text-[24px] ">
            OOO 'OLEO BARAKA'
          </h3>
        </div>

        <p className=" font-mulish font-normal text-colorRed max-w-[641px]">
          “BARAKA FOOD” MChJ 2012-yilda tashkil etilgan bo‘lib, OLEO savdo
          belgisi ostida sariyog‘, sabzavot-qaymoq yormalari va margarinlar
          ishlab chiqarish bilan shug‘ullanadi. Mahsulotlarimizning keng
          assortimenti
        </p>

        <div className=" flex flex-col xs:flex-row xs:gap-3 ">
        
            <Link to={'/about-page'}>
          <div className="bg-colorRed rounded-xl py-1 pl-4 flex gap-3 w-60 mt-3">
            <img src={btn} alt="" />
            <button className=" text-colorWhite font-bold text-[18px]">
              Batafsil ko`rish
            </button>
          </div>
            </Link>
        
         
          <div className="bg-colorWhite rounded-xl py-1 pl-4 flex gap-3 w-60 mt-3">
            <img src={down} alt="" />
       
            <button className="  text-colorRed font-bold text-[16px]">
              Katalogni yuklab olish
            </button>
         
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
