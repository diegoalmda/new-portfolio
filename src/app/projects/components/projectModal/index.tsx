import { useCallback } from "react"
import Image from "next/image"
import { X } from "phosphor-react"

import { CustomButton } from "@/components/CustomButton"

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
          <CustomButton 
            aria-label={language === "en" ? "Close modal" : "Fechar modal"} 
            onClick={handleCloseModal}
          >
            <X />
          </CustomButton>          
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
            <Image src={`${process.env.NEXT_PUBLIC_IMAGES}/${image}`} width={320}  height={210} alt={name} title={name} loading="eager" />
          </div>
          <div className={styles.linkButtons}>
            { figma === "" && repo === "" && live === "" && <small className={styles.alertMessage}>{`${language === "en" ? "No link yet": "Ainda não foi disponibilizado links de acesso ao projeto."}`}</small> }
            { 
              figma !== "" && 
              <a 
                aria-label={language === "en" ? "Link to the project's design page" : "Abrir a página do design do projeto"}
                tabIndex={0} 
                className={styles.figmaButton} 
                href={figma} 
                target="__blank"
                rel="noopener noreferrer"
              >
                Figma
              </a>
            }
            { 
              repo !== "" && 
              <a 
                aria-label={language === "en" ? "Link to the project's repository page" : "Abrir a página do repositório do projeto"}
                tabIndex={0} 
                className={styles.repoButton} 
                href={repo} 
                target="__blank"
                rel="noopener noreferrer"
              >
                Repo
              </a>
            }
            { 
              live !== "" && 
              <a 
                aria-label={language === "en" ? "Link to the project's live page" : "Abrir a página do projeto online"}
                tabIndex={0} 
                className={styles.liveButton} 
                href={live} 
                target="__blank"
                rel="noopener noreferrer"
              >
                {`${language === "en" ? "Live": "Acessar"}`}
              </a>
            }      
          </div>
          <div className={styles.projectInfo}>
            {projectData.text}
          </div>
        </div>
      </div>
    </div>
  )
}