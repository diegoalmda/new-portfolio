"use client"

import { CaretLeft, CaretRight } from "phosphor-react"
import { ReactNode } from "react"

import styles from "./styles.module.scss"

interface PageContainerProps {
  title: string
  children: ReactNode
}

export function PageContainer({ title, children }: PageContainerProps) {
  return (
    <div className={styles.pageContentContainer}>
      <div className={styles.languageButtons}>
        <button className={styles.active}>PT</button>
        <button>EN</button>
      </div>
      {
        title.toLowerCase() !== "home" && <div className={styles.titleContent}><h1>{title}</h1><hr></hr></div>
      }      
      <div>
        {
          title.toLowerCase() !== "home" && 
          <div className={styles.arrowLeftButton}>
            <button><CaretLeft /></button>
            <span>Voltar</span>
          </div>
        } 
        {
          title.toLowerCase() !== "contact" && title !== "contato" && 
          <div className={styles.arrowRightButton}>
            <button><CaretRight /></button>
            <span>Veja mais</span>
          </div>
        }
      </div>
      <div>
        { children }
      </div>
    </div>
  )
}