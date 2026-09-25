import React from 'react';

/**
 * SEO Head component for React 19 SSG/SSR
 */
export default function SEO({
  title = "Upscale Dental Care Specialist Cilacap | Klinik Dokter Gigi Spesialis",
  description = "Klinik Dokter Gigi Spesialis #1 di Cilacap. Melayani Behel Ortodonti, Veneer Gigi, Implan Gigi, Bleaching Laser, & Dental Anak. Reservasi janji online tanpa antre.",
  canonical = "/",
  keywords = "dokter gigi cilacap, klinik gigi cilacap, behel cilacap, veneer cilacap, implan gigi, dokter gigi spesialis cilacap",
  ogType = "website",
  ogImage = "/hero.png",
  schemaData = null
}) {
  const siteUrl = "https://upscaledentalcare.com";
  const fullCanonicalUrl = canonical.startsWith('http') 
    ? canonical 
    : `${siteUrl}${canonical.startsWith('/') ? canonical : `/${canonical}`}`;
    
  const fullOgImage = ogImage.startsWith('http')
    ? ogImage
    : `${siteUrl}${ogImage.startsWith('/') ? ogImage : `/${ogImage}`}`;

  const defaultSchema = {
    "@context": "https://schema.org",
    "@type": "Dentist",
    "name": "Upscale Dental Care Specialist Cilacap",
    "image": `${siteUrl}/hero.png`,
    "@id": siteUrl,
    "url": siteUrl,
    "telephone": "+6281234567890",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Jl. Jend. Gatot Subroto No. 45",
      "addressLocality": "Cilacap",
      "addressRegion": "Jawa Tengah",
      "postalCode": "53223",
      "addressCountry": "ID"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -7.7247,
      "longitude": 109.0064
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "09:00",
        "closes": "21:00"
      }
    ],
    "sameAs": [
      "https://instagram.com/upscaledentalcare",
      "https://facebook.com/upscaledentalcare"
    ]
  };

  const finalSchema = schemaData || defaultSchema;

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={fullCanonicalUrl} />

      {/* Open Graph / Facebook / WhatsApp */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={fullCanonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullOgImage} />
      <meta property="og:site_name" content="Upscale Dental Care" />
      <meta property="og:locale" content="id_ID" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={fullCanonicalUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullOgImage} />

      {/* Schema.org Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(finalSchema)}
      </script>
    </>
  );
}
