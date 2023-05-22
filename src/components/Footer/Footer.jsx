import { styles } from "../../constant";
import logo from "../../images/logo (9).svg";
import facebook from "../../images/facebook (2).svg";
import telegram from "../../images/telegram (1).png";
import instagram from "../../images/instagram (2).svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-colorRed  p-10">
      <div className="flex justify-around footer items-center ">
        <div className="flex flex-col">
          <div
            className=' flex items-center footer-part gap-2 py-4 pl-3 pr-3 rounded-xl shadow  mb-24'
          >
            <img src={logo} alt="" />
            <p className="font-mulish font-normal  w-60 xm:w-96 text-[14px] xm:text-[18px] text-colorWhite">
              ООО «BARAKA FOOD» - компания-производитель масложировой продукции,
              одна из крупнейших в Узбекистане
            </p>
          </div>





          <div className=" footer-part footer-contact flex gap-2">
            <ul className="rounded-xl footer-part shadow w-72 pb-24 pt-7 pr-14 pl-10 py-3 ">
              <li className=" font-mulish text-[20px] text-colorWhite font-bold">
                Oleo kompaniyasi
              </li>
              <Link to={"/"}>
                <li className=" opacity-40 hover:opacity-90 text-colorWhite cursor-pointer">
                  Asosiy
                </li>
              </Link>
              <Link>
                <li className=" opacity-40 hover:opacity-90 text-colorWhite cursor-pointer">
                  Biz haqimizda
                </li>
              </Link>

              <li className=" opacity-40 hover:opacity-90 text-colorWhite cursor-pointer">
                Mahsulotlar
              </li>

              <li className=" opacity-40 hover:opacity-90 text-colorWhite cursor-pointer">
                Yangiliklar
              </li>

              <li className=" opacity-40 hover:opacity-90 text-colorWhite cursor-pointer">
                Hamkorlik
              </li>
            </ul>

            <ul className=" footer-part rounded-xl shadow w-72 pb-12 pt-7 pr-14 pl-12  flex flex-col py-3 ">
              <li className=" font-mulish text-[20px] text-colorWhite font-bold">
                Aloqa
              </li>
              <a
                href="tel:+998995595353"
                className=" opacity-40 hover:opacity-90 text-colorWhite cursor-pointer"
              >
                +998995595353
              </a>
              <a
                href="tel:+998946776769"
                className=" opacity-40 hover:opacity-90 text-colorWhite cursor-pointer"
              >
                +998946776769
              </a>
              <a className=" opacity-40 hover:opacity-90 text-colorWhite cursor-pointer">
                {" "}
                info@oleobutter.uz
              </a>

              <a className=" opacity-40 hover:opacity-90 text-colorWhite cursor-pointer">
                info@oleomargarin.uz
              </a>

              <a
                href="https://www.google.com/maps/place/%D0%94%D0%B5%D0%BB%D1%8C%D1%84%D0%B8%D0%BD/@42.8674796,74.5708881,16z/data=!4m6!3m5!1s0x389ec839a171340f:0x13f9cd1ba646e9b0!8m2!3d42.8677778!4d74.5738889!16s%2Fg%2F1w6r6ndf?hl=ru-KG"
                className=" opacity-40 hover:opacity-90 text-colorWhite cursor-pointer"
              >
                Toshkent shahar
                <br /> Uchtepa tumani 12 uy
              </a>
            </ul>
          </div>


        </div>

        <div className="flex flex-col items-start gap-5">
          <a
            className="rounded-full shadow p-3"
            href="https://www.facebook.com/people/Oleo_uz/100063610506878/"
          >
            <img src={facebook} alt="" />
          </a>

          <a
            className="rounded-full shadow pt-4 pb-3 px-4"
            href="https://t.me/oleoproject"
          >
            <img width={24} height={24} src={telegram} alt="" />
          </a>

          <a
            className="rounded-full shadow p-3"
            href="https://www.instagram.com/oleo_uzb/"
          >
            <img src={instagram} alt="" />
          </a>

          <a
            className="rounded-xl shadow pt-4 px-3 text-colorWhite"
            href="tel:+998 99 011 89 34"
          >
            +998 99 011 89 34
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
