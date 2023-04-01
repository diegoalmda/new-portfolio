"use client"

import { useCallback } from "react"
import Image from "next/image"
import { PageContainer } from "../../components/PageContainer"
import { useGlobalContext } from "../../contexts/GlobalApplicationContext"

import ifpb from "../../assets/images/courses/ifpb-logo.png"
import rocketseat from "../../assets/images/courses/rocketseat-logo.png"
import udemy from "../../assets/images/courses/udemy-logo.png"

import styles from "./styles.module.scss"

export function Content() {
  const { selectedLanguage } = useGlobalContext()
  const { title, text, secondTitle, coursesData, goToPage } = selectedLanguage.about

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
      </div>
    </PageContainer>
  )
}