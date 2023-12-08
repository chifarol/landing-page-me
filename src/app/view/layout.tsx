import "../globals.scss";
import type { Metadata } from "next";
type Props = {
  children: React.ReactNode;
};

export default function ViewLayout({ children }: Props) {
  return children;
}
