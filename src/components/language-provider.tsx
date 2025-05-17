
import * as React from "react"
import { createContext, useContext, useState } from "react"

type Language = "en" | "es" | "pt-BR"

type LanguageProviderProps = {
  children: React.ReactNode
  defaultLanguage?: Language
  storageKey?: string
}

type LanguageProviderState = {
  language: Language
  setLanguage: (language: Language) => void
  t: (key: string) => string
}

// Basic translations for MVP - would be expanded with a proper i18n solution
const translations: Record<Language, Record<string, string>> = {
  en: {
    dashboard: "Dashboard",
    channels: "Channels",
    ideas: "Ideas",
    headlines: "Headlines",
    thumbnails: "Thumbnails",
    scripts: "Scripts",
    upload: "Upload",
    analytics: "Analytics",
    comments: "Comments",
    settings: "Settings",
    addChannel: "Add Channel",
    viewsToday: "Views Today",
    subscribers: "Subscribers",
    watchTime: "Watch Time",
    revenueEstimate: "Revenue Estimate",
    generateIdeas: "Generate Ideas",
    createHeadlines: "Create Headlines",
    designThumbnail: "Design Thumbnail",
    writeScript: "Write Script",
    schedule: "Schedule",
    scheduler: "Scheduler",
    darkMode: "Dark Mode",
    lightMode: "Light Mode",
    language: "Language",
    help: "Help",
    logout: "Logout",
    scheduled: "Scheduled",
    videoUpload: "Video Upload",
  },
  es: {
    dashboard: "Panel",
    channels: "Canales",
    ideas: "Ideas",
    headlines: "Titulares",
    thumbnails: "Miniaturas",
    scripts: "Guiones",
    upload: "Subir",
    analytics: "Analíticas",
    comments: "Comentarios",
    settings: "Configuración",
    addChannel: "Añadir Canal",
    viewsToday: "Vistas Hoy",
    subscribers: "Suscriptores",
    watchTime: "Tiempo de visualización",
    revenueEstimate: "Ingresos Estimados",
    generateIdeas: "Generar Ideas",
    createHeadlines: "Crear Titulares",
    designThumbnail: "Diseñar Miniatura",
    writeScript: "Escribir Guión",
    schedule: "Programar",
    scheduler: "Programador",
    darkMode: "Modo Oscuro",
    lightMode: "Modo Claro",
    language: "Idioma",
    help: "Ayuda",
    logout: "Cerrar Sesión",
    scheduled: "Programado",
    videoUpload: "Subir Video",
  },
  "pt-BR": {
    dashboard: "Painel",
    channels: "Canais",
    ideas: "Ideias",
    headlines: "Manchetes",
    thumbnails: "Miniaturas",
    scripts: "Roteiros",
    upload: "Enviar",
    analytics: "Análises",
    comments: "Comentários",
    settings: "Configurações",
    addChannel: "Adicionar Canal",
    viewsToday: "Visualizações Hoje",
    subscribers: "Assinantes",
    watchTime: "Tempo de Visualização",
    revenueEstimate: "Estimativa de Receita",
    generateIdeas: "Gerar Ideias",
    createHeadlines: "Criar Manchetes",
    designThumbnail: "Projetar Miniatura",
    writeScript: "Escrever Roteiro",
    schedule: "Agendar",
    scheduler: "Agendador",
    darkMode: "Modo Escuro",
    lightMode: "Modo Claro",
    language: "Idioma",
    help: "Ajuda",
    logout: "Sair",
    scheduled: "Agendado",
    videoUpload: "Enviar Vídeo",
  }
}

const initialState: LanguageProviderState = {
  language: "en",
  setLanguage: () => null,
  t: (key: string) => key,
}

const LanguageProviderContext = createContext<LanguageProviderState>(initialState)

export function LanguageProvider({
  children,
  defaultLanguage = "en",
  storageKey = "youtube-dashboard-language",
  ...props
}: LanguageProviderProps) {
  const [language, setLanguage] = useState<Language>(
    () => (localStorage.getItem(storageKey) as Language) || defaultLanguage
  )

  const t = (key: string): string => {
    return translations[language][key] || key
  }

  const value = {
    language,
    setLanguage: (language: Language) => {
      localStorage.setItem(storageKey, language)
      setLanguage(language)
    },
    t
  }

  return (
    <LanguageProviderContext.Provider {...props} value={value}>
      {children}
    </LanguageProviderContext.Provider>
  )
}

export const useLanguage = () => {
  const context = useContext(LanguageProviderContext)

  if (context === undefined)
    throw new Error("useLanguage must be used within a LanguageProvider")

  return context
}
