import "./globals.css";
import { FaWhatsapp } from "react-icons/fa";
import { IoIosCall } from "react-icons/io";

import Link from "next/link";
import NavMenu from "@/components/navigation/navmenu";
import Footer from "@/components/navigation/footer";
export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NavMenu />
        {children}
        <div className="fixed bottom-3 right-3 z-50">
          <button className="w-16 h-16 rounded-sm bg-red-600 flex items-center justify-center hover:bg-black transition-all">
            <Link href="https://api.whatsapp.com/send/?phone=919304136129&text=I+want+to+talk+regarding+Softplix&type=phone_number&app_absent=0">
              <FaWhatsapp className="text-white text-4xl" />
            </Link>
          </button>
          <button className="mt-5 w-16 h-16 rounded-sm bg-blue-600 flex items-center justify-center hover:bg-black transition-all">
            <Link href="tel:+919304136129">
              <IoIosCall className="text-white text-4xl" />
            </Link>
          </button>
        </div>
        <Footer />
      </body>
    </html>
  );
}
