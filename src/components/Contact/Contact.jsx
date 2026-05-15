import { useTranslation } from 'react-i18next'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'

const LINKS = [
  {
    icon: FiMail,
    label: 'Email',
    value: 'pimentel.iumy@gmail.com',
    href: 'mailto:pimentel.iumy@gmail.com',
    color: '#FF5DA8',
  },
  {
    icon: FiGithub,
    label: 'GitHub',
    value: 'github.com/Iuky-O',
    href: 'https://github.com/Iuky-O',
    color: '#C47EC8',
  },
  {
    icon: FiLinkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/iumy-pimentel',
    href: 'https://www.linkedin.com/in/iumy-pimentel/',
    color: '#E883B5',
  },
]

export default function Contact() {
  const { t } = useTranslation()
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="contact" className="relative py-28 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon/20 to-transparent" />
      <div className="absolute bottom-0 left-1/4 w-80 h-80 rounded-full bg-neon/5 blur-3xl pointer-events-none" />

      <div className="section-container" ref={ref}>
        {/* Header */}
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

        {/* Social links — centered */}
        <div className="flex flex-col items-center gap-4 max-w-md mx-auto">
          {LINKS.map(({ icon: Icon, label, value, href, color }, i) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
              whileHover={{ y: -3, transition: { duration: 0.2 } }}
              className="w-full glass rounded-xl p-4 flex items-center gap-4 hover:border-neon/20 transition-all group"
            >
              <div
                className="w-11 h-11 rounded-lg flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform"
                style={{ background: `${color}18` }}
              >
                <Icon size={20} style={{ color }} />
              </div>
              <div>
                <p className="font-mono text-xs text-textmuted uppercase tracking-wider">{label}</p>
                <p className="font-body text-sm text-textsecond group-hover:text-textprimary transition-colors">
                  {value}
                </p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
