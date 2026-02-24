import { Helmet } from 'react-helmet-async';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { HeroSection } from '@/components/sections/HeroSection';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { GallerySection } from '@/components/sections/GallerySection';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { ContactSection } from '@/components/sections/ContactSection';

const Index = () => {
  return (
    <>
      <Helmet>
        {/* Titel & Meta Description */}
        <title>Barbershop Bonn | Duisdorfer Barbershop</title>
        <meta
          name="description"
          content="Besuche unseren Premium Barbershop Duisdorfer Barbershop in Bonn für erstklassige Haarschnitte, Bartpflege und individuelle Styles. Jetzt Termin buchen!"
        />
        <meta
          name="keywords"
          content="Barbershop, Herrenfriseur, Haarschnitt, Bartpflege, Rasur, Bonn, Duisdorf"
        />
        <link rel="canonical" href="https://duisdorfer-barbershop.de" />

        {/* Open Graph */}
        <meta property="og:title" content="Duisdorfer Barbershop | Premium Barbershop Bonn" />
        <meta
          property="og:description"
          content="Erstklassige Haarschnitte und Bartpflege für den modernen Gentleman in Bonn."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://duisdorfer-barbershop.de" />
        <meta property="og:image" content="https://duisdorfer-barbershop.de/images/og-image.png" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Duisdorfer Barbershop | Premium Barbershop Bonn" />
        <meta
          name="twitter:description"
          content="Erleben Sie erstklassige Haarschnitte und Bartpflege für den modernen Gentleman."
        />
        <meta name="twitter:image" content="https://duisdorfer-barbershop.de/images/og-image.png" />

        {/* Schema.org LocalBusiness */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Barbershop",
            "name": "Duisdorfer Barbershop",
            "image": "https://duisdorfer-barbershop.de/images/logo.png",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Lessenicher Str. 7",
              "addressLocality": "Bonn",
              "postalCode": "53123",
              "addressCountry": "DE"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "50.7145",
              "longitude": "7.0485"
            },
            "url": "https://duisdorfer-barbershop.de",
            "telephone": "+49 228 62021313",
            "openingHours": "Mo-Fr 09:00-20:00, Sa 09:00-18:00",
            "priceRange": "€€",
            "servesCuisine": "Barbershop Services",
            "sameAs": [
              "https://www.facebook.com/duisdorferbarbershop",
              "https://www.instagram.com/duisdorferbarbershop"
            ]
          })}
        </script>
      </Helmet>

      {/* Navigation */}
      <Navigation />

      <main>
        <HeroSection />
        <ServicesSection />
        <GallerySection />
        <TestimonialsSection />
        <ContactSection />
      </main>

      <Footer />
    </>
  );
};

export default Index;
