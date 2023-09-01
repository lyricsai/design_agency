import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { Header } from "./widgets/Header";
import { Footer } from "./widgets/Footer";
import { Intro } from "./components/Intro/Intro";
import { SkipLink } from "./widgets/SkipLink";
import "./globals.css";

const font = Plus_Jakarta_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Web Development",
  description: "Web Development Agency",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Intro />
        <SkipLink />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
