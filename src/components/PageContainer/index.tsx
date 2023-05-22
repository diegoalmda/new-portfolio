"use client"

import { ReactNode, useCallback } from "react"
import { useRouter } from "next/navigation"
import { CaretLeft, CaretRight } from "phosphor-react"

import { CustomButton } from "../CustomButton"
import { useGlobalContext } from "@/contexts/GlobalApplicationContext"

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
        <CustomButton
          aria-label={selectedLanguage.selected === "en" ? "Select language portuguese" : "Selecionar idioma português"}
          onClick={() => handleSelectLanguage("pt")} 
          className={`${selectedLanguage.selected === "pt" ? styles.active : ""}`}
        >
          PT
        </CustomButton>
        <CustomButton 
          aria-label={selectedLanguage.selected === "en" ? "Select language english" : "Selecionar idioma inglês"}
          onClick={() => handleSelectLanguage("en")} 
          className={`${selectedLanguage.selected === "en" ? styles.active : ""}`}
        >
          EN
        </CustomButton>
      </div>
      {
        title.toLowerCase() !== "home" && <div className={styles.titleContent}><h1>{title}</h1><hr></hr></div>
      }      
      <div className={styles.sideNavigationContainer}>
        {
          title.toLowerCase() !== "home" && 
          <div className={styles.arrowLeftButton}>
            <CustomButton 
              aria-label={selectedLanguage.selected === "en" ? `Go back to ${goToPage.back} page` : `Voltar para página ${goToPage.back}`} 
              onClick={() => router.push(`${goToPage.back}`)}
            >
              <CaretLeft />
            </CustomButton>
            <span>{selectedLanguage.goToPage.back}</span>
          </div>
        } 
        {
          title.toLowerCase() !== "contact" && title.toLowerCase() !== "contato" && 
          <div className={styles.arrowRightButton}>
            <CustomButton 
              aria-label={selectedLanguage.selected === "en" ? `Go to ${goToPage.forward} page` : `Navegar para página ${goToPage.forward}`} 
              onClick={() => router.push(`${goToPage.forward}`)}
            >
              <CaretRight />
            </CustomButton>
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