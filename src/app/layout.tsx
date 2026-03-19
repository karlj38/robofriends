import "tachyons";
import "#/styles/globals.css";
import { Header, StoreProvider } from "#/components";
import type { Metadata } from "next";

export const metadata: Metadata = {
  description: "Robot Freinds Next.js app",
  icons: {
    icon: "/icons/favicon.ico",
    apple: "/icons/192.png",
  },
  manifest: "/manifest.json",
  robots: "*, disallow",
  title: {
    default: "Robofriends",
    template: "Robofriends | %s",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <StoreProvider>
          <Header />
          <main>{children}</main>
        </StoreProvider>
      </body>
    </html>
  );
}
