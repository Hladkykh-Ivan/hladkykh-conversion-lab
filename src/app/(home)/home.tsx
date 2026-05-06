import { AppBackground, FloatingContacts, Header } from "@/app/shared/components";
import { ExamplesCarousel, Hero, Process } from "./components";

export default function Home() {
  return (
    <>
      <AppBackground />
      <Header />
      <main>
        <Hero />
        <Process />
        <ExamplesCarousel />
      </main>
      <FloatingContacts />
    </>
  );
}
