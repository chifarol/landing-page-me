import "../globals.scss";
import type { Metadata } from "next";
// import { Inter } from "@next/font/google";
import Topbar from "@/components/Topbar";
import Footer from "@/components/Footer";
// const inter = Inter({
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "Simplifying Event Management in Nigeria",
  description:
    "Take your Nigerian physical events to the next level with our efficient event planning software. Simplify logistics, enhance attendee engagement, and achieve event success with ease.",
};

type Props = {
  children: React.ReactNode;
};

export default function MainLayout({ children }: Props) {
  return (
    <section>
      <Topbar />

      {children}

      <Footer />
    </section>
  );
}
