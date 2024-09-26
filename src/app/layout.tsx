import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Zakat App",
  description:
    "useful for zakat money distribution into actually poor and needy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
