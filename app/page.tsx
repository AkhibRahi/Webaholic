import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import HomePortfolio from "@/components/Portfolio/HomePortfolio";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Video from "@/components/Video";
import { AccordianCustomStyles } from "@/components/tools/AccordianCustomStyles";
import { Metadata } from "next";
import ContactPage from "./contact/page";

export const metadata: Metadata = {
  title: "WebaholicTech",
  description: "Get amazing website for your bussiness in affortable price.",
  // other metadata
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <AboutSectionOne />
      <Features />
      {/* <AboutSectionTwo />
      <Pricing />
      <Video />
      <Brands /> */}
      <HomePortfolio />
      <AccordianCustomStyles />
      <Testimonials />
      {/* <Blog /> */}
      
      <Contact />
    </>
  );
}
