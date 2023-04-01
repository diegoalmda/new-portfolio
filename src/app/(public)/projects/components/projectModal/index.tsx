import { useCallback } from "react"
import Image from "next/image"
import { X } from "phosphor-react"

import { CustomButton } from "@/app/(public)/components/CustomButton"

import styles from "./modal.module.scss"

export interface ProjectProps {
  name: string,
  live?: string,
  repo?: string,
  figma?: string,
  message?: string,
  image: string,
  technologies: string[],
  text: string
}

interface ProjectModalProps {
  projectData: ProjectProps
  language: string
  handleHideModal: () => void
}

export function ProjectModal({ projectData, language, handleHideModal }: ProjectModalProps) {
  const { technologies, name, image, live, repo, figma } = projectData

  const handleCloseModal = useCallback(() => {
    handleHideModal()
  }, [handleHideModal])

  return (
    <div className={styles.container}>
      <div className={styles.modalContent}>
        <div className={styles.modalHeader}>
          <h2>{name}</h2>
          <CustomButton onClick={handleCloseModal}><X /></CustomButton>          
        </div>
        <div className={styles.projectContent}>
          <div className={styles.technologiesList}>
            {
              technologies.map(technology => {
                let signal = ", "
                if(technologies.indexOf(technology) === technologies.length - 1) {
                  signal = "."
                }
                return (
                  <strong key={technology}>{technology}{signal}</strong>
                )
              })
            }
          </div>
          <div className={styles.imageContainer}>
            <Image src={`${process.env.NEXT_PUBLIC_IMAGES}/${image}`} width={320}  height={210} alt={name} title={name} />
          </div>
          <div className={styles.linkButtons}>
            { figma === "" && repo === "" && live === "" && <small className={styles.alertMessage}>{`${language === "en" ? "No link yet": "Ainda não foi disponibilizado links de acesso ao projeto."}`}</small> }
            { figma !== "" && <a className={styles.figmaButton} href={figma} target="__blank">Figma</a>}
            { repo !== "" && <a className={styles.repoButton} href={repo} target="__blank">Repo</a>}
            { live !== "" && <a className={styles.liveButton} href={live} target="__blank">{`${language === "en" ? "Live": "Acessar"}`}</a>}        
          </div>
          <div className={styles.projectInfo}>
            {projectData.text}
          </div>
        </div>
      </div>
    </div>
  )
}