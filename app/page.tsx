"use client";
import { store } from "@/app/store/page";
import HomeIndex from "./home/page";
import { Provider } from "react-redux";
export default function Home() {
  return (
    <main className="">
      <HomeIndex />
    </main>
  );
}
