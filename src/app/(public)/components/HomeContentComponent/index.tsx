"use client"

import Image from "next/image"

import { PageContainer } from "../../components/PageContainer"
import { useGlobalContext } from "../../contexts/GlobalApplicationContext"
import { CustomButton } from "../CustomButton"

import profilePicture from "../../assets/images/profile-picture.png"
import profilePurpleTriangle from "../../assets/images/profile-purple-triangle.svg"
import profileGreenTriangle from "../../assets/images/profile-green-triangle.svg"
import profilePinkTriangle from "../../assets/images/profile-pink-triangle.svg"
import littleTriangle from "../../assets/images/little-green-triangle.svg"

import styles from "./home.module.scss"

export function HomeContentComponent() {  
  const { selectedLanguage } = useGlobalContext()
  const { greetings, beforeName, description, file, doc, goToPage } = selectedLanguage.home

  return (
    <PageContainer title="Home" goToPage={goToPage}>
      <div className={styles.profileImageContent}>
        <div className={styles.trianglesContainer}>
          <Image className={styles.purpleTriangle} src={profilePurpleTriangle} alt="Purple triangle" />
          <Image className={styles.greenTriangle} src={profileGreenTriangle} alt="Green triangle" />
          <Image className={styles.pinkTriangle} src={profilePinkTriangle} alt="Pink triangle" />
        </div>
        <div className={styles.imageContainer}>
          <Image src={profilePicture} alt="Diego Almeida photo" />
        </div>
      </div>
      <div className={styles.presentation}>
        <div className={styles.info}>
          <h1>{greetings}</h1>
          <h2>{beforeName} <span>Diego de Almeida Cunha</span></h2>
          <p>{`${description} `}</p>
        </div>
        <Image className={styles.littleTriangle} src={littleTriangle} alt="Green triangle" />
      </div>
      <div className={styles.resumeSection}>
        <a href={file} title={selectedLanguage.selected === "en" ? "Diego Almeida Curriculum" : "Currículo de Diego Almeida"} target="_blank" rel="noopener noreferrer">
          <CustomButton aria-label={selectedLanguage.selected === "en" ? "Diego Almeida Curriculum" : "Currículo de Diego Almeida"}>{doc}</CustomButton>
        </a>
      </div>
    </PageContainer>
  )
}