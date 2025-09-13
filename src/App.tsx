import { Helmet, HelmetProvider } from "react-helmet-async";
import Header from "./components/zoro/header";
import Hero from "./components/zoro/hero";
import Services from "./components/zoro/services";
import Gallery from "./components/zoro/gallery";
import UpcomingEvents from "./components/zoro/upcomingEvents";
import Process from "./components/zoro/process";
import Testimonials from "./components/zoro/testimonials";
import Faq from "./components/zoro/faq";
import CallToAction from "./components/zoro/cta";
import Footer from "./components/zoro/footer";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "ZORO EVENTS AND ENTERTAINMENTS",
  image: "https://zoroevents.vercel.app/images/zoro-logo.png",
  telephone: "+91-86066-93695",
  email: "hello@zoroevents.in",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Mekkad",
    addressLocality: "Angamaly",
    addressRegion: "Kerala",
    postalCode: "683572",
    addressCountry: "IN",
  },
  description:
    "ZORO is a full-service event management company in Kerala, handling corporate, personal, and campus events.",
  url: "https://zoroevents.vercel.app/",
};

function App() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>ZORO Events | Your Story Our Stage </title>
        <meta
          name="description"
          content="ZORO Events crafts unforgettable corporate events, weddings, campus fests, and expos in Kerala."
        />
        <meta
          name="google-site-verification"
          content="RuH6SBfkhaj6k1zwC9j7rgu3sYOaZYRadjr3qIiqYw8"
        />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>
      <main>
        <Header />
        <Hero />
        <Services />
        <UpcomingEvents />
        <Gallery />
        <Process />
        <Testimonials />
        <Faq />
        <CallToAction />
        <Footer />
      </main>
    </HelmetProvider>
  );
}

export default App;
