"use client";
// import { useEffect, useState } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Experiences from "./components/Experiences";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Work from "./components/Work";
import { DarkModeProvider } from "./themeToggle";

export default function Home() {
  return (
    <>
      <DarkModeProvider>
        <Navbar />
        <Header />
        <About />
        <Services />
        <Experiences />
        <Work />
        <Contact />
        <Footer />
      </DarkModeProvider>
    </>
  );
}
