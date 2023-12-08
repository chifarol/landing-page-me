import "./globals.scss";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import { Providers } from "@/store-ts/Provider";

// const inter = Inter({
//   subsets: ["latin"],
//   display: "swap",
//   variable: "--font-inter",
//   weight: ["400", "500", "600", "700"],
// });
// config your font

const inter = localFont({
  src: [
    {
      path: "../../public/fonts/Inter-Regular.ttf",
      weight: "400",
    },
    {
      path: "../../public/fonts/Inter-Medium.ttf",
      weight: "500",
    },
    {
      path: "../../public/fonts/Inter-Bold.ttf",
      weight: "700",
    },
  ],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Simplifying Event Management in Nigeria",
  description:
    "Take your Nigerian physical events to the next level with our efficient event planning software. Simplify logistics, enhance attendee engagement, and achieve event success with ease.",
};

type Props = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Props) {
  // const menuIsOpen = useAppSelector(selectMenuIsOpen);
  // const [menuIsOpen, setMenuIsOpen] = useState(false);
  return (
    <html lang="en" className={`${inter.variable} tw-font-sans`}>
      <body>
        <Providers> {children} </Providers>
      </body>
    </html>
  );
}
