import Navbar from "@/components/Navbar";
import HeroContent from "@/components/HeroContent";
import LeadForm from "@/components/LeadForm";
import BottomBar from "@/components/BottomBar";
import { Analytics } from "@vercel/analytics/next"

export default function Home() {
  return (
    <>
      {/* Background effects */}
      <div className="noise-overlay" />
      <div className="bg-glow-top" />
      <div className="bg-glow-bottom" />

      <Navbar />

      {/* Hero Section */}
      <section className="relative z-[1] min-h-screen flex items-center justify-center px-7 md:px-15 pt-[140px] pb-20 gap-15 max-md:flex-col max-md:pt-[120px] max-md:gap-10">
        <HeroContent />
        <LeadForm />
      </section>

      {/* Bottom Trust Bar */}
      <BottomBar />
      <Analytics />
    </>
  );
}
