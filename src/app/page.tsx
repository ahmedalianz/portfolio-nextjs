import Head from 'next/head';
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
      {/* <Head>
        <title>
          iPhone 12 XS Max For Sale in Colorado - Big Discounts | Apple
        </title>
        <meta
          name="description"
          content="Check out iPhone 12 XR Pro and iPhone 12 Pro Max. Visit your local store and for expert advice."
          key="desc"
        />
      </Head> */}
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
