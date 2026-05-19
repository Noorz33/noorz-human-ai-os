import { Helmet } from "react-helmet-async";
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
      <Helmet>
        <title>Noorz | سیستم‌عامل شخصی کار با AI</title>
        <meta name="description" content="نورز یک دوره فردمحور برای ساخت سیستم‌عامل شخصی کار با هوش مصنوعی است؛ نه آموزش ابزار، بلکه نصب یک مدل کاری قابل دفاع برای حرفه‌ای‌ها." />
        <link rel="canonical" href="https://noorz-human-ai-os.lovable.app/" />
        <meta property="og:url" content="https://noorz-human-ai-os.lovable.app/" />
        <meta property="og:title" content="Noorz | سیستم‌عامل شخصی کار با AI" />
        <meta property="og:description" content="نورز یک دوره فردمحور برای ساخت سیستم‌عامل شخصی کار با هوش مصنوعی است." />
      </Helmet>
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
