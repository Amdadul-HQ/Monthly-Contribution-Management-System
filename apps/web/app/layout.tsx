import type { Metadata } from "next";
import "@workspace/ui/globals.css"
import { Toaster } from "@workspace/ui/components/sonner";
import "./font.css"; 


export const metadata : Metadata = {
  title: "AMDADUL HQ | Portfolio",
  description: "Creative Web Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning className={`font-[Montreal] antialiased`}>
          <Toaster richColors position="bottom-right" />
          {children}
      </body>
    </html>
  );
}