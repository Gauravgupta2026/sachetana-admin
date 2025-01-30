import { FeatureSection } from "@/components/features-section";
import Footer from "@/components/footer-section";
import Hero from "@/components/hero-section";
import Logo, { LogoSection } from "@/components/logo-section";
import Navigation from "@/components/navbar-section";



export default function Home() {
  return (
    <div>
      <Navigation/>
      <div>
        <Hero/>
        <Logo/>
        <FeatureSection/>
      </div>
      <Footer/>
    </div>

  );
}
