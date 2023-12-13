import type { Metadata } from "next";
import AboutUs from "./About";

export const metadata: Metadata = {
  title: "About us: Crafting Moments That Resonate",
  description:
    "We're not just a platform; we're a canvas of imagination, a hub of inspiration, and a conduit for crafting moments that linger in the heart forever.",
};

export default function AboutPage() {
  return <AboutUs />;
}
