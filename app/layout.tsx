import { Nunito } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar/Navbar";
import ClientOnly from "./components/ClientOnly";
import Modal from "./components/modals/Modal";

export const metadata = {
  title: "Resell",
  description:
    "Find the perfect place to stay at an amazing price in 191 countries. Belong anywhere with Resell",
};

const font = Nunito({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
          <Navbar />
          <Modal actionLabel="Submit" title="Hello World" isOpen />
        </ClientOnly>
        {children}
      </body>
    </html>
  );
}