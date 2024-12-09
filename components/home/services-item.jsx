import Image from "next/image";

export default function ServiceItem({ image, title }) {
  return (
    <div className="rounded-lg  relative w-[200px] ml-10">
      <Image
        src={image}
        alt={title}
        width={300}
        height={400}
        className="rounded-lg object-cover"
      />
      <div className="absolute top-32 left-4 text-white z-10">
        <h1 className="text-2xl font-bold">{title}</h1>
        <h2 className="text-lg font-bold">Development</h2>
      </div>
    </div>
  );
}
