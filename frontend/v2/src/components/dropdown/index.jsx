import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";



export default function DropdownInput({ placeholder, value, onChange, type, name, onKeyDown }) {
    return (
      <div className="flex items-center relative w-full h-full">
          <input
            className="rounded-2xl border-2 border-[#DDDDDD] px-4 md:px-8 w-full h-full text-[#7678ee] outline-none"
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            type={type}
            name={name}
            onKeyDown={onKeyDown}
          />
          <IoIosArrowUp
            onClick={''}
            className="cursor-pointer absolute right-0 mr-5"
            color="#7678ee"
            size={25}
          />
          {/* <IoIosArrowDown
            onClick={''}
            className="cursor-pointer absolute right-0 mr-5"
            color="#7678ee"
            size={25}
          /> */}
      </div>
    )
  }