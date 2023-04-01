import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { BASE_URL } from '../../services/BaseUrl'
import { styles } from '../../constant'

const MainSingle = () => {
    const [item, setItem]=useState([])
    const{id}=useParams()
    useEffect(() => {
        fetch(BASE_URL + "/post/"+id)
          .then((res) => res.json())
          .then((data) => {
         
            setItem(data);
          });
      }, []);
  return (
    <div className={`${styles.paddingX2} bg-colorYellow main-single-card flex items-center justify-between mt-10`}>
        <img
            src="https://oleoapi.itlink.uz/media/product_images/%D1%81%D0%BF%D0%BE%D1%80%D0%BF%D0%B3%D0%B4%D1%80%D0%BE%D0%B4_4.png.600x600_q85.png"
            width="500"
            height="482"
            decoding="async"
            data-nimg="1"
            loading="lazy"
            alt="OLEO-MEHR BILAN DASTURXONINGIZGA"
          />

          <div className="">
           <h3 className="font-mulish text-colorRed font-bold text-[24px]"> {item.title}</h3>
           <p className='font-mulish text-colorRed'>{item.subtitle}</p>
          </div>
    </div>
  )
}

export default MainSingle