import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { CheckCircle, Github, Linkedin, Mail, Send, Twitter } from 'lucide-react'
import { personal } from '../../data/portfolio'
import { FadeIn } from '../ui/FadeIn'
import { SectionTitle } from '../ui/SectionTitle'
import { cn } from '../../lib/utils'

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
})

type ContactFormData = z.infer<typeof contactSchema>

const inputBase =
  'w-full rounded-lg border px-4 py-2.5 text-sm text-gray-900 placeholder-gray-400 outline-none transition-colors'
const inputNormal = 'border-gray-300 bg-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20'
const inputError = 'border-red-400 bg-red-50 focus:border-red-500 focus:ring-2 focus:ring-red-500/20'

export function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [serverError, setServerError] = useState('')

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({ resolver: zodResolver(contactSchema) })

  const onSubmit = async (data: ContactFormData) => {
    setServerError('')
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_WEB3FORMS_KEY ?? '',
          subject: `Portfolio contact from ${data.name}`,
          botcheck: '',
          ...data,
        }),
      })
      const json = (await res.json()) as { success: boolean }
      if (json.success) {
        setSubmitted(true)
        reset()
      } else {
        setServerError('Something went wrong. Please try again later.')
      }
    } catch {
      setServerError('Network error. Please check your connection and try again.')
    }
  }

  return (
    <section id="contact" className="border-t border-gray-100 bg-gray-50 py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <FadeIn>
          <SectionTitle
            eyebrow="Get In Touch"
            title="Let's Work Together"
            subtitle="Have a project in mind or want to chat about opportunities? I'd love to hear from you."
            align="center"
            className="mb-12"
          />
        </FadeIn>

        <div className="mx-auto max-w-lg">
          <FadeIn delay={100}>
            {submitted ? (
              /* ── Success state ── */
              <div className="flex flex-col items-center gap-4 rounded-xl border border-gray-200 bg-white p-8 text-center shadow-sm">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-green-50">
                  <CheckCircle size={28} className="text-green-500" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Message sent!</h3>
                  <p className="mt-1 text-sm text-gray-500">
                    Thanks for reaching out. I'll get back to you within 24 hours.
                  </p>
                </div>
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-sm font-medium text-indigo-600 underline-offset-4 hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              /* ── Contact form ── */
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm md:p-8"
                noValidate
              >
                {/* Honeypot — hidden from real users, trips spam bots */}
                <input type="checkbox" name="botcheck" className="hidden" aria-hidden="true" />

                <div className="space-y-5">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-gray-700">
                      Full Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      autoComplete="name"
                      placeholder="John Smith"
                      {...register('name')}
                      className={cn(inputBase, errors.name ? inputError : inputNormal)}
                    />
                    {errors.name && (
                      <p role="alert" className="mt-1 text-xs text-red-600">
                        {errors.name.message}
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-gray-700">
                      Email Address
                    </label>
                    <input
                      id="email"
                      type="email"
                      autoComplete="email"
                      placeholder="john@example.com"
                      {...register('email')}
                      className={cn(inputBase, errors.email ? inputError : inputNormal)}
                    />
                    {errors.email && (
                      <p role="alert" className="mt-1 text-xs text-red-600">
                        {errors.email.message}
                      </p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-gray-700">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      placeholder="Tell me about your project or opportunity…"
                      {...register('message')}
                      className={cn(inputBase, 'resize-none', errors.message ? inputError : inputNormal)}
                    />
                    {errors.message && (
                      <p role="alert" className="mt-1 text-xs text-red-600">
                        {errors.message.message}
                      </p>
                    )}
                  </div>

                  {/* Server error */}
                  {serverError && (
                    <p role="alert" className="rounded-lg bg-red-50 px-4 py-3 text-sm text-red-600">
                      {serverError}
                    </p>
                  )}

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex w-full items-center justify-center gap-2 rounded-lg bg-indigo-600 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-indigo-700 focus-visible:ring-2 focus-visible:ring-indigo-600 disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                        Sending…
                      </>
                    ) : (
                      <>
                        <Send size={16} />
                        Send Message
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </FadeIn>

          {/* Social row */}
          <FadeIn delay={200}>
            <div className="mt-8 flex items-center justify-center gap-6">
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-gray-500 transition-colors hover:text-gray-900"
              >
                <Github size={17} />
                GitHub
              </a>
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-gray-500 transition-colors hover:text-gray-900"
              >
                <Linkedin size={17} />
                LinkedIn
              </a>
              <a
                href={`mailto:${personal.email}`}
                className="flex items-center gap-2 text-sm text-gray-500 transition-colors hover:text-gray-900"
              >
                <Mail size={17} />
                Email
              </a>
              <a
                href={personal.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-gray-500 transition-colors hover:text-gray-900"
              >
                <Twitter size={17} />
                Twitter
              </a>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
