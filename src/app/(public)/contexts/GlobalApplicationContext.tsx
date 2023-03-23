import { createContext, ReactNode, useContext, useEffect, useState } from "react"

import { portfolioContent } from "../languages/portfolioTextContent"

interface GlobalApplicationProps {
  selected: string
  goToPage: {
    back: string
    forward: string
  },
  menu: {
    selectlanguage: string
    items: { title: string, link: string }[]
  },
  home: {
    greetings: string,
    beforeName: string,
    message: string,
    description: string,
    doc: string,
    file: string,
    goToPage: {
      back: string
      forward: string
    }
  },
  about: {
    title: string,
    subtitle: string,
    secondTitle: string,
    message: string,
    text: string,
    coursesData: { 
      id: string,
      title: string,
      courses: string[]
    }[],
    goToPage: {
      back: string
      forward: string
    }
  },
  contact: {
    title: string,
    subtitle?: string,
    message: string,
    form: {
      name: string,
      subject: string,
      message: string,
      button: string,
      success: string, 
      successMessage: string
    },
    goToPage: {
      back: string
      forward: string
    }
  },
  projects: {
    title: string,
    subtitle: string,
    message1: string,
    message2: string,
    list: {
      name: string,
      live?: string,
      repo?: string,
      message?: string,
      image: string,
      technologies: string[],
      text: string
    }[],
    goToPage: {
      back: string
      forward: string
    }
  },
  skills: {
    title: string,
    subtitle?: string
    message1: string,
    message2: string,
    text: string,
    goToPage: {
      back: string
      forward: string
    }
  },
}

interface GlobalApplicationContextType {
  selectedLanguage: GlobalApplicationProps
  selectLanguage: (language: string) => void
}

const GlobalLanguageContext = createContext({} as GlobalApplicationContextType)

interface GlobalApplicationContextProviderProps {
  children: ReactNode
}

function GlobalApplicationContextProvider({
  children,
}: GlobalApplicationContextProviderProps) {
  const { en, pt } = portfolioContent

  const [selectedLanguage, setSelectedLanguage] = useState<GlobalApplicationProps>(en)
  
  function selectLanguage(language: string) {
    if(language === "en") {
      setSelectedLanguage(en)
      localStorage.setItem("@portfolio-new:language-selected", language)
    } else {
      setSelectedLanguage(pt)
      localStorage.setItem("@portfolio-new:language-selected", language)
    }
  }

  useEffect(() => {
    const [getLanguageFromNavigator, ] = (navigator.language).split("-")
    const storedLanguage = localStorage.getItem("@portfolio-new:language-selected")

    if(!storedLanguage) {
      setSelectedLanguage(getLanguageFromNavigator === "pt" ? pt : en)
    } else {
      setSelectedLanguage(storedLanguage === "en" ? en : pt)
    }
  }, [selectedLanguage])

  return (
    <GlobalLanguageContext.Provider
      value={{
        selectedLanguage,
        selectLanguage,
      }}
    >
      {children}
    </GlobalLanguageContext.Provider>
  )
}

function useGlobalContext() {
  const context = useContext(GlobalLanguageContext)

  return context
}

export { GlobalApplicationContextProvider, useGlobalContext}