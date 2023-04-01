import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { styles } from "../../constant";
import { BASE_URL } from "../../services/BaseUrl";

import down from "../../images/drop.svg";

const LearnMore = () => {
  
  const [learn, setLearn] = useState([]);
  useEffect(() => {
    fetch(BASE_URL + "/posts")
      .then((res) => res.json())
      .then((data) => {
      
        setLearn(data);
      });
  }, []);

  return <div className="">
    <div className={`flex bg-colorYellow mt-5 items-center py-10 justify-evenly ${styles.paddingX}`}>
    <div className="flex items-center gap-10">
    <h3 className="font-mulish text-colorRed text-[24px] font-bold">Barcha mahsulotlarimiz</h3>
    <p className="font-mulish text-colorRed ">(Jami {learn.length}ta)</p>
    </div>

    <div className="bg-colorWhite border-colorRed radui rounded-xl py-1 pl-4 flex gap-3 w-60 mt-3">
            <img src={down} alt="" />
            <button className=" cursor-pointer text-colorRed font-bold text-[16px]">
              Katalogni yuklab olish
            </button>
          </div>
    </div>


    <br />
    <br />
    <div className={`mt-10 gap-10 flex  items-center justify-evenly ${styles.paddingX2} flex-wrap`}>
 
   {learn.map((learn)=>(
    <div key={learn.id} className="">

    <Link to={'/learn-product/' + learn.id}>
    <div className="cursor-pointer  bg-colorYellow h-48 rounded-md py-2 cardd flex items-center flex-col">
        <p className="font-mulish text-colorRed text-[16px]">Oleo mahsuloti</p>
     
        <img className="imgs"  src={learn.avatar} alt="" />

        <div className="">
        <h3 className="font-mulish text-colorRed text-[20px] font-bold">{learn.name}</h3>
        <p className="font-mulish text-colorRed text-[16px]">{learn.subtitle}</p>
        </div>
    </div>
    </Link>
    </div>
   ))}
  </div>;
  </div> 
};

export default LearnMore;
