"use client"

import { useCallback } from "react"
import Image from "next/image"

import { useGlobalContext } from "@/contexts/GlobalApplicationContext"
import { PageContainer } from "@/components/PageContainer"

import ifpb from "@/assets/images/courses/ifpb-logo.png"
import rocketseat from "@/assets/images/courses/rocketseat-logo.png"
import udemy from "@/assets/images/courses/udemy-logo.png"

import styles from "./styles.module.scss"

export function Content() {
  const { selectedLanguage } = useGlobalContext()
  const { title, text, secondTitle, linkedinProfile, coursesData, goToPage } = selectedLanguage.about

  const renderCourse = useCallback((title: string) => {
    switch(title) {
    case "ifpb": 
      return ifpb
    case "rocketseat": 
      return rocketseat
    case "udemy": 
      return udemy
    default:
      return ""
    }
  }, [])
  
  return (
    <PageContainer title={title} goToPage={goToPage}>
      <div className={styles.aboutText}>
        <p>
          {text}
        </p>
      </div>
      <div className={styles.academicContent}>
        <h2>{secondTitle}</h2>
        <div className={styles.coursesText}>
          {
            coursesData?.map(institution => {
              return (
                <div key={institution.title} className={styles.courseItem}>
                  <Image src={renderCourse(institution.id)} alt={institution.title}/>
                  <div className={styles.courseInfo}>
                    <h3>{institution.title}</h3>
                    {
                      institution?.courses.map(course => {
                        return (
                          <p key={course}>{course}</p>
                        )
                      })
                    }
                  </div>
                </div>                
              )
            })
          }
        </div>
        <div className={styles.seeMoreCoursesSection}>
          <p>{linkedinProfile}
            <a href={`${selectedLanguage.selected === "pt" ? "https://www.linkedin.com/in/diegoalmda/" : "https://www.linkedin.com/in/diegoalmda/?locale=en_US"}`} aria-label={selectedLanguage.selected === "en" ? "Link to Diego Almeida's Linkedin profile page" : "Abrir página do perfil de Diego Almeida no Linkedin"} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </p>
        </div>
      </div>
    </PageContainer>
  )
}