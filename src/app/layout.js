import "./globals.css";
import { Outfit } from "next/font/google";

const inter = Outfit({ subsets: ["latin"] });

export const metadata = {
  title: "Aravind K K | Portfolio",
  description:
    "Portfolio of Aravind K K, showcasing expertise in web development, Next.js, Tailwind CSS, and modern JavaScript frameworks.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
