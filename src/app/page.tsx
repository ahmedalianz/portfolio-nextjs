import {
  Navbar,
  Hero,
  About,
  Experience,
  Works,
  Tech,
  Contact,
  StarsCanvas,
} from './ui';

export default function Home() {
  return (
    <main>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Works />
        <Tech />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </main>
  );
}
