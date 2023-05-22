"use client"

import { useEffect } from "react"
import { z } from "zod"
import { useForm as useHookForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm as useFormspree } from "@formspree/react"
import swal from "sweetalert"

import { useGlobalContext } from "@/contexts/GlobalApplicationContext"
import { CustomButton } from "@/components/CustomButton"
import { PageContainer } from "@/components/PageContainer"

import styles from "./styles.module.scss"

const sendMessageFormSchema= z.object({
  name: z.string().min(3, { message: "At least 3 letters." }),
  email: z.string().nonempty("Email is required.").email("Invalid email."),
  subject: z.string(),
  message: z.string()
    .min(3, { message: "At least 3 letters." })
    .nonempty("Message is required.")
    .max(5000, { message: "More than 5000 letters." }),
})

type SendMessageFormData = z.infer<typeof sendMessageFormSchema>

export function Content() {
  const { selectedLanguage } = useGlobalContext()
  const { title, message, goToPage, form } = selectedLanguage.contact

  const { 
    register, 
    handleSubmit, 
    reset,
    formState: { errors, isSubmitSuccessful } 
  } = useHookForm<SendMessageFormData>({
    resolver: zodResolver(sendMessageFormSchema),
  })

  const [serverState, submitMessage] = useFormspree(String(process.env.NEXT_PUBLIC_FORM_KEY))  
  
  useEffect(() => {
    if (serverState.succeeded) {
      if (isSubmitSuccessful) {
        reset({ name: "", email: "", subject: "", message: "" })
      }
      swal(form.success, form.successMessage, "success")
    }    
  }, [serverState])

  return (
    <PageContainer title={title} goToPage={goToPage}>
      <div className={styles.contactContainer}>
        <p>{message}</p>
        <form className={styles.formContainer} onSubmit={handleSubmit(submitMessage)}>
          <div className={styles.formElement}>
            <label htmlFor="name">{`${form.name}`}</label>
            <input 
              type="text"
              className={`${errors.name ? styles.errorField : ""}`}
              required aria-required
              placeholder={`${form.namePlaceholder}`}
              { ...register("name") }
            />
            <div className={styles.errorContainer}>
              { errors.name && <small className={styles.errorMessage}>{`${selectedLanguage.selected === "pt" ? form.nameErrorMessage : errors.name.message }`}</small>}
            </div>
          </div>
          <div className={styles.formElement}>
            <label htmlFor="email">{`${form.mail}`}<span className={styles.requiredField}>*</span></label>
            <input 
              type="text" 
              className={`${errors.email ? styles.errorField : ""}`}
              required aria-required 
              placeholder={`${form.mailPlaceholder}`}
              { ...register("email") }
            />
            <div className={styles.errorContainer}>
              { errors.email && <small className={styles.errorMessage}>{`${selectedLanguage.selected === "pt" ? form.mailErrorMessage : errors.email.message }`}</small>}
            </div>
          </div>
          <div className={styles.fullWidthElement}>
            <label htmlFor="subject">{`${form.subject}`}</label>
            <input 
              type="text"
              placeholder={`${form.subjectPlaceholder}`}
              { ...register("subject") }
            />
            <div className={styles.errorContainer}></div>
          </div>
          <div className={styles.fullWidthElement}>
            <label htmlFor="message">{`${form.message}`}<span className={styles.requiredField}>*</span></label>
            <textarea
              className={`${errors.message ? styles.errorField : ""}`}
              required aria-required
              placeholder={`${form.messagePlaceholder}`}
              { ...register("message") }
            />
            <div className={styles.errorContainer}>
              { errors.message && <small className={styles.errorMessage}>{`${selectedLanguage.selected === "pt" ? form.messageErrorMessage : errors.message.message }`}</small>}
            </div>
          </div>
          <div className={styles.fullWidthElement}>
            <CustomButton 
              type="submit" 
              aria-label={form.button}
              disabled={serverState.submitting}
            >
              <small>
                {form.button}
              </small>
            </CustomButton>
          </div>
        </form>
      </div>
    </PageContainer>
  )
}