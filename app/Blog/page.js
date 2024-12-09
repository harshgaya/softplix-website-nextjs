import { BreadcrumbJsonLd } from "next-seo";
export default function Blog() {
  return (
    <>
      <BreadcrumbJsonLd
        useAppDir={true}
        itemListElements={[
          {
            position: 4,
            name: "Blog",
            item: "https://softplix.com/Blog",
          },
        ]}
      />
      <h1>Blog</h1>
    </>
  );
}
