import "./globals.css";
import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import { ReduxProvider } from "@/redux/provider";

const urbanist = Urbanist({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Quantera",
  description: "Empowering investors thorugh AI powered insights.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={urbanist.className}>
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  );
}
