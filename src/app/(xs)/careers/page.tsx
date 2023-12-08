import type { Metadata } from "next";
import Careers from "./Careers";

export const metadata: Metadata = {
  title: "Careers | everyeventdelivery.com",
  description:
    "Take your Nigerian physical events to the next level with our efficient event planning software. Simplify logistics, enhance attendee engagement, and achieve event success with ease.",
};

export default function CareersPage() {
  return <Careers />;
}
