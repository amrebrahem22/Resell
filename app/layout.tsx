import "./globals.css";

export const metadata = {
  title: "Resell",
  description:
    " Find the perfect place to stay at an amazing price in 191 countries. Belong anywhere with Resell",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
