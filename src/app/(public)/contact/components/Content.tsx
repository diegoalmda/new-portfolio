"use client"

import { useForm as useFormspree } from "@formspree/react"
import { z } from "zod"
import { useForm as useHookForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

import { PageContainer } from "../../components/PageContainer"
import { useGlobalContext } from "../../contexts/GlobalApplicationContext"
import swal from "sweetalert"

import styles from "./styles.module.scss"
import { CustomButton } from "../../components/CustomButton"
import { useEffect } from "react"

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
              placeholder={`${form.namePlaceholder}`}
              { ...register("name") }
            />
            { errors.name && <small className={styles.errorMessage}>{errors.name.message}</small>}
          </div>
          <div className={styles.formElement}>
            <label htmlFor="name">{`${form.mail}`}<span className={styles.requiredField}>*</span></label>
            <input 
              type="text" 
              required aria-required 
              placeholder={`${form.mailPlaceholder}`}
              { ...register("email") }
            />
            { errors.email && <small className={styles.errorMessage}>{errors.email.message}</small>}
          </div>
          <div className={styles.fullWidthElement}>
            <label htmlFor="subject">{`${form.subject}`}</label>
            <input 
              type="text"
              placeholder={`${form.subjectPlaceholder}`}
              { ...register("subject") }
            />
          </div>
          <div className={styles.fullWidthElement}>
            <label htmlFor="message">{`${form.message}`}<span className={styles.requiredField}>*</span></label>
            <textarea
              required aria-required
              placeholder={`${form.messagePlaceholder}`}
              { ...register("message") }
            />
            { errors.message && <small className={styles.errorMessage}>{errors.message.message}</small>}
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