import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import TextButton from "@/components/buttons/text-button";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
export default function Footer() {
  return (
    <footer className="bg-slate-900 w-full  text-white p-10 md:flex md:justify-around md:items-center">
      <div>
        <h1 className="text-3xl font-bold">SoftPlix</h1>
        <p className="mt-3">© 2024 All rights reserved.</p>
        <p className="mt-1">Contact: +91 9304136129</p>
        <div className="flex tex-white space-x-5 mt-3 text-2xl">
          <Link href="https://www.linkedin.com/company/softplix-software/">
            <FaLinkedin />
          </Link>
          <Link href="https://api.whatsapp.com/send/?phone=919304136129&text=I+want+to+talk+regarding+Softplix&type=phone_number&app_absent=0">
            <FaWhatsapp />
          </Link>
          <Link href="https://www.instagram.com/softplix_software">
            <FaInstagram />
          </Link>
          <Link href="https://www.instagram.com/softplix_software">
            <FaFacebook />
          </Link>
        </div>
      </div>
      <div className="md:flex md:justify-center md:items-center md:space-x-20">
        <ul>
          <li className="text-xl mb-2 mt-6">MENU</li>
          <li>Service</li>
          <li>Portfolio</li>
          <li>Testimony</li>
          <li>About</li>
        </ul>
        <ul>
          <li className="text-xl mb-2 mt-6">SERVICES</li>
          <li>Website</li>
          <li>Mobile App</li>
          <li>Web App</li>
          <li>3D</li>
        </ul>
        <ul>
          <li className="text-xl mb-2 mt-6">SUPPORT</li>
          <li>Support Center</li>
          <li>Privacy Policy</li>
          <li>Contact Us</li>
          <li>WhatsApp</li>
        </ul>
      </div>
    </footer>
  );
}
