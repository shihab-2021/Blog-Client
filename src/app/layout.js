import {
  Sansita,
  Lobster,
  Arima,
  Oleo_Script,
  Agbalumo,
} from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import Providers from "@/providers/Providers";

const sansita = Sansita({
  variable: "--font-sansita", // Link this to a CSS variable
  subsets: ["latin"],
  weight: ["400", "700", "800", "900"],
});

const arima = Arima({
  variable: "--font-arima",
  subsets: ["latin"],
});

const oleo_script = Oleo_Script({
  variable: "--font-oleo_script",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const lobster = Lobster({
  variable: "--font-lobster",
  subsets: ["latin"],
  weight: ["400"],
});

const agbalumo = Agbalumo({
  variable: "--font-agbalumo",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata = {
  title: "BlogNest",
  description: "Keep explore, keep taking knowledge, be happy",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${sansita.variable} ${arima.variable} ${oleo_script.variable} ${lobster.variable} ${agbalumo.variable} antialiased`}
      >
        <Toaster richColors position="top-center" />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
