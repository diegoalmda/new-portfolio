"use client"

import Image from "next/image"
import { House, User, Desktop, SuitcaseSimple, AddressBook, LinkedinLogo, GithubLogo, CaretRight } from "phosphor-react"

import avatar from "../../assets/images/avatar.png"
import triangle_purple from "../../assets/images/triangle-purple.svg"
import triangle_green from "../../assets/images/triangle-green.svg"
import triangle_pink from "../../assets/images/triangle-pink.svg"

import styles from "./styles.module.scss"
import Link from "next/link"

export function SideMenu() {
  const year = new Date()

  return (
    <section className={styles.menuContainer}>
      <div 
        className={styles.backgroundContainer}
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
          <Image className={styles.imageAvatar} src={avatar} alt="Diego" />
        </div>
        <nav className={styles.menuContent}>
          <ul>
            <li>
              <Link href="/">
                <House className="mr-2" />
                <span>Home</span>                
              </Link>
            </li>
            <li>
              <Link href="/about">
                <User className="mr-2" />
                <span>Sobre mim</span>                
              </Link>
            </li>
            <li>
              <Link href="/skills">
                <Desktop className="mr-2" />
                <span>Tecnologias</span>                
              </Link>
            </li>
            <li>
              <Link href="/projects">
                <SuitcaseSimple className="mr-2" />
                <span>Projetos</span>                
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <AddressBook className="mr-2" />
                <span>Contato</span>                              
              </Link>
            </li>
          </ul>
        </nav>
        <div className={styles.footer}>
          <ul className={styles.socialContent}>
            <li>
              <a href="/" target="__blank"><strong><GithubLogo /></strong><span>GitHub</span></a>
            </li>
            <li>
              <a href="/" target="__blank"><strong><LinkedinLogo /></strong><span>LinkedIn</span></a>
            </li>
          </ul>
          <div className={styles.copyright}>
            <small>Diego Almeida <span>@{`${year.getFullYear()}`}</span></small>
          </div>
        </div>
      </div>
    </section>
  )
}