"use client"

import { PageContainer } from "../../components/PageContainer"

import profilePicture from "../../assets/images/profile-picture.png"
import profilePurpleTriangle from "../../assets/images/profile-purple-triangle.svg"
import profileGreenTriangle from "../../assets/images/profile-green-triangle.svg"
import profilePinkTriangle from "../../assets/images/profile-pink-triangle.svg"
import littleTriangle from "../../assets/images/little-green-triangle.svg"
import Image from "next/image"

import styles from "./home.module.scss"
import { useGlobalContext } from "../../contexts/GlobalApplicationContext"
import { CustomButton } from "../CustomButton"

export function HomeContentComponent() {  
  const { selectedLanguage } = useGlobalContext()

  return (
    <PageContainer title="Home">
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
          <h1>{selectedLanguage.home.greetings}</h1>
          <h2>{selectedLanguage.home.beforeName} <span>Diego de Almeida Cunha</span></h2>
          <p>{`${selectedLanguage.home.description} `}</p>
        </div>
        <Image className={styles.littleTriangle} src={littleTriangle} alt="Green triangle" />
      </div>
      <div className={styles.resumeSection}>
        <a href={selectedLanguage.home.file} title="Diego Almeida's CV" target="_blank" rel="noopener noreferrer">
          <CustomButton>{selectedLanguage.home.doc}</CustomButton>
        </a>
      </div>
    </PageContainer>
  )
}