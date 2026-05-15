import { useTranslation } from 'react-i18next'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { FiShield, FiLayers, FiCode, FiDatabase, FiMonitor, FiFileText } from 'react-icons/fi'

const ICONS = [FiLayers, FiCode, FiShield, FiCode, FiMonitor, FiFileText]
const COLORS = ['#E879A8', '#A78BFA', '#71557A', '#D183A9', '#E879A8', '#A78BFA']

export default function Experience() {
  const { t } = useTranslation()
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const items = t('experience.items', { returnObjects: true })

  return (
    <section id="experience" className="relative py-28 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon/20 to-transparent" />

      <div className="section-container" ref={ref}>
        <div className="text-center mb-14">
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            className="inline-flex items-center gap-2 glass px-3 py-1.5 rounded-full mb-5"
          >
            <FiLayers size={12} className="text-neon" />
            <span className="font-mono text-xs text-textsecond tracking-wider">{t('experience.tag')}</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="section-title gradient-text whitespace-pre-line"
          >
            {t('experience.title')}
          </motion.h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((item, i) => {
            const Icon = ICONS[i % ICONS.length]
            const color = COLORS[i % COLORS.length]
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="glass rounded-2xl p-6 group hover:border-neon/15 transition-all duration-300"
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110"
                  style={{ background: `${color}15` }}
                >
                  <Icon size={18} style={{ color }} />
                </div>
                <h3 className="font-display text-base font-semibold text-textprimary mb-2 group-hover:text-neon transition-colors">
                  {item.title}
                </h3>
                <p className="font-body text-sm text-textsecond leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
