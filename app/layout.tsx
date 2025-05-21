import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "@/components/ui/sonner";
import Footer from "@/components/footer";
import { dark } from '@clerk/themes'
const inter = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PrepBot | AI Interview Mocker",
  description:
    "AI interview mocker that generates mock interview questions based on user input and provides feedback",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
    appearance={{
      baseTheme: dark,
    }}
    >
      <html lang="en" className="">
        <body className={inter.className}>
          <main className="bg-[#09090B] ">
          <Toaster richColors theme="dark" position="top-right" />
          {children}
          <Footer/>
          </main>
        </body>
      </html>
    </ClerkProvider>
  );
}
