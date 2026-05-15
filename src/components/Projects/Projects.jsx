import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { useRef } from 'react'
import { FiGithub, FiLock, FiX, FiExternalLink, FiZap, FiLayers, FiAlertCircle, FiUser } from 'react-icons/fi'
import { PROJECTS } from './projects.data'

const STATUS_STYLE = {
  completed: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
  in_progress: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
  academic: 'bg-accent/10 text-accent border-accent/20',
}

function TechBadge({ name }) {
  return (
    <span className="font-mono text-xs px-2.5 py-1 rounded-full bg-neon/8 text-neon/80 border border-neon/15">
      {name}
    </span>
  )
}

function ProjectCard({ project, onClick }) {
  const { t, i18n } = useTranslation()
  const lang = i18n.language

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -6, transition: { duration: 0.25 } }}
      onClick={() => onClick(project)}
      className="glass rounded-2xl p-6 cursor-pointer group hover:border-neon/20 transition-all duration-300 hover:shadow-neon-sm flex flex-col gap-4"
    >
      {/* Header */}
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1.5">
            <span className={`text-xs font-mono px-2 py-0.5 rounded-full border ${STATUS_STYLE[project.status]}`}>
              {t(`projects.status.${project.status}`)}
            </span>
            {project.isPrivate && (
              <span className="flex items-center gap-1 text-xs text-textmuted">
                <FiLock size={10} /> {t('projects.private')}
              </span>
            )}
          </div>
          <h3 className="font-mono text-sm font-semibold text-textprimary group-hover:text-neon transition-colors truncate">
            {project.name}
          </h3>
        </div>
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            onClick={e => e.stopPropagation()}
            className="shrink-0 text-textmuted hover:text-neon transition-colors p-1"
            aria-label="GitHub"
          >
            <FiGithub size={16} />
          </a>
        )}
      </div>

      {/* Tagline */}
      <p className="font-body text-xs text-neon/70 font-medium">
        {lang === 'en' ? (project.taglineEn || project.tagline) : project.tagline}
      </p>

      {/* Description */}
      <p className="font-body text-sm text-textsecond leading-relaxed line-clamp-3 flex-1">
        {lang === 'en' ? project.descriptionEn : project.description}
      </p>

      {/* Tech stack */}
      <div className="flex flex-wrap gap-1.5 pt-2 border-t border-white/5">
        {project.techs.slice(0, 4).map(t => <TechBadge key={t} name={t} />)}
        {project.techs.length > 4 && (
          <span className="font-mono text-xs px-2.5 py-1 rounded-full bg-white/5 text-textmuted">
            +{project.techs.length - 4}
          </span>
        )}
      </div>
    </motion.article>
  )
}

function ProjectModal({ project, onClose }) {
  const { t, i18n } = useTranslation()
  const lang = i18n.language

  if (!project) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-4"
        onClick={onClose}
      >
        <div className="absolute inset-0 bg-darkbg/80 backdrop-blur-sm" />
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          onClick={e => e.stopPropagation()}
          className="relative glass-dark rounded-2xl p-7 max-w-2xl w-full max-h-[85vh] overflow-y-auto shimmer-border"
        >
          {/* Close */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 text-textmuted hover:text-textprimary transition-colors"
            aria-label={t('projects.close')}
          >
            <FiX size={20} />
          </button>

          {/* Status */}
          <div className="flex items-center gap-2 mb-4">
            <span className={`text-xs font-mono px-2 py-0.5 rounded-full border ${STATUS_STYLE[project.status]}`}>
              {t(`projects.status.${project.status}`)}
            </span>
            {project.isPrivate && (
              <span className="flex items-center gap-1 text-xs text-textmuted">
                <FiLock size={10} /> {t('projects.private')}
              </span>
            )}
          </div>

          <h2 className="font-mono text-xl font-semibold text-neon mb-1">{project.name}</h2>
          <p className="font-body text-sm text-neon/60 mb-5">
            {lang === 'en' ? (project.taglineEn || project.tagline) : project.tagline}
          </p>

          <p className="font-body text-sm text-textsecond leading-relaxed mb-6">
            {lang === 'en' ? project.descriptionEn : project.description}
          </p>

          {/* Problem + Solution */}
          <div className="grid sm:grid-cols-2 gap-4 mb-4">
            <div className="glass rounded-xl p-4">
              <div className="flex items-center gap-2 mb-2">
                <FiAlertCircle size={13} className="text-amber-400" />
                <span className="font-mono text-xs text-amber-400 uppercase tracking-wider">{t('projects.problem')}</span>
              </div>
              <p className="font-body text-xs text-textsecond leading-relaxed">
                {lang === 'en' ? project.problemEn : project.problem}
              </p>
            </div>
            <div className="glass rounded-xl p-4">
              <div className="flex items-center gap-2 mb-2">
                <FiLayers size={13} className="text-accent" />
                <span className="font-mono text-xs text-accent uppercase tracking-wider">{t('projects.solution')}</span>
              </div>
              <p className="font-body text-xs text-textsecond leading-relaxed">
                {lang === 'en' ? project.solutionEn : project.solution}
              </p>
            </div>
          </div>

          {/* Challenge + Participation */}
          <div className="grid sm:grid-cols-2 gap-4 mb-6">
            <div className="glass rounded-xl p-4">
              <div className="flex items-center gap-2 mb-2">
                <FiZap size={13} className="text-neon" />
                <span className="font-mono text-xs text-neon uppercase tracking-wider">{t('projects.challenge')}</span>
              </div>
              <p className="font-body text-xs text-textsecond leading-relaxed">
                {lang === 'en' ? project.challengeEn : project.challenge}
              </p>
            </div>
            <div className="glass rounded-xl p-4">
              <div className="flex items-center gap-2 mb-2">
                <FiUser size={13} className="text-midpurple" />
                <span className="font-mono text-xs text-midpurple uppercase tracking-wider">{t('projects.participation')}</span>
              </div>
              <p className="font-body text-xs text-textsecond leading-relaxed">
                {lang === 'en' ? project.participationEn : project.participation}
              </p>
            </div>
          </div>

          {/* Techs */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.techs.map(tech => <TechBadge key={tech} name={tech} />)}
          </div>

          {/* CTA */}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-2 text-sm"
            >
              <FiGithub size={15} />
              {t('projects.view_github')}
              <FiExternalLink size={13} />
            </a>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

export default function Projects() {
  const { t } = useTranslation()
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [selected, setSelected] = useState(null)

  return (
    <section id="projects" className="relative py-28 overflow-hidden">
      <div className="absolute top-1/2 right-0 w-72 h-72 rounded-full bg-midpurple/6 blur-3xl pointer-events-none" />

      <div className="section-container" ref={ref}>
        {/* Header */}
        <div className="mb-14">
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            className="inline-flex items-center gap-2 glass px-3 py-1.5 rounded-full mb-5"
          >
            <FiZap size={12} className="text-neon" />
            <span className="font-mono text-xs text-textsecond tracking-wider">{t('projects.tag')}</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="section-title gradient-text whitespace-pre-line"
          >
            {t('projects.title')}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="section-subtitle max-w-xl"
          >
            {t('projects.subtitle')}
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {PROJECTS.map(p => (
            <ProjectCard key={p.id} project={p} onClick={setSelected} />
          ))}
        </div>
      </div>

      {/* Modal */}
      {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
    </section>
  )
}
