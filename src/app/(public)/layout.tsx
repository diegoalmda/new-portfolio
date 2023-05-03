import { Metadata } from "next"
import GoogleAnalytics from "react-ga"

import { SideMenu } from "./components/SideMenu"
import { Copyright } from "./components/Copyright"
import { Providers } from "./providers"
import { QuicksandFont } from "./fonts"

import styles from "./styles/common.module.scss"
import "./styles/global.scss"

GoogleAnalytics.initialize(`${process.env.NEXT_PUBLIC_TRACKING_ID}`)

export const metadata: Metadata = {
  title: "Diego Almeida - Full Stack Portfolio",
  description: "Diego Almeida Full Stack Developer Portfolio",
  // manifest: "https://nextjs.org/manifest.json",
  // generator: "Next.js",
  // applicationName: "Next.js",
  // referrer: "origin-when-cross-origin",
  // keywords: ["Next.js", "React", "JavaScript"],
  // authors: [{ name: "Seb" }, { name: "Josh", url: "https://nextjs.org" }],
  // colorScheme: "dark",
  // creator: "Jiachi Liu",
  // publisher: "Sebastian Markbåge",
  // alternates: {},
  // formatDetection: {
  //   email: false,
  //   address: false,
  //   telephone: false,
  // },
  // openGraph: {
  //   title: "Next.js",
  //   description: "The React Framework for the Web",
  //   url: "https://nextjs.org",
  //   siteName: "Next.js",
  //   images: [
  //     {
  //       url: "https://nextjs.org/og.png",
  //       width: 800,
  //       height: 600,
  //     },
  //     {
  //       url: "https://nextjs.org/og-alt.png",
  //       width: 1800,
  //       height: 1600,
  //       alt: "My custom alt",
  //     },
  //   ],
  //   locale: "en-US",
  //   type: "website",
  // },
  // robots: {
  //   index: false,
  //   follow: true,
  //   nocache: true,
  //   googleBot: {
  //     index: true,
  //     follow: false,
  //     noimageindex: true,
  //     "max-video-preview": -1,
  //     "max-image-preview": "large",
  //     "max-snippet": -1,
  //   },
  // },
  icons: {
    icon: "/favicon.png",
    // shortcut: "/shortcut-icon.png",
    // apple: "/apple-icon.png",
    // other: {
    //   rel: "apple-touch-icon-precomposed",
    //   url: "/apple-touch-icon-precomposed.png",
    // },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={QuicksandFont.className}>
      <body>
        <Providers>
          <div style={{ display: "flex" }}>
            <SideMenu />
            <main className={styles.content}>
              {children}
            </main>
          </div>
        </Providers>
        <Copyright />
      </body>
    </html>
  )
}
