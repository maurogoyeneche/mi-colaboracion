import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import { Link } from "@nextui-org/link";
import NextImage from "next/image";
import clsx from "clsx";
import { Analytics } from "@vercel/analytics/react";

import { Providers } from "./providers";

import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";

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
  themeColor: "black",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head>
        <link href="/favicon.ico" rel="icon" />
      </head>
      <body
        className={clsx(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <div className="relative flex flex-col h-screen">
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
                <sup className="text-default-600 -ml-[2px] mt-[6px] scale-75 place-content-start">
                  ®
                </sup>
              </Link>
            </footer>
          </div>
        </Providers>
        <Analytics />
      </body>
    </html>
  );
}
