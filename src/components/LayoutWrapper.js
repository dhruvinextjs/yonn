"use client";

import { usePathname } from "next/navigation";
import Header from "@/components/Header";
import HeaderFR from "./FR sections/HedaerFR";

export default function LayoutWrapper({ children }) {
  const pathname = usePathname();

  const isFrench =
    pathname === "/FR" ||
    pathname === "/terms-fr" ||
    pathname === "/privacy-fr";

  return (
    <>
      {isFrench ? <HeaderFR /> : <Header />}
      {children}
    </>
  );
}
