"use client";
import { AuthProvider } from "./providers/authProvider";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Poppins } from "next/font/google";
import "./globals.css";

// Modais
import useAddEventModal from "@/utils/hooks/useAddEventModal";
import AddEventModal from "@/components/modals/addEventModal";

const poppins = Poppins({ subsets: ["latin"], weight: ['500'] });

export default function RootLayout({ children }) {

  const addEventModal = useAddEventModal();

  return (
    <html lang="pt-BR">
      <AuthProvider>
        <body suppressHydrationWarning={true} className={poppins.className}>
          {children}
          <AddEventModal isOpen={addEventModal.isOpen} onClose={addEventModal.onClose} />
          <ToastContainer />
        </body>
      </AuthProvider>
    </html>
  );
}
