import Hero from "../components/Hero";
import Services from "../components/Services";
import About from "../components/About";
import Faq from "../components/Faq";
import CTA from "../components/CTA";
import Footer from "../components/Footer";
import OurOffice from "../components/Ouroffice";

export default function Page() {
  return (
    <>
      <Hero />
      <Services />
      <About />
      <OurOffice/>
      <Faq />
      <CTA />
      <Footer />
    </>
  );
}
