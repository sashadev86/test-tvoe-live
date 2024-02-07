import Link from "next/link";
import Home from "./home/page";
import Hero from "@/components/Hero";
import NewFilms from "@/components/NewFilms";
import TopFilms from "@/components/TopFilms";

export default function Main() {
  return (
    <main className="flex min-h-screen flex-col pl-[215px]" id="main">
      {/* <Home /> */}

      <Hero />
      <NewFilms />
      <TopFilms />
    </main>
  );
}
