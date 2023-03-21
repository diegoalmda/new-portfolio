"use client"

import Image from "next/image"
import { House, User, Desktop, SuitcaseSimple, AddressBook, LinkedinLogo, GithubLogo, CaretRight, X, List, XSquare } from "phosphor-react"

import avatar from "../../assets/images/avatar.png"
import triangle_purple from "../../assets/images/triangle-purple.svg"
import triangle_green from "../../assets/images/triangle-green.svg"
import triangle_pink from "../../assets/images/triangle-pink.svg"

import styles from "./styles.module.scss"
import Link from "next/link"
import { useCallback } from "react"
import { useHover } from "../../hooks/useHover"

export function SideMenu() {
  // const menuRef = useRef(null)

  const [hoverRef, isHovered, setShowMenu] = useHover()

  const year = new Date()

  // const handleCloseMenu = useCallback((e) => {
  //   const { width } = getWindowDimensions()
  //   console.log(width)
  //   if(isHovered && width < 420) {
  //     setShowMenu()
  //   } else {
  //     // e.preventDefault()
  //   }
  // }, [isHovered, setShowMenu])

  // const getWindowDimensions = useCallback(() => {
  //   const { innerWidth: width, innerHeight: height } = window
  //   return {
  //     width,
  //     height
  //   }
  // }, [window])  

  // useEffect (() => {
  //   console.log(isHovered)
  //   if(isHovered) {
  //     setShowMenu(true)
  //   } else {
  //   }
  // }, [isHovered, setShowMenu])

  

  return (
    <section className={styles.menuContainer}>
      <div 
        // className={`${isHovered ? styles.openMenu : styles.backgroundContainer}`}
        className={`${styles.backgroundContainer}`}
        ref={hoverRef}
      >
        <button 
          className={styles.closeButton}
          // onClick={setShowMenu}
        >
          <X />
        </button>
        {/* <List /> */}
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
            <li>
              <Link 
                href="/"
                
                // onClick={(e) => handleCloseMenu(e)}
              >
                <House className="mr-2" />
                <span>Home</span>                
              </Link>
            </li>
            <li>
              <Link 
                href="/about"
                
                // onClick={(e) => handleCloseMenu(e)}
              >
                <User className="mr-2" />
                <span>Sobre mim</span>                
              </Link>
            </li>
            <li>
              <Link 
                href="/skills"
                
                // onClick={(e) => handleCloseMenu(e)}
              >
                <Desktop className="mr-2" />
                <span>Tecnologias</span>                
              </Link>
            </li>
            <li>
              <Link 
                href="/projects"
                
                // onClick={(e) => handleCloseMenu(e)}
              >
                <SuitcaseSimple className="mr-2" />
                <span>Projetos</span>                
              </Link>
            </li>
            <li>
              <Link 
                href="/contact"
                
                // onClick={(e) => handleCloseMenu(e)}
              >
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
            <small><span>Diego Almeida </span>@{`${year.getFullYear()}`}</small>
          </div>
        </div>
      </div>
    </section>
  )
}