import React from "react";
import Package from "../../images/package.svg";
import { styles } from "../../constant";

const BetterSides = () => {
  return (<div className={`${styles.paddingX2} mt-20 pb-20 pt-10 bg-colorYellow`}>
        <div className="">
            <h2 className="font-mulish text-colorRed text-[20px] font-bold">Bizning Afzalliklarimiz</h2>
        </div>
    <div className='flex  items-center better-card justify-between gap-4 mx-auto'>
      <div className="bg-colorRed  rounded-3xl h pt-[51px]">
        <img src={Package} alt="" className='mx-auto margin' />
        <div className="flex flex-col items-center">
        <h3 className="font-mulish text-[18px] text-colorWhite font-semibold">Hamyonbop</h3>
        <p className="font-mulish text-[14px]  px-3 pb-5 text-colorWhite">
          Margarin va sariyog 'mahsulotlari boshqa turdagi spreylar va yog'larga
          qaraganda ancha tejamkor variant bo'lishi mumkin. Ular ko'pincha
          boshqa turdagi yog'larga qaraganda uzoqroq saqlash muddatiga ega,
          ya'ni siz ommaviy ravishda sotib olishingiz va uzoq muddatda pulni
          tejashingiz mumkin. Ular, shuningdek, retseptlarning keng
          assortimentida ishlatilishi mumkin, bu ularni ko'p qirrali va
          byudjetli tanlovga aylantiradi
        </p>
        </div>
      </div>

      <div className="bg-colorRed rounded-3xl h pt-[51px]  ">
        <img src={Package} alt="" className='mx-auto margin' />
        <div className="flex flex-col items-center">
        <h3 className="font-mulish text-[18px] text-colorWhite font-semibold">Ekologik barqarorlik</h3>
        <p className="font-mulish text-[14px] padding px-3 pb-5 text-colorWhite">
        Margarin va ba'zi sariyog 'mahsulotlari an'anaviy sariyog'ga qaraganda ancha barqaror variant bo'lishi mumkin. Ko'pgina margarin mahsulotlari o'simlik moylaridan tayyorlanadi, ular sut mahsulotlariga qaraganda kamroq er va resurslarni talab qiladi. Bundan tashqari, ba'zi kompaniyalar ishlab chiqarish jarayonida qayta tiklanadigan energiya manbalaridan foydalanish va chiqindilarni kamaytirish kabi barqaror amaliyotlarni joriy qildilar.
        </p>
        </div>
      </div>

      <div className="bg-colorRed rounded-3xl h pt-[51px] ">
        <img src={Package} alt="" className='mx-auto margin' />
        <div className="flex flex-col items-center">
        <h3 className="font-mulish text-[18px] text-colorWhite font-semibold">
        Universallik
        </h3>
        <p className="font-mulish text-[14px] px-3 pb-5 text-colorWhite ">
        Margarin va sariyog 'mahsulotlarining yana bir afzalligi - oshxonada ko'p qirrali. Ushbu mahsulotlar pishirish va pishirishdan tortib tost yoki nonga yoyishgacha bo'lgan turli xil ilovalar uchun ishlatilishi mumkin. Ular, shuningdek, turli xil usullar bilan ta'mlanishi mumkin, bu ularni yangi retseptlar va oshpazlik ijodlari bilan tajriba qilish uchun ajoyib imkoniyatga aylantiradi.
        </p>
        </div>
      </div>

      <div className="bg-colorRed rounded-3xl h pt-[51px] ">
        <img src={Package} alt="" className='mx-auto margin' />
        <div className="flex flex-col items-center">
        <h3 className="font-mulish text-[18px] text-colorWhite font-semibold">
        Sog'liq uchun foydali
        </h3>
        <p className="font-mulish text-[14px]  px-3 pb-5 text-colorWhite">
        Margarin va ba'zi sariyog 'mahsulotlarining asosiy afzalliklaridan biri shundaki, ular an'anaviy sariyog'ga sog'lom muqobil bo'lishi mumkin. O'simlik moylarining to'g'ri kombinatsiyasi bilan margarin xolesterin darajasini yaxshilashga va yurak sog'lig'ini yaxshilashga yordam beradigan sog'lom yog'lar va omega-3 pb-5 yog' kislotalari manbai bo'lishi mumkin.
        </p>
        </div>
      </div>
    </div>






    <div className="mx-auto margin bg-colorRed  mt-20 max-w-4xl p-4 drop-shadow rounded-3xl">

        <details className="bg-colorRed rounded-2xl shadow-2xl  open:bg-amber-200 duration-300">
            <summary className="bg-inherit text-colorWhite px-5 py-3 text-lg cursor-pointer">Oleo bilan biznes hamkorlik qilish imkoniyati bormi?
</summary>
            <div className=" text-colorWhite px-5 py-3   text-[16px] font-light">
                <p>Ha albatta, Oleo barcha hamkorlik takliflarini ko'rib chiqadi.Operatorlarimiz bilan bog'laning</p>
            </div>
        </details>

        <details className="bg-colorRed rounded-2xl shadow-2xl  mt-4 open:bg-amber-200 duration-300">
            <summary className="bg-inherit text-colorWhite px-5 py-3 text-lg cursor-pointer">Yetkazib berish xizmati mavjudmi?</summary>
            <div className=" text-colorWhite px-5 py-3  text-[16px] font-light">
                <p>
Afsuski hozircha yetkazib berish xizmati mavjud emas</p>
            </div>
        </details>

        
        <details className="bg-colorRed rounded-2xl shadow-2xl  mt-4 open:bg-amber-200 duration-300">
            <summary className="bg-inherit text-colorWhite px-5 py-3 text-lg cursor-pointer">OLEOning boshqa mahsulotlardan farqi nimada?</summary>
            <div className="text-colorWhite px-5 py-3  text-[16px] font-light">
            <p>
Bizning mahsulot yevropa sifatiga to'liq javob beradigan texnologiyalar va yuqori saloxiyatga ega mutaxasislar tomonidan ishlab chiqariladi</p>
</div>
        </details>

        <details className="bg-colorRed rounded-2xl shadow-2xl  mt-4 open:bg-amber-200 duration-300">
            <summary className="bg-inherit text-colorWhite px-5 py-3 text-lg cursor-pointer">Oleodan foydalanib qanaqa pishiriqlar pishirsam bo'ladi?</summary>
            <div className="text-colorWhite px-5 py-3  text-[16px] font-light">
            <p>
Mazali pishiriqlar retseptini Saytimizning Retseptlar qismidan yoki Instagram sahifamizdan topishingiz mumkin</p>
</div>
        </details>
    </div>


    </div>
  );
};

export default BetterSides;
