export default function Loader({ color }) {
    return (
        <div className="flex space-x-2 py-8 px-48 justify-center items-center">
            <span className="sr-only">Loading...</span>
            <div className={`h-6 w-6 bg-[${color}] rounded-full animate-bounce [animation-delay:-0.3s]`}></div>
            <div className={`h-6 w-6 bg-[${color}] rounded-full animate-bounce [animation-delay:-0.15s]`}></div>
            <div className={`h-6 w-6 bg-[${color}] rounded-full animate-bounce`}></div>
        </div>
    );
}