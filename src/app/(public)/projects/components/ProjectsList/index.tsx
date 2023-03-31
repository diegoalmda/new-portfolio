"use client"

import { CustomButton } from "@/app/(public)/components/CustomButton"
import { useGlobalContext } from "@/app/(public)/contexts/GlobalApplicationContext"
// import Gallery from "react-photo-gallery"

import styles from "./projects.module.scss"

export function ProjectsList() {
  const { selectedLanguage } = useGlobalContext()
  const { list, buttonText } = selectedLanguage.projects

  // style={{ "backgroundImage": `url('${process.env.NEXT_PUBLIC_IMAGES}/${project.image}')`}}

  return (
    <div className={styles.container}>
      {
        list.map(project => {
          return (
            <div key={project.name} className={styles.flipContainer}>
              <div className={styles.flipperCard}>
                <div className={styles.frontCardContainer}>
                  <img src={`${process.env.NEXT_PUBLIC_IMAGES}/${project.image}`} alt={project.name} title={project.name} />
                </div>
                <div className={styles.backCardContainer}>
                  <h4>{project.name}</h4>
                  <CustomButton>{buttonText}</CustomButton>
                </div>
              </div>
            </div>
          )
        })
      }
    </div>
  )

}