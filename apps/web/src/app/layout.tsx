import type { Metadata } from "next";
import "@workspace/ui/globals.css"
import { Toaster } from "@workspace/ui/components/sonner";
import "./font.css"; 
import Providers from "@/providers/Providers";


export const metadata : Metadata = {
  title: "Monthly Contribution Management System",
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
        <Providers>
          <Toaster richColors position="bottom-right" />
          {children}
        </Providers>
      </body>
    </html>
  );
}