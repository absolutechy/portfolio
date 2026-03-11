export interface Project {
  id: string
  title: string
  description: string
  tech: string[]
  githubUrl?: string
  liveUrl?: string
  accent: string
}

export interface SkillGroup {
  category: string
  skills: string[]
}

export interface Testimonial {
  id: string
  quote: string
  name: string
  title: string
  company: string
  initials: string
  accentClass: string
}

export interface Stat {
  label: string
  value: string
}
