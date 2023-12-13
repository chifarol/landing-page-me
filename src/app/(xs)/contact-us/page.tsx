import type { Metadata } from "next";
import ContactUs from "./Contact";

export const metadata: Metadata = {
  title: "Contact us: Let's Help you plan your event",
  description:
    "We're not just a platform; we're a canvas of imagination, a hub of inspiration, and a conduit for crafting moments that linger in the heart forever.",
};

export default function ContactUsPage() {
  return <ContactUs />;
}
