"use client"

import { useCallback, useState } from "react"
import Image from "next/image"

import { CustomButton } from "@/components/CustomButton"
import { useGlobalContext } from "@/contexts/GlobalApplicationContext"
import { ProjectModal, ProjectProps } from "../projectModal"

import styles from "./projects.module.scss"

interface ProjectsListProps {
  list: ProjectProps[]
}

export function ProjectsList({ list }: ProjectsListProps) {
  const [showModal, setShowModal] = useState(false)
  const [selectedProject, setSelectedProject] = useState({} as ProjectProps)
  const { selectedLanguage } = useGlobalContext()
  const { buttonText } = selectedLanguage.projects

  const handleShowProjectDetails = useCallback((project: ProjectProps) => {
    setSelectedProject(project)
    setShowModal(true)
  }, [setShowModal, setSelectedProject])
  
  const handleHideModal = useCallback(() => {
    setSelectedProject({} as ProjectProps)
    setShowModal(false)
  }, [setShowModal, setSelectedProject])

  return (
    <>
      <div className={styles.container}>
        { list.length === 0 ? <small className={styles.alertMessage}>{`${selectedLanguage.selected === "en" ? "No projects found.": "Nenhum projeto para esta categoria."}`}</small> :       
          list.map(project => {
            return (
              <div key={project.name} className={styles.flipContainer}>
                <div className={styles.flipperCard}>
                  <div className={styles.frontCardContainer}>
                    <Image 
                      width={300}
                      height={225}
                      src={`${process.env.NEXT_PUBLIC_IMAGES}/${project.image}`} 
                      alt={project.name} 
                      title={project.name} 
                      loading="eager"
                    />
                  </div>
                  <div className={styles.backCardContainer}>
                    <h2>{project.name}</h2>
                    <CustomButton
                      arial-label={buttonText}
                      onClick={() => handleShowProjectDetails(project)}
                    >
                      {buttonText}
                    </CustomButton>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
      {
        showModal && <ProjectModal projectData={selectedProject} language={selectedLanguage.selected} handleHideModal={handleHideModal} />
      }      
    </>
  )

}