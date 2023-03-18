"use client"

import { ReactNode } from "react"
import { GlobalTheme } from "../styles/theme-provider"

interface ProvidersProps {
  children: ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  return (
    <GlobalTheme>
      {children}
    </GlobalTheme>
  )
}