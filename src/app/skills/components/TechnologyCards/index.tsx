import Image from "next/image"

import { mySkills } from "./content"

import styles from "./cards.module.scss"

export function TechnologyCards() {
  return (
    <div className={styles.container}>
      {
        mySkills.map(skill => {
          return (
            <div className={styles.contentCard} key={skill.title}>
              <Image 
                width={60}
                height={60}
                src={`${process.env.NEXT_PUBLIC_IMAGES}/${skill.image}`} 
                alt={skill.alt} 
                title={skill.title} 
              />
            </div>
          )
        })
      }      
    </div>
  )
}