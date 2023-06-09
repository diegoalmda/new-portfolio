"use client"

import { useCallback } from "react"
import Image from "next/image"
import Link from "next/link"
import { House, User, Desktop, SuitcaseSimple, AddressBook, LinkedinLogo, GithubLogo, CaretRight } from "phosphor-react"
import { useSelectedLayoutSegment } from "next/navigation"

import { useGlobalContext } from "@/contexts/GlobalApplicationContext"

import avatar from "@/assets/images/avatar.png"
import triangle_purple from "@/assets/images/triangle-purple.svg"
import triangle_green from "@/assets/images/triangle-green.svg"
import triangle_pink from "@/assets/images/triangle-pink.svg"

import styles from "./styles.module.scss"

export function SideMenu() {
  const { selectedLanguage } = useGlobalContext()
  let segment = useSelectedLayoutSegment()

  if(segment === null) {
    segment = "/"
  }

  const renderIcon = useCallback((type: string) => {
    switch(type) {
    case "/": 
      return <House />
    case "about": 
      return <User />
    case "skills": 
      return <Desktop />
    case "projects": 
      return <SuitcaseSimple />
    case "contact": 
      return <AddressBook />    
    }
  }, [])

  return (
    <section className={styles.menuContainer}>
      <div 
        className={`${styles.backgroundContainer}`}        
      >
        <Image className={styles.triangle_purple} src={triangle_purple} alt="Purple triangle image" />
        <Image className={styles.triangle_green} src={triangle_green} alt="Green triangle image" />
        <Image className={styles.triangle_pink} src={triangle_pink} alt="Pink triangle image" />
        <div className={styles.menuHeader}>
          <div className={styles.menuTitle}>
            <div className={styles.arrowRight}></div>
            <strong>Menu</strong>
            <CaretRight />
          </div>
          <div className={styles.avatarContainer}>
            <Image className={styles.imageAvatar} src={avatar} alt="Diego" />
          </div>
        </div>
        <nav className={styles.menuContent}>
          <ul>
            {selectedLanguage?.menu?.items.map(item => {
              return (
                <li key={item.title}>
                  <Link
                    tabIndex={0}
                    href={`${item.link}`} 
                    className={`${segment === item.link ? styles.active : ""}`}
                    title={`${item.title}`}
                    aria-label={selectedLanguage.selected === "en" ? `Go to ${item.title} page` : `Navegar para página ${item.title}`}                   
                  >
                    { renderIcon(item.link) }
                    <span>{item.title}</span>
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>
        <div className={styles.footer}>
          <ul className={styles.socialContent}>
            <li>
              <a href="https://github.com/diegoalmda" aria-label={selectedLanguage.selected === "en" ? "Link to Diego Almeida's Github profile page" : "Abrir página do perfil de Diego Almeida no Github"} target="__blank" rel="noopener noreferrer"><strong><GithubLogo /></strong><span>GitHub</span></a>
            </li>
            <li>
              <a href={`${selectedLanguage.selected === "pt" ? "https://www.linkedin.com/in/diegoalmda/" : "https://www.linkedin.com/in/diegoalmda/?locale=en_US"}`} aria-label={selectedLanguage.selected === "en" ? "Link to Diego Almeida's Linkedin profile page" : "Abrir página do perfil de Diego Almeida no Linkedin"} target="__blank" rel="noopener noreferrer"><strong><LinkedinLogo /></strong><span>LinkedIn</span></a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}