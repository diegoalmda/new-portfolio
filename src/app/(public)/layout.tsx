import { Metadata } from "next"

import { SideMenu } from "./components/SideMenu"
import { Copyright } from "./components/Copyright"
import { Providers } from "./providers"
import { QuicksandFont } from "./fonts"

import styles from "./styles/common.module.scss"
import "./styles/global.scss"

export const metadata: Metadata = {
  title: "Diego Almeida - Full Stack Portfolio",
  description: "Diego Almeida Full Stack Developer Portfolio",
  manifest: "https://nextjs.org/manifest.json",
  generator: "Next.js",
  applicationName: "Next.js",
  referrer: "origin-when-cross-origin",
  keywords: [
    "Next.js", 
    "React", 
    "JavaScript", 
    "TypeScript", 
    "Programação",
    "Desenvolvimento",
    "Software",
    "Software development",
    "Desenvolvedor de software",
    "Node.js",
    "React.js",
    "Diego Almeida", 
    "Portfólio online", 
    "Online portfolio", 
    "Diego Almeida portfólio", 
    "Diego de Almeida Cunha", 
    "Diego de Almeida Cunha portfólio", 
    "Desenvolvedor Full Stack",
    "Desenvolvedor Full Stack portfólio",
    "Desenvolvedor Fullstack",
    "Desenvolvedor Fullstack portfólio",
    "Desenvolvedor Front-end",
    "Desenvolvedor Frontend",
    "Desenvolvedor React",
    "Desenvolvedor Javascript",
    "Desenvolvedor Typescript",
    "Desenvolvedor",
    "Programador",
    "Portfólio de programador",
    "Portfólio de programador front-end",
    "Portfólio de programador frontend",
    "Portfólio de programador react",
    "Portfólio de programador react native",
    "Portfólio de desenvolvedor",
    "Desenvolvedor portfólio",
    "Desenvolvedor React portfólio",
    "Desenvolvedor Frontend portfólio",
    "Full stack developer",
    "Full stack developer portfolio",
    "Fullstack developer",
    "Fullstack developer portfolio",
    "Frontend developer",
    "Javascript developer",
    "Typescript developer",
    "Front-end developer",
    "React developer",
    "React Native developer",
    "React developer portfolio",
    "Front-end developer portfolio",
    "Node developer portfolio",
    "Node developer",
    "Backend developer",
    "Back-end developer",
    "Brazilian developer",
    "Desenvolvedor Brasil",
    "Desenvolvedor brasileiro",
    "Desenvolvedor em Curitiba",
    "UX",
  ],
  authors: [
    { name: "Diego de Almeida Cunha", url: "https://diegoalmda.tech" }, 
    { name: "Diego Almeida", url: "https://diegoalmda.tech" }
  ],
  colorScheme: "light",
  creator: "Diego Almeida",
  publisher: "Diego Almeida",
  alternates: {},
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Diego Almeida - Full Stack Portfolio",
    description: "Diego Almeida Full Stack Developer Portfolio",
    url: "https://diegoalmeida.tech",
    siteName: "Diego Almeida - Full Stack Portfolio",
    images: [
      {
        url: "https://diegoalmeida.tech/og.png",
        width: 1200,
        height: 630,
        alt: "Diego almeida portfolio"
      },
      {
        url: "https://diegoalmeida.tech/og800x600.png",
        width: 800,
        height: 600,
        alt: "Diego almeida portfolio"
      },
    ],
    locale: "en-US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
    other: {
      rel: "apple-touch-icon-precomposed",
      url: "/favicon.png",
    },
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
