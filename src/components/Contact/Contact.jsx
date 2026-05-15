import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { FiGithub, FiLinkedin, FiMail, FiSend } from 'react-icons/fi'

export default function Contact() {
  const { t } = useTranslation()
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState(null) // null | 'sending' | 'sent'

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = e => {
    e.preventDefault()
    setStatus('sending')
    setTimeout(() => setStatus('sent'), 1500)
  }

  return (
    <section id="contact" className="relative py-28 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon/20 to-transparent" />
      <div className="absolute bottom-0 left-1/4 w-80 h-80 rounded-full bg-neon/5 blur-3xl pointer-events-none" />

      <div className="section-container" ref={ref}>
        <div className="text-center mb-14">
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            className="inline-flex items-center gap-2 glass px-3 py-1.5 rounded-full mb-5"
          >
            <FiMail size={12} className="text-neon" />
            <span className="font-mono text-xs text-textsecond tracking-wider">{t('contact.tag')}</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="section-title gradient-text whitespace-pre-line"
          >
            {t('contact.title')}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="section-subtitle"
          >
            {t('contact.subtitle')}
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 max-w-4xl mx-auto">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {status === 'sent' ? (
              <div className="glass shimmer-border rounded-2xl p-10 flex flex-col items-center justify-center text-center gap-4 min-h-[320px]">
                <div className="w-14 h-14 rounded-full bg-neon/10 flex items-center justify-center">
                  <FiSend size={24} className="text-neon" />
                </div>
                <p className="font-body text-textprimary text-base">{t('contact.success')}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="glass rounded-2xl p-7 flex flex-col gap-4">
                <div>
                  <label className="font-mono text-xs text-textmuted mb-2 block uppercase tracking-wider">
                    {t('contact.name')}
                  </label>
                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 font-body text-sm text-textprimary placeholder-textmuted focus:outline-none focus:border-neon/40 focus:bg-neon/5 transition-all"
                    placeholder={t('contact.name')}
                  />
                </div>
                <div>
                  <label className="font-mono text-xs text-textmuted mb-2 block uppercase tracking-wider">
                    {t('contact.email')}
                  </label>
                  <input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 font-body text-sm text-textprimary placeholder-textmuted focus:outline-none focus:border-neon/40 focus:bg-neon/5 transition-all"
                    placeholder={t('contact.email')}
                  />
                </div>
                <div>
                  <label className="font-mono text-xs text-textmuted mb-2 block uppercase tracking-wider">
                    {t('contact.message')}
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 font-body text-sm text-textprimary placeholder-textmuted focus:outline-none focus:border-neon/40 focus:bg-neon/5 transition-all resize-none"
                    placeholder={t('contact.message')}
                  />
                </div>
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="btn-primary flex items-center justify-center gap-2 disabled:opacity-60"
                >
                  <FiSend size={15} />
                  {status === 'sending' ? t('contact.sending') : t('contact.send')}
                </button>
              </form>
            )}
          </motion.div>

          {/* Social */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col justify-center gap-6"
          >
            <p className="font-body text-sm text-textsecond">{t('contact.or')}</p>

            {[
              { icon: FiMail, label: 'Email', value: 'pimentel.iumy@gmail.com', href: 'mailto:pimentel.iumy@gmail.com', color: '#E879A8' },
              { icon: FiGithub, label: 'GitHub', value: 'github.com/Iuky-O', href: 'https://github.com/Iuky-O', color: '#A78BFA' },
              { icon: FiLinkedin, label: 'LinkedIn', value: 'https://www.linkedin.com/in/iumy-pimentel/', href: 'https://www.linkedin.com/in/iumy-pimentel/', color: '#D183A9' },
            ].map(({ icon: Icon, label, value, href, color }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="glass rounded-xl p-4 flex items-center gap-4 hover:border-neon/20 transition-all group hover:-translate-y-0.5"
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform"
                  style={{ background: `${color}15` }}
                >
                  <Icon size={18} style={{ color }} />
                </div>
                <div>
                  <p className="font-mono text-xs text-textmuted uppercase tracking-wider">{label}</p>
                  <p className="font-body text-sm text-textsecond group-hover:text-textprimary transition-colors">
                    {value}
                  </p>
                </div>
              </a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
