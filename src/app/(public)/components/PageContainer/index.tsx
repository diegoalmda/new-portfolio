"use client"

import { useRouter } from "next/navigation"
import { CaretLeft, CaretRight } from "phosphor-react"
import { ReactNode, useCallback } from "react"
import { useGlobalContext } from "../../contexts/GlobalApplicationContext"
import { CustomButton } from "../CustomButton"

import styles from "./styles.module.scss"

interface PageContainerProps {
  title: string
  children: ReactNode
  goToPage: {
    back: string
    forward: string
  }
}

export function PageContainer({ title, goToPage, children }: PageContainerProps) {
  const { selectedLanguage, selectLanguage } = useGlobalContext()

  const router = useRouter()

  const handleSelectLanguage = useCallback((language: string) => {
    selectLanguage(language)
  }, [selectedLanguage])
  
  return (
    <div className={styles.pageContentContainer}>
      <div className={styles.languageButtons}>
        <CustomButton onClick={() => handleSelectLanguage("pt")} className={`${selectedLanguage.selected === "pt" ? styles.active : ""}`}>PT</CustomButton>
        <CustomButton onClick={() => handleSelectLanguage("en")} className={`${selectedLanguage.selected === "en" ? styles.active : ""}`}>EN</CustomButton>
      </div>
      {
        title.toLowerCase() !== "home" && <div className={styles.titleContent}><h1>{title}</h1><hr></hr></div>
      }      
      <div>
        {
          title.toLowerCase() !== "home" && 
          <div className={styles.arrowLeftButton}>
            <CustomButton onClick={() => router.push(`${goToPage.back}`)}><CaretLeft /></CustomButton>
            <span>{selectedLanguage.goToPage.back}</span>
          </div>
        } 
        {
          title.toLowerCase() !== "contact" && title.toLowerCase() !== "contato" && 
          <div className={styles.arrowRightButton}>
            <CustomButton onClick={() => router.push(`${goToPage.forward}`)}><CaretRight /></CustomButton>
            <span>{selectedLanguage.goToPage.forward}</span>
          </div>
        }
      </div>
      <div className={styles.pageContent}>
        { children }
      </div>
    </div>
  )
}