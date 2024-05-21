export default function Input({ placeholder, value, onChange, type, name, onKeyDown, style, id }) {
  return (
    <input
      className="rounded-2xl border-2 border-[#DDDDDD] pl-4 md:pl-8 pr-2 w-full h-full text-[#7678ee] outline-none"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      type={type}
      name={name}
      onKeyDown={onKeyDown}
      style={style}
      id={id}
    />
  )
}