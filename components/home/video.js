"use client";

import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import CarousalItem from "./carousal-item";

export default function Video() {
  const items = [
    <CarousalItem
      key={1}
      title={"Web"}
      image={"/images/home/web-development.webp"}
    />,
    <CarousalItem
      key={1}
      title={"Mobile App"}
      image={"/images/home/mobile-app-development.webp"}
    />,
    <CarousalItem
      key={1}
      title={"Metaverse"}
      image={"/images/home/metaverse-development.webp"}
    />,
    <CarousalItem
      key={1}
      title={"AI"}
      image={"/images/home/ai-development.webp"}
    />,
  ];

  return (
    <div className="relative w-full" style={{ height: "calc(100vh - 100px)" }}>
      {/* Video Element */}
      <video
        src="/videos/video.mp4"
        controls={false}
        autoPlay
        loop
        muted
        className="w-full h-full object-cover"
      />

      <div className="absolute top-10 left-0 w-full z-20">
        <AliceCarousel
          autoPlay
          autoPlayInterval={3000}
          items={items}
          infinite
          disableButtonsControls
          disableDotsControls
        />
      </div>
    </div>
  );
}
