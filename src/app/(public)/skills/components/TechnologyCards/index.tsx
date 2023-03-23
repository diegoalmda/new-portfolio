

import styles from "./cards.module.scss"

import { mySkills } from "./content"

export function TechnologyCards() {
  return (
    <div className={styles.container}>
      {
        mySkills.map(skill => {
          return (
            <div className={styles.contentCard} key={skill.title}>
              <img src={`${process.env.NEXT_PUBLIC_IMAGES_SKILLS}/${skill.image}`} alt={skill.alt} title={skill.title} />
            </div>
          )
        })
      }      
    </div>
  )
}