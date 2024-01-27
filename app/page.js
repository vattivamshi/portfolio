import Image from "next/image";

import Hero from "@/components/Hero";
import WorkExp from "@/components/WorkExp";

export default function Home() {
  return (
    <main className="flex  flex-col items-center justify-between px-10">
        <Hero />
        <WorkExp/>
    </main>
  );
}
