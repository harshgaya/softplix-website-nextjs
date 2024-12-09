import Image from "next/image";
import AnalyticsItem from "./analytics-item";
const items = [
  {
    image: "/images/analytics/years-of-experience.svg",
    title: "5+",
    subtitle: "Years of Experience",
  },
  {
    image: "/images/analytics/mobile-apps-developed.svg",
    title: "50+",
    subtitle: "Mobile Apps Developed",
  },

  {
    image: "/images/analytics/websites-developed.svg",
    title: "100+",
    subtitle: "Website Developed",
  },
  {
    image: "/images/analytics/ratings-on-clutch.svg",
    title: "4.8+",
    subtitle: "Rating on Play Store",
  },
  {
    image: "/images/analytics/app-downloads.svg",
    title: "50M+",
    subtitle: "App Downloads",
  },
  {
    image: "/images/analytics/dedicated-developers.svg",
    title: "100+",
    subtitle: "Dedicated Developers",
  },
];

export default function Analytics() {
  return (
    <>
      <div className=" md:flex md:justify-between md:items-center md:pl-10 md:pr-10 mb-10">
        <Image
          src={"/images/analytics/about-us-2.webp"}
          height={500}
          width={500}
          alt="about softplix"
          className="hidden md:block "
        />
        <div className="rounded-md bg-slate-300 p-5 grid grid-cols-2 gap-4 mt-5 md:grid-cols-3 md:w-[600px] ">
          {items.map((item) => {
            return (
              <AnalyticsItem
                key={item.subtitle}
                image={item.image}
                title={item.title}
                subtitle={item.subtitle}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}
