import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import LenisProvider from "@/components/LenisProvider";

const roboto = Roboto({
    variable: "--font-roboto",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Rehan Ahmed",
    description: "Portfolio site",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${roboto.className}  bg-black text-white`}>
                <LenisProvider>{children}</LenisProvider>
            </body>
        </html>
    );
}
