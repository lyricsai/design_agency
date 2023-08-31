import "./globals.css";
import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { Header } from "./widgets/Header";
import { Footer } from "./widgets/Footer";
import { Intro } from "./widgets/Intro";

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
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}
