"use client"

import { PageContainer } from "../../components/PageContainer"
import { useGlobalContext } from "../../contexts/GlobalApplicationContext"

export function Content() {
  const { selectedLanguage } = useGlobalContext()
  
  return (
    <PageContainer title={selectedLanguage.about.title}>
      
    </PageContainer>
  )
}