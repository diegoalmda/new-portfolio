import styles from "./copyright.module.scss"

export function Copyright() {
  const year = new Date()
  
  return (
    <div className={styles.copy}>
      <small><span>Diego Almeida </span>@{`${year.getFullYear()}`}</small>
    </div>
  )
}