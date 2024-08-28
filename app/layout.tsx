import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import { Link } from "@nextui-org/link";
import NextImage from "next/image";
import clsx from "clsx";

import { Providers } from "./providers";

import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Navbar } from "@/components/navbar";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body
        className={clsx(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <div className="relative flex flex-col h-screen">
            <Navbar />
            <main className="container mx-auto flex-grow">{children}</main>
            <footer className="w-full flex items-center justify-center py-3">
              <Link
                isDisabled
                isExternal
                className="flex items-center gap-1 text-current"
                href="#"
                title="magodev"
              >
                <span className="text-default-600 mx-[1px]">Powered by</span>
                <NextImage
                  priority
                  alt="Mentor logo"
                  className="invert dark:invert-0"
                  height={30}
                  src="https://pub-b213a1fb448445b2a1bd745a11fba172.r2.dev/logo_white.png"
                  width={70}
                />
              </Link>
            </footer>
          </div>
        </Providers>
      </body>
    </html>
  );
}
