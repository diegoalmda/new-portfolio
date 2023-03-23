"use client"

import { PageContainer } from "../../components/PageContainer"
import { useGlobalContext } from "../../contexts/GlobalApplicationContext"

import styles from "./styles.module.scss"
import { TechnologyCards } from "./TechnologyCards"

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