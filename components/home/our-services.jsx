import ServiceItem from "./services-item";

const items = [
  {
    title: "Mobile App",
    image: "/images/services/mobile-app-dev-tab.webp",
  },
  {
    title: "Website",
    image: "/images/services/web-dev-tab.webp",
  },
  {
    title: "E-Commerce",
    image: "/images/services/ecommerce-dev-tab.webp",
  },
  {
    title: "Blockchain",
    image: "/images/services/blockchain-dev-tab.webp",
  },
  {
    title: "Game",
    image: "/images/services/game-dev-tab.webp",
  },
  {
    title: "Salesforce",
    image: "/images/services/salesforce-dev-tab.webp",
  },
  {
    title: "AI & ML",
    image: "/images/services/ai-ml-dev-tab.webp",
  },
  {
    title: "IOT",
    image: "/images/services/iot-dev-tab.webp",
  },
];

export default function OurServices() {
  return (
    <>
      <h1 className="text-3xl font-bold ml-10 mb-10">Our Services</h1>
      <div className="w-full overflow-x-auto flex flex-nowrap mb-10">
        <div className="flex space-x-4 flex-nowrap">
          {items.map((item) => (
            <ServiceItem
              key={item.title}
              image={item.image}
              title={item.title}
            />
          ))}
        </div>
      </div>
    </>
  );
}
