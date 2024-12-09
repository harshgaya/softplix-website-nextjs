import Video from "@/components/home/video";
import OurClients from "@/components/home/our-clients";
import AboutUs from "@/components/home/about-us";
import Analytics from "@/components/home/analytics";
import OurServices from "@/components/home/our-services";
import { BreadcrumbJsonLd } from "next-seo";

export const metadata = {
  title: "SoftPlix | Leading Software Development Company",
  description:
    "SoftPlix is a leading Mobile App, Software Development, and Web development company helping global businesses bring digital transformation. SoftPlix empowers startups and enterprises to become industry leaders.",
  keywords:
    "Mobile App Development, Software Development, Web Development, IT Consulting, Digital Transformation, SoftPlix, Ecommerec App Development",
  authors: [{ name: "SoftPlix Team", url: "https://www.softplix.com" }],
  creator: "SoftPlix",
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  openGraph: {
    title: "SoftPlix | Leading Software Development Company",
    description:
      "SoftPlix is a global leader in Mobile App, Software Development, and IT Consulting, helping businesses achieve digital transformation.",
    url: "https://www.softplix.com",
    type: "website",
    siteName: "SoftPlix",
    images: [
      {
        url: "/images/logo/logo.png",
        width: 1200,
        height: 630,
        alt: "SoftPlix Banner",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@SoftPlix",
    title: "SoftPlix | Leading Software Development Company",
    description:
      "SoftPlix specializes in Mobile App, Software Development, and IT Consulting services, helping global businesses achieve digital transformation.",
    images: ["/images/logo/logo.png"],
  },
  icons: {
    icon: "/images/logo/logo.png",
    apple: "/images/logo/logo.png",
  },
  alternates: {
    canonical: "https://www.softplix.com",
    languages: {
      en: "https://www.softplix.com/en",
    },
  },
};

export default function Home() {
  return (
    <>
      <BreadcrumbJsonLd
        useAppDir={true}
        itemListElements={[
          {
            position: 1,
            name: "SoftPlix Leading Software Company in India",
            item: "https://softplix.com/",
          },
        ]}
      />
      <Video />
      <OurClients />
      <AboutUs />
      <Analytics />
      <OurServices />
    </>
  );
}
