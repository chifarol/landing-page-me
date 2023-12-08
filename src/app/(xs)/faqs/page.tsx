import type { Metadata } from "next";
import FAQs from "./FAQs";

export const metadata: Metadata = {
  title: "FAQs | Every Event Delivery",
  description:
    "Take your Nigerian physical events to the next level with our efficient event planning software. Simplify logistics, enhance attendee engagement, and achieve event success with ease.",
};

export default function FAQsPage() {
  return <FAQs />;
}
