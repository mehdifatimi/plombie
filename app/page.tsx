import { Hero } from '@/components/sections/Hero';
import { Services } from '@/components/sections/Services';
import { About } from '@/components/sections/About';
import { Contact } from '@/components/sections/Contact';
import { Blog } from '@/components/sections/Blog';

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <About />
      <Blog />
      <Contact />
    </>
  );
}
