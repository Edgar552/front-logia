import type { Metadata } from "next";
import { Cinzel, Montserrat } from "next/font/google";
import "./globals.css";

const cinzel = Cinzel({
    subsets: ["latin"],
    variable: "--font-cinzel",
    weight: ["400", "500", "600", "700"],
});

const montserrat = Montserrat({
    subsets: ["latin"],
    variable: "--font-montserrat",
    weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
    title: "Gran Logia El Potosí",
    description: "Sitio oficial",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="es">
        <body
            className={`${cinzel.variable} ${montserrat.variable}`}
        >
        {children}
        </body>
        </html>
    );
}