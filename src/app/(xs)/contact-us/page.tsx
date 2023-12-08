import type { Metadata } from "next";
import ContactUs from "./Contact";

export const metadata: Metadata = {
  title: "Contact Us | everyeventdelivery.com",
  description:
    "Take your Nigerian physical events to the next level with our efficient event planning software. Simplify logistics, enhance attendee engagement, and achieve event success with ease.",
};

export default function ContactUsPage() {
  return <ContactUs />;
}
