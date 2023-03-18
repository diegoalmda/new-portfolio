"use client"

import { ReactNode } from "react"
import { ThemeProvider } from "styled-components"

import { defaultTheme } from "./default"
import { GlobalStyle } from "./global"

interface TehemeProviderProps {
  children: ReactNode;
}

export function GlobalTheme({ children }: TehemeProviderProps) {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      { children }
    </ThemeProvider>
  )
}