import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import WhatIsIt from "@/components/landing/WhatIsIt";
import Problem from "@/components/landing/Problem";
import Curriculum from "@/components/landing/Curriculum";
import Outcomes from "@/components/landing/Outcomes";
import Audience from "@/components/landing/Audience";
import ForOrganizations from "@/components/landing/ForOrganizations";
import Instructor from "@/components/landing/Instructor";
import Differentiators from "@/components/landing/Differentiators";
import ContactCTA from "@/components/landing/ContactCTA";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <WhatIsIt />
        <Problem />
        <Curriculum />
        <Outcomes />
        <Audience />
        <ForOrganizations />
        <Instructor />
        <Differentiators />
        <ContactCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
