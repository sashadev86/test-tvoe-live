import Link from "next/link";
import Home from "./home/page";
import Hero from "@/components/Hero";

export default function Main() {
  return (
    <main className="flex min-h-screen flex-col items-center pl-[215px]" id="main">
      {/* <Home /> */}

      <Hero />
      
    </main>
  );
}
