"use client"

import { PageContainer } from "../../components/PageContainer"
import { useGlobalContext } from "../../contexts/GlobalApplicationContext"
import { ProjectsList } from "./ProjectsList"

import styles from "./styles.module.scss"

import projects from "./ProjectsList/projects"

export function Content() {
  const { selectedLanguage } = useGlobalContext()
  const { title, message1, message2, goToPage, filter, filterBy } = selectedLanguage.projects
  
  return (
    <PageContainer title={title} goToPage={goToPage}>
      <div className={styles.projectsText}>
        <p className="main-message">
          {message1}
          <a href="https://www.linkedin.com/in/diegoalmda/" target="_blank" aria-label="Go to Diego Almeida's linkedin profile" rel="noreferrer">LinkedIn</a>
          {message2}
          <a href="https://github.com/diegoalmda" target="_blank" aria-label="Go to Diego Almeida's github profile" rel="noreferrer">GitHub</a>.
        </p>
      </div>
      <div className={styles.filterProjects}>
        <strong>{filter}</strong>
        <div className={styles.filterBy}>
          {
            filterBy.map((category) => {
              return (
                <button key={category}>{category}</button>
              )
            })
          }
        </div>
        <ProjectsList />
      </div>
    </PageContainer>
  )
}