"use client"

import { PageContainer } from "../../components/PageContainer"
import { useGlobalContext } from "../../contexts/GlobalApplicationContext"

import styles from "./styles.module.scss"

export function Content() {
  const { selectedLanguage } = useGlobalContext()
  const { title, message, goToPage } = selectedLanguage.contact
  
  return (
    <PageContainer title={title} goToPage={goToPage}>
      <div className={styles.contactText}>
        <p>{message}</p>
      </div>
    </PageContainer>
  )
}