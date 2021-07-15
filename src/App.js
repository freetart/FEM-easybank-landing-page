import { useState } from "react";
import AOS from "aos";
import "../node_modules/aos/dist/aos.css";
import Globals from "./abstracts/Globals";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Articles from "./components/Articles";
import Footer from "./components/Footer";
import Tag from "./components/Tag";
import MobileMenu from "./components/MobileMenu";

function App() {
  const [isActive, setIsActive] = useState(false);
  AOS.init({ offset: 100, duration: 1000, once: true });
  return (
    <>
      <Globals />
      <Navbar isActive={isActive} setIsActive={setIsActive} />
      <MobileMenu isActive={isActive} />
      <Hero />
      <main>
        <Features />
        <Articles />
      </main>
      <Footer />
      <Tag />
    </>
  );
}

export default App;
