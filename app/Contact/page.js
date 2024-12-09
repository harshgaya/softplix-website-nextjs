import { BreadcrumbJsonLd } from "next-seo";
export default function ConatctUs() {
  return (
    <>
      <BreadcrumbJsonLd
        useAppDir={true}
        itemListElements={[
          {
            position: 3,
            name: "Contact",
            item: "https://softplix.com/Contact",
          },
        ]}
      />
      <h1>About Us</h1>
    </>
  );
}
