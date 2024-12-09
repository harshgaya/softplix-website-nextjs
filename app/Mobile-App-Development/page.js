import { BreadcrumbJsonLd } from "next-seo";
export default function MobileAppDevelopment() {
  return (
    <>
      <BreadcrumbJsonLd
        useAppDir={true}
        itemListElements={[
          {
            position: 2,
            name: "Mobile App Development",
            item: "https://softplix.com/Mobile-App-Development",
          },
        ]}
      />

      <h1>Mobile App Development</h1>
    </>
  );
}
