import { useTranslation } from 'react-i18next'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { FiBook, FiAward, FiCheckCircle } from 'react-icons/fi'
import { HiAcademicCap } from 'react-icons/hi'

const DEGREES = [
  {
    id: 'technical',
    titlePt: 'Técnico em Informática',
    titleEn: 'Technical Degree — Computer Science',
    schoolPt: 'EETEPA — Vigia de Nazaré',
    schoolEn: 'EETEPA — Vigia de Nazaré',
    levelPt: 'Ensino Médio e Técnico',
    levelEn: 'High School + Technical Degree',
    periodPt: 'Fev. 2018 — Jan. 2022',
    periodEn: 'Feb. 2018 — Jan. 2022',
    completed: true,
    subjects: [
      { pt: 'Lógica de Programação', en: 'Programming Logic' },
      { pt: 'Redes de Computadores', en: 'Computer Networks' },
      { pt: 'Manutenção de Hardware', en: 'Hardware Maintenance' },
      { pt: 'Banco de Dados', en: 'Databases' },
      { pt: 'Desenvolvimento Web', en: 'Web Development' },
    ],
  },
  {
    id: 'degree',
    titlePt: 'Engenharia de Software',
    titleEn: 'Software Engineering',
    schoolPt: 'UEPA — Universidade do Estado do Pará',
    schoolEn: 'UEPA — State University of Pará',
    levelPt: '8° Semestre',
    levelEn: '8th Semester',
    periodPt: 'Out. 2022 — Jul. 2026',
    periodEn: 'Oct. 2022 — Jul. 2026',
    completed: false,
    subjects: [
      { pt: 'Arquitetura de Software', en: 'Software Architecture' },
      { pt: 'Estruturas de Dados', en: 'Data Structures' },
      { pt: 'Banco de Dados Avançado', en: 'Advanced Databases' },
      { pt: 'Segurança da Informação', en: 'Information Security' },
      { pt: 'Desenvolvimento Full Stack', en: 'Full Stack Development' },
      { pt: 'Engenharia de Requisitos', en: 'Requirements Engineering' },
    ],
  },
]

export default function Education() {
  const { t, i18n } = useTranslation()
  const lang = i18n.language
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const certs = t('education.certs', { returnObjects: true })

  return (
    <section id="education" className="relative py-28 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-px bg-gradient-to-r from-transparent via-neon/30 to-transparent" />
      <div className="absolute bottom-0 right-0 w-64 h-64 rounded-full bg-accent/5 blur-3xl pointer-events-none" />

      <div className="section-container" ref={ref}>
        {/* Header */}
        <div className="text-center mb-14">
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            className="inline-flex items-center gap-2 glass px-3 py-1.5 rounded-full mb-5"
          >
            <FiBook size={12} className="text-neon" />
            <span className="font-mono text-xs text-textsecond tracking-wider">{t('education.tag')}</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="section-title gradient-text"
          >
            {t('education.title')}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="section-subtitle"
          >
            {t('education.subtitle')}
          </motion.p>
        </div>

        {/* Degree cards */}
        <div className="grid lg:grid-cols-2 gap-6 mb-8">
          {DEGREES.map((deg, idx) => (
            <motion.div
              key={deg.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + idx * 0.12 }}
              className={`glass rounded-2xl p-7 flex flex-col gap-5 ${idx === 1 ? 'shimmer-border' : ''}`}
            >
              {/* Icon + title */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-neon/10 flex items-center justify-center shrink-0">
                  <HiAcademicCap size={24} className="text-neon" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-display text-lg font-semibold text-textprimary mb-0.5">
                    {lang === 'en' ? deg.titleEn : deg.titlePt}
                  </h3>
                  <p className="font-body text-sm text-textsecond">
                    {lang === 'en' ? deg.schoolEn : deg.schoolPt}
                  </p>
                  <p className="font-body text-xs text-textmuted mt-0.5">
                    {lang === 'en' ? deg.levelEn : deg.levelPt}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    <span className="font-mono text-xs px-2.5 py-1 rounded-full bg-neon/10 text-neon border border-neon/20">
                      {lang === 'en' ? deg.periodEn : deg.periodPt}
                    </span>
                    {deg.completed ? (
                      <span className="font-mono text-xs px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                        {t('education.concluded')}
                      </span>
                    ) : (
                      <span className="font-mono text-xs px-2.5 py-1 rounded-full bg-accent/10 text-accent border border-accent/20">
                        {t('education.inProgress')}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Subjects */}
              <div className="space-y-2.5 mt-1">
                {deg.subjects.map((sub, i) => (
                  <motion.div
                    key={sub.pt}
                    initial={{ opacity: 0, x: -8 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.35 + idx * 0.12 + i * 0.06 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-neon shrink-0" />
                    <span className="font-body text-sm text-textsecond">
                      {lang === 'en' ? sub.en : sub.pt}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="glass rounded-2xl p-7"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
              <FiAward size={18} className="text-accent" />
            </div>
            <h3 className="font-display text-lg font-semibold text-textprimary">
              {t('education.certs_title')}
            </h3>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {certs.map((cert, i) => (
              <motion.div
                key={cert}
                initial={{ opacity: 0, y: 8 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5 + i * 0.06 }}
                className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/3 transition-colors group"
              >
                <FiCheckCircle size={15} className="text-neon shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                <span className="font-body text-sm text-textsecond group-hover:text-textprimary transition-colors">
                  {cert}
                </span>
              </motion.div>
            ))}
          </div>

          <div className="mt-6 pt-5 border-t border-white/5">
            <p className="font-mono text-xs text-textmuted text-center">
              {t('education.certsPending')}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
