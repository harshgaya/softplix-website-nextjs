import Image from "next/image";

export default function OurClients() {
  return (
    <div className="w-full h-40 bg-yellow-500  mt-20">
      <div className="w-full h-40 bg-yellow-500 animate-marquee flex justify-end items-center space-x-10">
        <Image
          src={"/images/our-clients/adtip.png"}
          alt="softplix software clients"
          width={100}
          height={100}
        />
        <Image
          src={"/images/our-clients/happytokens.png"}
          alt="softplix software clients"
          width={100}
          height={100}
        />
        <Image
          src={"/images/our-clients/launryservice.png"}
          alt="softplix software clients"
          width={100}
          height={100}
        />
        <Image
          src={"/images/our-clients/mylablogo.svg"}
          alt="softplix software clients"
          width={100}
          height={100}
        />
        <Image
          src={"/images/our-clients/sciverse_logo.svg"}
          alt="softplix software clients"
          width={100}
          height={100}
        />
      </div>
    </div>
  );
}
