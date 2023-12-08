import type { Metadata } from "next";
import AboutUs from "./About";

export const metadata: Metadata = {
  title: "About Us | everyeventdelivery.com",
  description:
    "Take your Nigerian physical events to the next level with our efficient event planning software. Simplify logistics, enhance attendee engagement, and achieve event success with ease.",
};

export default function AboutPage() {
  return <AboutUs />;
}
