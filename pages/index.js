import React from "react";
import Head from "next/head";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import Image from "next/image";
import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import Sigue from "@/components/Sigue";
import ServiceCard from "@/components/ServiceCards";
import TestimonialCarousel from "@/components/TestimonialCarousel.js";
import PricingCards from "@/components/PricingCards";
import Intro from "@/components/Intro";

export default function Home() {
  return (
    <div className="bg-[var(--color-background)] text-gray-900">
      <Head>
        <title>Care Cleaning Company - Proto</title>
        <meta
          name="description"
          content="A modern and professional cleaning business template."
        />
      </Head>

      {/* Hero Section */}
      {/* LANDING & HERO */}
      <Hero />

      {/* Intro */}
      <Intro />

      {/* Services Section */}
      <ServiceCard />

      {/* Why Choose Us */}
      <Sigue />

      {/* Testimonials */}
      <TestimonialCarousel />
      {/* Pricing Section */}
      <PricingCards />

      {/* Contact Section */}
      {/* <section
        id="contact"
        className="bg-blue-600 text-white py-12 text-center"
      >
        <h2 className="text-3xl font-semibold">Call for a Free Quote</h2>
        <p className="text-lg mt-2">📞 (757) 376-0101</p>
      </section> */}
      <ContactForm />
    </div>
  );
}
