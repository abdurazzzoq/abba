import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { styles } from "../../constant";
import { BASE_URL } from "../../services/BaseUrl";


const Single = () => {
  const { id } = useParams();
  const [single, setSingle] = useState({});
  useEffect(() => {
    const getData = async () => {
      const res = await fetch(BASE_URL + "/posts/" + id);
      const data = await res.json();

      setSingle(data);
      
    };
    
    getData();

  }, []);

  return (
    <div className={`bg-colorYellow ${styles.paddingX} py-2`}>
      <div className="flex justify-between sm items-center">
        <img src={single.avatar} alt="" />


        <div className="max-w-xl w-full">
<div className="">
          <h3 className="font-mulish text-[24px] text-colorRed font-bold">{single.name}</h3>
          <p className="font-mulish text-[16px] text-colorRed font-medium">{single.subtitle}</p>
</div>
<br />

<div className="">
          <h3 className="font-mulish text-[18px] text-colorRed font-bold">Tarkibi:</h3>
          <p className=" max-w-xl font-mulish text-[16px] text-colorRed font-medium">{single.description}</p>

</div>
<br />
<div className="">
          <h3 className="font-mulish text-[18px] text-colorRed font-bold">Yaroqlik muddati:</h3>
          <p className="font-mulish text-[16px] text-colorRed font-medium">{single.bb_date}</p>
</div>
        </div>

      </div>


    </div>
  );
};

export default Single;
