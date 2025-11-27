import Header from "@/components/header";
import "./globals.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Control Hub',
  description: 'Hub for organizing your life',
  openGraph: {
    title: 'Control Hub',
    description: 'Hub for organizing your life: pets, plants, etc.',
    // images: [
    //   'https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'
    // ]

  },
  robots: {
    index: false,
    follow: false
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        <Header />
          {children}
      </body>
    </html>
  );
}
