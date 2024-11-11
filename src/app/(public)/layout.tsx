'use client'
import Navbar from "@/components/navbar";

export default function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar />
      <main className="relative mt-[76px] ">{children}</main> {/* Ajustado o topo para manter a altura do navbar em diferentes telas */}
    </>
  );
}
