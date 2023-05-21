import React, { useState } from "react";
import logo from '../../images/logo (9).svg'
import menuBtn from "../../images/menu.svg";
import logoRes from "../../images/logoRes (1).svg";
import close from "../../images/close.svg";
import { styles } from "../../constant/index";
import { navLinks } from "../../constant/constants";
import tel from "../../images/tel (1).svg";
import { Link } from "react-router-dom";

const Header = () => {
  const [toggle, setToggle] = useState(false);

  const toggleHandler = () => {
    setToggle((prev) => !prev);
  };
  return (
    <div
      className={`${styles.paddingX} w-full py-2 bg-[#FFD353] line ${
        toggle ? "bg-colorRed" : "bg-colorYellow"
      } ${styles.flexBetween}`}
    >
     <Link to={'/'}>
      <div className=" flex sm:flex  justify-center ">
        <img className="md:mr-10 hidden sm:block" src={logo} alt="" />
      </div>
      </Link>

      <ul className="list-none sm:flex hidden justify-start items-center  flex-1 gap-3">
         
         <Link to={'/'}>
          <li
           
           className={`cursor-pointer hover:text-colorWhite transition-all duration-500 text-[16px] 
           font-mulish ${styles.colorRed}`}
         >
         Asosiy
         </li>
         </Link>


<Link to={'/about-page'}>
         <li
           
           className={`cursor-pointer hover:text-colorWhite transition-all duration-500 text-[16px] 
           font-mulish ${styles.colorRed}`}
         >
         Biz haqimizda
         </li>
         </Link>


         <Link to={'/learn-more'}>
         <li
           
           className={`cursor-pointer hover:text-colorWhite transition-all duration-500 text-[16px] 
           font-mulish ${styles.colorRed}`}
         >
         Mahsulotlar
         </li>
         </Link>

         <li
           
           className={`cursor-pointer hover:text-colorWhite transition-all duration-500 text-[16px] 
           font-mulish ${styles.colorRed}`}
         >
         Yangiliklar
         </li>

         <li
           
           className={`cursor-pointer hover:text-colorWhite transition-all duration-500 text-[16px] 
           font-mulish ${styles.colorRed}`}
         >
         Hamkorlik
         </li>



      </ul>

      <select className=" hidden sm:block outline-none border-r-colorRed py-1 px-2  text-colorRed rounded-full">
        <option className="bg-colorellow" value="uz">
          Uz
        </option>
        <option className="bg-colorellow" value="ru">
          Ru
        </option>
        <option className="bg-colorellow" value="eng">
          Eng
        </option>
      </select>

      <a
        className=" hidden sm:block text-colorRed rounded-full selectoinn py-1 px-3 ml-2"
        href="tel:+998 90-045-35-35"
      >
        +998 90-045-35-35
      </a>






      <div className="sm:hidden flex flex-1 justify-start items-center">
        <img
          src={toggle ? close : menuBtn}
          className="object-contain"
          onClick={toggleHandler}
          alt=""
        />
        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } w-full absolute top-16 right-0 left-0 p-6 bg-colorRed sidebar`}
        >
          <ul className="list-none flex gap-4 justify-start items-start  flex-1 flex-col">
            
            



          <Link to={'/'}>
          <li
           
           className='cursor-pointer hover:text-colorWhite transition-all duration-500 text-[16px] 
            font-mulish text-colorWhite'
         >
         Asosiy
         </li>
         </Link>


<Link to={'/about-page'}>
         <li
           
           className='cursor-pointer hover:text-colorWhite transition-all duration-500 text-[16px] 
            font-mulish text-colorWhite'
         >
         Biz haqimizda
         </li>
         </Link>


         <Link to={'/learn-more'}>
         <li
           
           className='cursor-pointer hover:text-colorWhite transition-all duration-500 text-[16px] 
            font-mulish text-colorWhite'
         >
         Mahsulotlar
         </li>
         </Link>

         <li
           
           className='cursor-pointer hover:text-colorWhite transition-all duration-500 text-[16px] 
            font-mulish text-colorWhite'
         >
         Yangiliklar
         </li>

         <li
           
           className='cursor-pointer hover:text-colorWhite transition-all duration-500 text-[16px] 
            font-mulish text-colorWhite'
         >
         Hamkorlik
         </li>







            <div className="">
              <button className="  selection text-colorWhite hover:bg-colorWhite hover:text-colorRed px-3 py-1 rounded-full outline-none ">
                Uz
              </button>
              <button className=" ml-4 selection text-colorWhite hover:bg-colorWhite hover:text-colorRed px-3 py-1 rounded-full outline-none ">
                Ru
              </button>
              <button className=" ml-4 selection text-colorWhite hover:bg-colorWhite hover:text-colorRed px-3 py-1 rounded-full outline-none ">
                Eng
              </button>

              <a
        className=" text-colorWhite rounded-full selectoinn py-1 px-3 ml-2"
        href="tel:+998 90-045-35-35"
      >
        +998 90-045-35-35
      </a>            
            </div>
          </ul>
        </div>
      </div>


      <div className="sm:hidden block center">
        <img className=" centered" src={logoRes} alt="" />
      </div>

      
    


    </div>
  );
};

export default Header;
