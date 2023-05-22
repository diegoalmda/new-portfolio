"use client"

import { ReactNode } from "react"

import { Analytics } from "@/components/Analytics"
import { GlobalApplicationContextProvider } from "@/contexts/GlobalApplicationContext"

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