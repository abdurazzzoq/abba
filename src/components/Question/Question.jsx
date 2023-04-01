import React from "react";
import logo from "../../images/logo (9).svg";
import { styles } from "../../constant";
const Question = () => {
  return (
    <div className={`question flex justify-end py-28 ${styles.paddingX}`}>
      <form
        className="bg-colorRed py-4 px-3 rounded-xl max-w-xl flex flex-col"
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
    </div>
  );
};

export default Question;
