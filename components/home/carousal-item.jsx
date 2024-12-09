import Image from "next/image";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

export default function CarousalItem({ title, image }) {
  return (
    <div className="pl-6 text-white md:flex md:justify-between">
      <div>
        <h1 className="text-3xl font-extrabold md:text-7xl">{title}</h1>
        <h1 className="text-xl font-light pt-1 md:text-3xl md:pt-5">
          Development Company
        </h1>
        <p className="pt-7 mr-10 md:text-xl">
          Ranked as{" "}
          <span className="text-red-600 text-lg font-bold md:text-xl">
            #Top {title}{" "}
          </span>
          Development company in India
        </p>
        <button className="mt-8 bg-red-600 px-10 py-3 pt-4 rounded-md text-white hover:bg-black">
          <Link href="https://api.whatsapp.com/send/?phone=919304136129&text=I+want+to+talk+regarding+Softplix&type=phone_number&app_absent=0">
            WhatsApp Us {">"}
          </Link>
        </button>
      </div>
      <Image
        src={image}
        alt="mobile app development"
        width={500}
        height={500}
      />
    </div>
  );
}
