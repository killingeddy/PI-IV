import { ComplexNavbar } from "../navbar";

export default function PageLayoyt({ children }) {
    return (
        <main className="flex min-h-screen min-w-full flex-col items-center bg-[#f9f9f9] overflow-hidden">
            <ComplexNavbar />
            <div className="flex flex-col w-5/6 min-h-screen mt-5">
                {children}
            </div>
        </main>
    );
}