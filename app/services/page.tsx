import ServicesPage from "@/components/services/Services";

const page = () => {
  return <ServicesPage />;
};

export default page;
export async function generateMetadata() {
  return {
    title: `Services | Manuvance Talent Soultion `,
    description:
      "Manuvance Talent Solutions is a Delhi-based recruitment agency offering reliable, scalable, and affordable hiring solutions to companies across India We work closely with our clients to understand their manpower requirements and deliver quantity hiring with quality assurance. Our recruitment approach is designed to save time, reduce hiring costs, and ensure the right cultural and skill fit for organizations",
    alternates: {
      canonical: "https://manuvancetalent.in/services",
    },
    openGraph: {
      title: `Services | Manuvance Talent Soultion `,
      description:
        "Manuvance Talent Solutions is a Delhi-based recruitment agency offering reliable, scalable, and affordable hiring solutions to companies across India We work closely with our clients to understand their manpower requirements and deliver quantity hiring with quality assurance. Our recruitment approach is designed to save time, reduce hiring costs, and ensure the right cultural and skill fit for organizations",
      url: "https://manuvancetalent.in/services",
      siteName: "Santosh Kumar",
      images: [
        {
          url: "https://manuvancetalent.in/logo.jpeg",
          width: 800,
          height: 600,
          alt: `Manuvance Talent Solutions | Services`,
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `Services | Manuvance Talent Soultion `,
      description:
        "Manuvance Talent Solutions is a Delhi-based recruitment agency offering reliable, scalable, and affordable hiring solutions to companies across India We work closely with our clients to understand their manpower requirements and deliver quantity hiring with quality assurance. Our recruitment approach is designed to save time, reduce hiring costs, and ensure the right cultural and skill fit for organizations",
      creator: `Santosh Kumar`,
      images: [`https://manuvancetalent.in/logo.jpeg`],
    },
    robots: {
      index: true,
      follow: true,
      nocache: true,
      googleBot: {
        index: true,
        follow: true,
        noimageindex: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    metadataBase: new URL("https://manuvancetalent.in"),
  };
}
