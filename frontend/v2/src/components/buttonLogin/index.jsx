export default function BotaoLogin({ onClick }) {
  return (
    <div className="flex items-center justify-center">
      <button
        onClick={onClick}
        className="w-full h-9 bg-[#7678ee] pt-1 pb-2 px-8 mt-1 justify-center text-white hover:bg-[#1D3B38]"
        style={{
          borderRadius: "32px",
        }}
        type="submit"
      >
        Login
      </button>
    </div>
  );
}
