"use client"

import { FormEvent, useState } from "react"
import { useForm } from "@formspree/react"
import swal from "sweetalert"

import { PageContainer } from "../../components/PageContainer"
import { useGlobalContext } from "../../contexts/GlobalApplicationContext"

import styles from "./styles.module.scss"

export function Content() {
  const { selectedLanguage } = useGlobalContext()
  const { title, message, goToPage, form } = selectedLanguage.contact

  const [formEmail, setFormEmail] = useState("")
  const [formMessage, setFormMessage] = useState("")
  const [formName, setFormName] = useState("")
  const [formSubject, setFormSubject] = useState("")

  const [state, submit] = useForm(String(process.env.FORM_KEY))

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    await submit(e)

    setFormEmail("")
    setFormMessage("")
    setFormName("")
    setFormSubject("")
  }
  
  if (state.succeeded) {
    swal(form.success, form.successMessage, "success")
  }  

  return (
    <PageContainer title={title} goToPage={goToPage}>
      <div className={styles.contactContainer}>
        <p>{message}</p>
        <form className={styles.formContainer} onSubmit={handleSubmit}>
          <div className={styles.formElement}>
            <input 
              type="text" 
              name="name" 
              value={formName}
              onChange={(e) => setFormName(e.target.value)}
              placeholder={`${form.name}`} 
            />
          </div>
          <div className={styles.formElement}>
            <input 
              type="text" 
              name="email"
              value={formEmail}
              onChange={(e) => setFormEmail(e.target.value)}
              placeholder="E-mail *"
              required aria-required 
            />
          </div>
          <div className={styles.fullWidthElement}>
            <input 
              type="text" 
              value={formSubject}
              name="subject" 
              onChange={(e) => setFormSubject(e.target.value)}
              placeholder={`${form.subject}`} 
            />
          </div>
          <div className={styles.fullWidthElement}>
            <textarea 
              name="message"
              value={formMessage}
              onChange={(e) => setFormMessage(e.target.value)}
              placeholder={`${form.message} *`} 
              required aria-required
            />
          </div>
          <div className={styles.fullWidthElement}>
            <button 
              type="submit" 
              disabled={state.submitting}
            >
              {form.button}
            </button>
          </div>
        </form>
      </div>
    </PageContainer>
  )
}