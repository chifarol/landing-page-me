import type { Metadata } from "next";
import Terms from "./Terms";

export const metadata: Metadata = {
  title: "Terms and Conditions | Every Event Delivery",
  description:
    "Take your Nigerian physical events to the next level with our efficient event planning software. Simplify logistics, enhance attendee engagement, and achieve event success with ease.",
};

export default function TermsPage() {
  return <Terms />;
}
