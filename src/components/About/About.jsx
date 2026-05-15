import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { HiCheckCircle } from 'react-icons/hi'
import { FiCode } from 'react-icons/fi'

function useReveal(threshold = 0.2) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  return { ref, inView }
}

export default function About() {
  const { t } = useTranslation()
  const { ref, inView } = useReveal()
  const highlights = t('about.highlights', { returnObjects: true })

  return (
    <section id="about" className="relative py-28 overflow-hidden">
      {/* bg accent */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-accent/5 blur-3xl pointer-events-none" />

      <div className="section-container" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text side */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 glass px-3 py-1.5 rounded-full mb-6"
            >
              <FiCode size={12} className="text-neon" />
              <span className="font-mono text-xs text-textsecond tracking-wider">{t('about.tag')}</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="section-title gradient-text whitespace-pre-line mb-8"
            >
              {t('about.title')}
            </motion.h2>

            {['p1', 'p2', 'p3'].map((key, i) => (
              <motion.p
                key={key}
                initial={{ opacity: 0, y: 15 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                className="font-body text-textsecond leading-relaxed mb-4 text-sm sm:text-base"
              >
                {t(`about.${key}`)}
              </motion.p>
            ))}
          </div>

          {/* Highlights grid */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <div className="glass rounded-2xl p-6 shimmer-border">
              <p className="font-mono text-xs text-textmuted uppercase tracking-widest mb-6">
                — Áreas de foco
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {highlights.map((item, i) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, y: 10 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.4 + i * 0.07 }}
                    className="flex items-center gap-3 p-3 rounded-xl hover:bg-neon/5 transition-colors group"
                  >
                    <HiCheckCircle className="text-neon shrink-0 group-hover:scale-110 transition-transform" size={16} />
                    <span className="font-body text-sm text-textsecond group-hover:text-textprimary transition-colors">
                      {item}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* Decorative code snippet */}
              <div className="mt-6 pt-6 border-t border-white/5">
                <pre className="font-mono text-xs text-textmuted leading-relaxed">
                  <span className="text-accent">const</span>{' '}
                  <span className="text-neon">dev</span>{' '}
                  <span className="text-textmuted">= {'{'}</span>
                  {'\n'}{'  '}
                  <span className="text-queenpink">name</span>
                  <span className="text-textmuted">: </span>
                  <span className="text-accent/70">"Iumy Pimentel"</span>
                  <span className="text-textmuted">,</span>
                  {'\n'}{'  '}
                  <span className="text-queenpink">role</span>
                  <span className="text-textmuted">: </span>
                  <span className="text-accent/70">"Full Stack Dev"</span>
                  <span className="text-textmuted">,</span>
                  {'\n'}{'  '}
                  <span className="text-queenpink">focus</span>
                  <span className="text-textmuted">: [</span>
                  <span className="text-accent/70">"React"</span>
                  <span className="text-textmuted">, </span>
                  <span className="text-accent/70">"Django"</span>
                  <span className="text-textmuted">],</span>
                  {'\n'}{'  '}
                  <span className="text-queenpink">available</span>
                  <span className="text-textmuted">: </span>
                  <span className="text-neon">true</span>
                  {'\n'}
                  <span className="text-textmuted">{'}'}</span>
                </pre>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
