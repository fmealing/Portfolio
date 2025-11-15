import Hero from "./components/Hero";
import WhatIDo from "./components/WhatIDo";
import Portfolio from "./components/Portfolio";
import WhyWorkWithMe from "./components/WhyWorkWithMe";
import Pricing from "./components/Pricing";
import Contact from "./components/Contact";

import DotNav from "./components/DotNav";

export default function Home() {
  return (
    <main>
      <DotNav />
      <section id="Hero">
        <Hero />
      </section>
      <section id="WhatIDo">
        <WhatIDo />
      </section>
      <section id="Portfolio">
        <Portfolio />
      </section>
      <section id="Why">
        <WhyWorkWithMe />
      </section>
      <section id="Pricing">
        <Pricing />
      </section>
      <section id="Contact">
        <Contact />
      </section>
    </main>
  );
}
