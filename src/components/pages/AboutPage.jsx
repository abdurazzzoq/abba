import React from "react";
import ReactPlayer from "react-player";
import { styles } from "../../constant";
import Package from "../../images/package.svg";
import group from "../../images/image 81.png";
import facebook from "../../images/facebook (2).svg";
import telegram from "../../images/telegram (1).png";
import instagram from "../../images/instagram (2).svg";
import boy from '../../images/boy.png'
import logo from "../../images/logo (9).svg";

const AboutPage = () => {
  return (
    <div className={`${styles.paddingX2} mt-16`}>
      <div className="flex col justify-between mt-16">
        <div className="">
          <h3 className="font-mulish text-colorRed font-bold text-[24px]">
            “OLEO” MCHJ korxonasi haqida
          </h3>
          <p className="font-mulish text-colorRed max-w-2xl pt-11">
            “BARAKA FOOD” MChJ 2012-yilda tashkil etilgan bo‘lib, OLEO savdo
            belgisi ostida sariyog‘, sabzavot-qaymoq yormalari va margarinlar
            ishlab chiqarish bilan shug‘ullanadi. Mahsulotlarimizning keng
            assortimenti
          </p>
        </div>
        <div className=" bg-colorRed">
          <ReactPlayer
            width={322}
            height={220}
            controls
            url="ttps://youtube.com/embed/JKUw8A0FHmY?feature=share"
          />
        </div>
      </div>

      <div className="flex  items-center better-card justify-between gap-4 mx-auto mt-20">
        <div className="bg-colorRed  rounded-3xl h pt-[51px]">
          <img src={Package} alt="" className="mx-auto" />
          <div className="flex flex-col items-center">
            <h3 className="font-mulish text-[18px] text-colorWhite font-semibold">
              Hamyonbop
            </h3>
            <p className="font-mulish text-[14px] pt-[30px] px-3 pb-5 text-colorWhite">
              Margarin va sariyog 'mahsulotlari boshqa turdagi spreylar va
              yog'larga qaraganda ancha tejamkor variant bo'lishi mumkin. Ular
              ko'pincha boshqa turdagi yog'larga qaraganda uzoqroq saqlash
              muddatiga ega, ya'ni siz ommaviy ravishda sotib olishingiz va uzoq
              muddatda pulni tejashingiz mumkin. Ular, shuningdek,
              retseptlarning keng assortimentida ishlatilishi mumkin, bu ularni
              ko'p qirrali va byudjetli tanlovga aylantiradi
            </p>
          </div>
        </div>

        <div className="bg-colorRed rounded-3xl h pt-[51px]  ">
          <img src={Package} alt="" className="mx-auto" />
          <div className="flex flex-col items-center">
            <h3 className="font-mulish text-[18px] text-colorWhite font-semibold">
              Ekologik barqarorlik
            </h3>
            <p className="font-mulish text-[14px] pt-[30px] px-3 pb-5 text-colorWhite">
              Margarin va ba'zi sariyog 'mahsulotlari an'anaviy sariyog'ga
              qaraganda ancha barqaror variant bo'lishi mumkin. Ko'pgina
              margarin mahsulotlari o'simlik moylaridan tayyorlanadi, ular sut
              mahsulotlariga qaraganda kamroq er va resurslarni talab qiladi.
              Bundan tashqari, ba'zi kompaniyalar ishlab chiqarish jarayonida
              qayta tiklanadigan energiya manbalaridan foydalanish va
              chiqindilarni kamaytirish kabi barqaror amaliyotlarni joriy
              qildilar.
            </p>
          </div>
        </div>

        <div className="bg-colorRed rounded-3xl h pt-[51px] ">
          <img src={Package} alt="" className="mx-auto" />
          <div className="flex flex-col items-center">
            <h3 className="font-mulish text-[18px] text-colorWhite font-semibold">
              Universallik
            </h3>
            <p className="font-mulish text-[14px] pt-[30px] px-3 pb-5 text-colorWhite ">
              Margarin va sariyog 'mahsulotlarining yana bir afzalligi -
              oshxonada ko'p qirrali. Ushbu mahsulotlar pishirish va
              pishirishdan tortib tost yoki nonga yoyishgacha bo'lgan turli xil
              ilovalar uchun ishlatilishi mumkin. Ular, shuningdek, turli xil
              usullar bilan ta'mlanishi mumkin, bu ularni yangi retseptlar va
              oshpazlik ijodlari bilan tajriba qilish uchun ajoyib imkoniyatga
              aylantiradi.
            </p>
          </div>
        </div>

        <div className="bg-colorRed rounded-3xl h pt-[51px] ">
          <img src={Package} alt="" className="mx-auto" />
          <div className="flex flex-col items-center">
            <h3 className="font-mulish text-[18px] text-colorWhite font-semibold">
              Sog'liq uchun foydali
            </h3>
            <p className="font-mulish text-[14px] pt-[30px] px-3 pb-5 text-colorWhite">
              Margarin va ba'zi sariyog 'mahsulotlarining asosiy afzalliklaridan
              biri shundaki, ular an'anaviy sariyog'ga sog'lom muqobil bo'lishi
              mumkin. O'simlik moylarining to'g'ri kombinatsiyasi bilan margarin
              xolesterin darajasini yaxshilashga va yurak sog'lig'ini
              yaxshilashga yordam beradigan sog'lom yog'lar va omega-3 pb-5 yog'
              kislotalari manbai bo'lishi mumkin.
            </p>
          </div>
        </div>
      </div>

      <div className="flex group justify-between mt-20">
        <img className="group-img" src={group} alt="" />

        <div className=" bg-colorWhite shadow-md max  ">
          <h2 className="font-mulish text-[24px] font-bold text-colorRed">
            Bizning jamoamiz
          </h2>
          <p className="font-mulish text-colorRed">
            Bizning jamoamiz margarin mahsulotimiz sifatini ta'minlashda muhim
            rol o'ynaydi. Yuqori sifatli ingredientlarni sotib olishdan tortib,
            qat'iy sifat tekshiruvlarini o'tkazishgacha, ular mijozlarimizga
            ta'm va ovqatlanishning eng yuqori standartlariga javob beradigan
            mahsulotni taqdim etishga bor diqqat e'tibori bilan xarakat
            qilishadi..
          </p>
          <div className="flex justify-between">
            <div className="flex gap-5">
              <a
                className="rounded-full bg-colorRed  shadow p-3"
                href="https://www.facebook.com/people/Oleo_uz/100063610506878/"
              >
                <img src={facebook} alt="" />
              </a>

              <a
                className="rounded-full bg-colorRed shadow pt-4 px-4"
                href="https://t.me/oleoproject"
              >
                <img width={24} height={24} src={telegram} alt="" />
              </a>

              <a
                className="rounded-full bg-colorRed shadow p-3"
                href="https://www.instagram.com/oleo_uzb/"
              >
                <img src={instagram} alt="" />
              </a>

              <a
                className="rounded-xl bg-colorRed shadow pt-4 px-3 text-colorWhite"
                href="tel:+998 99 011 89 34"
              >
                +998 99 011 89 34
              </a>
            </div>
          </div>
        </div>
      </div>



      <div className={`${styles.paddingX2} mt-20`}>
        <h2 className="font-mulish text-colorRed font-bold text-[24px]">Kompaniyamiz ishlab chiqarishi sonlarda</h2>
        <div className="flex wrap gap-1">
          
        <div className="bg-colorRed better-result p-4 rounded-2xl  max-h-80 max-w-xs">
          <h3 className="font-mulish text-colorWhite h-12 text-[18px]">Biz bilan oson bog’laning va hamkorlikni boshlang</h3>
          <h3 className="font-mulish text-colorWhite pt-32 font-extrabold text-[65px]">500+</h3>
        </div>

        <div className="bg-colorRed better-result p-4 rounded-2xl max-h-80 max-w-xs w-80">
          <h3 className="font-mulish text-colorWhite h-12 text-[18px]">Yillik ishlab chiqarish soni</h3>
          <h3 className="font-mulish text-colorWhite pt-32 font-extrabold text-[65px]">500+</h3>
        </ div>


        <div className="bg-colorRed better-result p-4 rounded-2xl max-h-80 max-w-xs">
          <h3 className="font-mulish text-colorWhite h-12 text-[18px]">Qisqa vaqt ichida yetkazib beramiz. Kutib qolmaysiz</h3>
          <h3 className="font-mulish text-colorWhite pt-32 font-extrabold text-[65px]">3K+</h3>
        </div>
        <div className="bg-colorRed better-result p-4 rounded-2xl max-h-80 max-w-xs">
          <h3 className="font-mulish text-colorWhite h-12 text-[18px]">Katta buyurtmalarni ham o'z vaqtida yetkazib bera olamiz</h3>
          <h3 className="font-mulish text-colorWhite pt-32 font-extrabold text-[65px]">50+</h3>
        </div>
      </div>
      </div>





{/* form */}
      <div className="flex items-center justify-between mt-16">

      <form
        className="bg-colorRed width max-w-xl  h-full py-4 px-3 rounded-xl  flex flex-col"
        action=""
      >
        <div className="flex items-center justify-between gap-3">
          <img src={logo} alt="" />

          <div className="">
            <h3 className="font-mulish text-[20px] text-colorWhite font-bold">
              Taklif va savollar uchun
            </h3>
            <p className="font-mulish text-colorWhite">
              Bizning operatorlarimiz siz bilan 24 soat ichida siz bilan
              bog’lanishadi
            </p>
          </div>
        </div>

        <input
          className="input text-colorRed outline-none bg-colorYellow mt-5 rounded-xl py-6 px-4"
          placeholder="Ism familiyangiz"
          type="text"
        />
        <input
          className="input text-colorRed outline-none bg-colorYellow mt-5 rounded-xl py-6 px-4"
          placeholder="Telefon raqamingiz"
          type="number"
        />
        <input
          className="input text-colorRed outline-none bg-colorYellow mt-5 rounded-xl py-6 px-4"
          placeholder="Habaringizni yozib qoldiring..."
          type="text"
        />
        <button
          className="mt-5 py-4 px-3 bg-colorWhite text-colorRed font-mulish text-[20px] font-bold rounded-xl"
          type="submit"
        >
          Ma'lumotlarni yuborish
        </button>
      </form>


        <div className="">
          <img className="hidden md:block" src={boy} alt="" />
        </div>

      </div>

    </div>
  );
};

export default AboutPage;
