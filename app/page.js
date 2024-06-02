
import { AboutSection } from "./components/AboutSection";
import { Achavment } from "./components/Achavment";
import { EmailSection } from "./components/EmailSection";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { Project } from "./components/Project";


export default function Home() {
  return (
<main className=" flex min-h-screen flex-col bg-[#121212] ">
    <Navbar/>
  <div className="container mt-10 md:mt-24 mx-auto px-12 py-4">
    <Hero/>
    <Achavment />
    <AboutSection/>
    <Project/>
    <EmailSection />
    <Footer />
  </div>
</main>
  );
}
