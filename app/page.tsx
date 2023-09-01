import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { About } from "./components/About";
import { Cases } from "./components/Cases";
import { Reviews } from "./components/Rewiews";
import { Contacts } from "./components/Contacts";

export default function Home() {
  return (
    <main
      id="main"
      className="flex min-h-screen flex-col items-center justify-between p-4"
    >
      <Hero />
      <Services />
      <About />
      <Cases />
      <Reviews />
      <Contacts />
    </main>
  );
}
