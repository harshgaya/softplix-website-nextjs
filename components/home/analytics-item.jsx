import Image from "next/image";

export default function AnalyticsItem({ image, title, subtitle }) {
  return (
    <div className="w-20">
      <Image src={image} alt={subtitle} height={50} width={50} />
      <h1 className="mt-4 font-bold text-3xl">{title}</h1>
      <p>{subtitle}</p>
    </div>
  );
}
