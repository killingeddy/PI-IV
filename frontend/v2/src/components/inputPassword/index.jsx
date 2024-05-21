import { FaRegEyeSlash } from "react-icons/fa6";
import { FaRegEye } from "react-icons/fa6";

export default function InputPassword({ typePassword, onClick, placeholder, value, onChange, type, name }) {

  return (
    <div className="flex items-center relative w-full">
      <input
        className="rounded-2xl w-full border-2 border-[#DDDDDD] py-4 md:py-2 lg:py-4 px-8 text-[#7678ee] outline-none"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        name={name}
        type={typePassword == true ? type : "password"}
      />
      {typePassword == true ? (
        <FaRegEye
          onClick={onClick}
          className="cursor-pointer absolute right-0 mr-5"
          color="#7678ee"
          size={25}
        />
      ) : (
        <FaRegEyeSlash
          onClick={onClick}
          className="cursor-pointer absolute right-0 mr-5"
          color="#7678ee"
          size={25}
        />
      )}
    </div>
  );
}
