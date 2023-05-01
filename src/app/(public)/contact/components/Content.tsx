"use client"

import { useForm } from "@formspree/react"
import { z } from "zod"
import { useForm as useHookForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

import { PageContainer } from "../../components/PageContainer"
import { useGlobalContext } from "../../contexts/GlobalApplicationContext"

import styles from "./styles.module.scss"
import { CustomButton } from "../../components/CustomButton"

const sendMessageFormSchema= z.object({
  name: z.string()
    .min(3, { message: "At least 3 letters." })
    .regex(/^([a-z\\-]+)$/i, { message: "Invalid characters.",})
    .transform(name => {
      return name.trim().split(" ").map(word => {
        return word[0].toLocaleLowerCase().concat(word.substring(1))
      }).join(" ")
    }),
  email: z.string().nonempty("Email is required.").email("Invalid email."),
  subject: z.string(),
  message: z.string().min(3, { message: "At least 3 letters." }).nonempty("Message is required."),
})

type SendMessageFormData = z.infer<typeof sendMessageFormSchema>

export function Content() {
  const { selectedLanguage } = useGlobalContext()
  const { title, message, goToPage, form } = selectedLanguage.contact

  const { 
    register, 
    handleSubmit, 
    formState: { errors } 
  } = useHookForm<SendMessageFormData>({
    resolver: zodResolver(sendMessageFormSchema),
  })

  const [state, submit] = useForm(String(process.env.NEXT_PUBLIC_FORM_KEY))
  
  async function sendMessage(data: SendMessageFormData) {
    await submit(data)
  }
  
  if (state.succeeded) {
    alert(`${form.success} ${form.successMessage}`)
  } 

  return (
    <PageContainer title={title} goToPage={goToPage}>
      <div className={styles.contactContainer}>
        <p>{message}</p>
        <form className={styles.formContainer} onSubmit={handleSubmit(sendMessage)}>
          <div className={styles.formElement}>
            <label htmlFor="name">{`${form.name}`}</label>
            <input 
              type="text"
              placeholder={`${form.name}`} 
              { ...register("name") }
            />
            { errors.name && <span className="">{errors.name.message}</span>}
          </div>
          <div className={styles.formElement}>
            <label htmlFor="name">{`${form.mail}`}</label>
            <input 
              type="text" 
              placeholder={`${form.mail} *`}
              required aria-required 
              { ...register("email") }
            />
            { errors.email && <span className="">{errors.email.message}</span>}
          </div>
          <div className={styles.fullWidthElement}>
            <label htmlFor="subject">{`${form.subject}`}</label>
            <input 
              type="text"
              placeholder={`${form.subject}`} 
              { ...register("subject") }
            />
          </div>
          <div className={styles.fullWidthElement}>
            <label htmlFor="message">{`${form.message}`}</label>
            <textarea
              placeholder={`${form.message} *`} 
              required aria-required
              { ...register("message") }
            />
            { errors.message && <span className="">{errors.message.message}</span>}
          </div>
          <div className={styles.fullWidthElement}>
            <CustomButton 
              type="submit" 
              aria-label={form.button}
              // disabled={state.submitting}
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