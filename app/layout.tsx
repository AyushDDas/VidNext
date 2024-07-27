import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "@/components/ui/toaster";
import "@stream-io/video-react-sdk/dist/css/styles.css";
import { ReactNode } from "react";
import "react-datepicker/dist/react-datepicker.css";
import { Metadata } from "next";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "VidNext",
  description: "The next generation video calling app",
  icons: { icon: "/vidNext.png" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <ClerkProvider>
        <body className={`${inter.className} bg-dark-2`}>
          <Toaster />
          <main>{children}</main>
        </body>
      </ClerkProvider>
    </html>
  );
}
