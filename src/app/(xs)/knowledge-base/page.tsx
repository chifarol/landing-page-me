import type { Metadata } from "next";
import KnowledgeBase from "./KnBase";
export const metadata: Metadata = {
  title: "Knowledge Base | Every Event Delivery",
  description:
    "Take your Nigerian physical events to the next level with our efficient event planning software. Simplify logistics, enhance attendee engagement, and achieve event success with ease.",
};
export default function KnowledgeBasePage() {
  return <KnowledgeBase />;
}
