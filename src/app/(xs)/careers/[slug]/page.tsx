import type { Metadata } from "next";
import CareerDetails from "./Details";

export const metadata: Metadata = {
  title: "Careers >> Details | everyeventdelivery.com",
  description:
    "Take your Nigerian physical events to the next level with our efficient event planning software. Simplify logistics, enhance attendee engagement, and achieve event success with ease.",
};

export default function CareerDetailsPage() {
  return <CareerDetails />;
}
