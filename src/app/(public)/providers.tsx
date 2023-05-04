"use client"

import { ReactNode } from "react"
import { GlobalApplicationContextProvider } from "./contexts/GlobalApplicationContext"
import { Analytics } from "./components/Analytics"

interface ProvidersProps {
  children: ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  return (
    <GlobalApplicationContextProvider>
      <Analytics />
      {children}
    </GlobalApplicationContextProvider>    
  )
}