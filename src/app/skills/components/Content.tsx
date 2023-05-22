"use client"

import { useGlobalContext } from "@/contexts/GlobalApplicationContext"
import { PageContainer } from "@/components/PageContainer"
import { TechnologyCards } from "./TechnologyCards"

import styles from "./styles.module.scss"

export function Content() {
  const { selectedLanguage } = useGlobalContext()
  const { title, text, goToPage } = selectedLanguage.skills
  
  return (
    <PageContainer title={title} goToPage={goToPage}>
      <div className={styles.skillsText}>
        <p>
          { text }
        </p>
      </div>
      <TechnologyCards />
    </PageContainer>
  )
}