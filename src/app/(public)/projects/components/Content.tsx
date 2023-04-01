"use client"

import { useCallback, useEffect, useState } from "react"
import { CustomButton } from "../../components/CustomButton"
import { PageContainer } from "../../components/PageContainer"
import { useGlobalContext } from "../../contexts/GlobalApplicationContext"
import { ProjectProps } from "./projectModal"
import { ProjectsList } from "./ProjectsList"

import styles from "./styles.module.scss"

export function Content() {
  const { selectedLanguage, selectLanguage } = useGlobalContext()
  const [selectedCategory, setSelectedCategory] = useState(`${selectedLanguage.selected === "en" ? "All" : "Todos"}`)
  const { title, message1, message2, goToPage, filter, filterBy, list } = selectedLanguage.projects
  const [filteredList, setFilteredList] = useState(list)

  const handleFilteredProjects = useCallback((category: string) => {
    setSelectedCategory(category)
    if(category !== "All" && category !== "Todos") {
      const filtered = list.reduce((filtered: ProjectProps[], actual: ProjectProps) => {
        const currentProject = actual.technologies.filter(technology => technology.toUpperCase() === category.toUpperCase())
        if(currentProject.length > 0) {
          filtered.push(actual)
        }
        return filtered
      }, [])
      setFilteredList(filtered)
    } else {
      setFilteredList(list)
    }
  }, [list, setFilteredList])

  useEffect(() => {
    handleFilteredProjects(selectedCategory)
  }, [selectLanguage])
  
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
                <CustomButton 
                  key={category} 
                  className={`${selectedCategory === category ? styles.selected : selectedCategory === "All" && category === "Todos" || selectedCategory === "Todos" && category === "All" ? styles.selected : ""}`}
                  onClick={() => handleFilteredProjects(category)}
                >
                  {category}
                </CustomButton>
              )
            })
          }
        </div>
      </div>
      <ProjectsList list={filteredList} />
    </PageContainer>
  )
}