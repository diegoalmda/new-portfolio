"use client"

import { Analytics } from "@/components/Analytics"
import { GlobalApplicationContextProvider } from "@/contexts/GlobalApplicationContext"
import { ReactNode } from "react"

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