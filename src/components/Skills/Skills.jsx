import { useTranslation } from 'react-i18next'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import {
  SiReact, SiJavascript, SiHtml5, SiCss, SiTailwindcss,
  SiNextdotjs, SiExpress,
  SiDjango, SiFlask, SiFastapi, SiNodedotjs, SiPython,
  SiPostgresql, SiMysql, SiSupabase, SiMongodb, SiFirebase,
  SiGit, SiGithub, SiDocker, SiPostman, SiFigma,
  SiRedis, SiRabbitmq, SiApachekafka,
  SiOpencv,
} from 'react-icons/si'
import {
  FiShield, FiLayers, FiCode, FiCpu, FiTerminal,
  FiSmartphone, FiDatabase, FiEye, FiSettings,
  FiGitBranch, FiRefreshCw, FiGrid,
} from 'react-icons/fi'

const SKILLS = {
  frontend: [
    { name: 'React', icon: SiReact, color: '#61DAFB' },
    { name: 'Next.js', icon: SiNextdotjs, color: '#E2E2E2' },
    { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
    { name: 'HTML5', icon: SiHtml5, color: '#E34F26' },
    { name: 'CSS3', icon: SiCss, color: '#1572B6' },
    { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#38BDF8' },
  ],
  mobile: [
    { name: 'React Native', icon: FiSmartphone, color: '#61DAFB' },
  ],
  backend: [
    { name: 'Python', icon: SiPython, color: '#3776AB' },
    { name: 'Django', icon: SiDjango, color: '#44B78B' },
    { name: 'Flask', icon: SiFlask, color: '#E2E2E2' },
    { name: 'FastAPI', icon: SiFastapi, color: '#009688' },
    { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
    { name: 'Express.js', icon: SiExpress, color: '#E2E2E2' },
    // { name: 'Java', icon: FiCpu, color: '#ED8B00' },
    // { name: 'C', icon: FiTerminal, color: '#A8B9CC' },
  ],
  database: [
    { name: 'PostgreSQL', icon: SiPostgresql, color: '#336791' },
    { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
    { name: 'SQL Server', icon: FiDatabase, color: '#CC2927' },
    { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
    { name: 'Firebase', icon: SiFirebase, color: '#FFCA28' },
    { name: 'Supabase', icon: SiSupabase, color: '#3ECF8E' },
  ],
  infra: [
    { name: 'Git', icon: SiGit, color: '#F05032' },
    { name: 'GitHub', icon: SiGithub, color: '#FF5DA8' },
    { name: 'Docker', icon: SiDocker, color: '#2496ED' },
    { name: 'CI/CD', icon: FiGitBranch, color: '#A78BFA' },
    { name: 'Redis', icon: SiRedis, color: '#DC382D' },
    { name: 'RabbitMQ', icon: SiRabbitmq, color: '#FF6600' },
    { name: 'Kafka', icon: SiApachekafka, color: '#E2E2E2' },
    { name: 'Celery', icon: FiSettings, color: '#37B24D' },
    { name: 'Postman', icon: SiPostman, color: '#FF6C37' },
    { name: 'Figma', icon: SiFigma, color: '#F24E1E' },
  ],
  practices: [
    { name: 'APIs REST', icon: FiLayers, color: '#A78BFA' },
    { name: 'Clean Code', icon: FiCode, color: '#FF5DA8' },
    { name: 'MVC / MVT', icon: FiLayers, color: '#E883B5' },
    { name: 'Design Thinking', icon: FiGrid, color: '#F59E0B' },
    { name: 'Agile / Scrum', icon: FiRefreshCw, color: '#10B981' },
  ],
  testing: [
    { name: 'pytest', icon: FiTerminal, color: '#3776AB' },
    { name: 'JUnit', icon: FiCode, color: '#ED8B00' },
  ],
  ai: [
    { name: 'Machine Learning', icon: FiCpu, color: '#FF5DA8' },
    { name: 'Visão Computacional', icon: FiEye, color: '#8B5CF6' },
    { name: 'OpenCV', icon: SiOpencv, color: '#5C3EE8' },
    { name: 'Proc. de Imagem', icon: FiEye, color: '#EC4899' },
  ],
  security: [
    { name: 'JWT Auth', icon: FiShield, color: '#FF5DA8' },
    { name: 'Controle de Acesso', icon: FiShield, color: '#A78BFA' },
    // { name: 'OWASP', icon: FiShield, color: '#E883B5' },
  ],
}

const CATEGORY_LABELS = {
  frontend:  'Frontend',
  mobile:    'Mobile',
  backend:   'Back-End',
  database:  'Banco de Dados',
  infra:     'Infraestrutura & DevOps',
  practices: 'Arquitetura & Práticas',
  testing:   'Testes',
  ai:        'IA & Visão Computacional',
  security:  'Segurança',
}

function SkillCard({ skill, delay }) {
  const Icon = skill.icon
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className="group flex flex-col items-center gap-2.5 p-4 glass rounded-xl hover:border-neon/20 transition-all duration-300 cursor-default"
    >
      <div
        className="w-10 h-10 flex items-center justify-center rounded-lg transition-all duration-300 group-hover:scale-110"
        style={{ background: `${skill.color}18` }}
      >
        <Icon size={22} style={{ color: skill.color }} />
      </div>
      <span className="font-body text-xs text-textsecond group-hover:text-textprimary text-center transition-colors leading-tight">
        {skill.name}
      </span>
    </motion.div>
  )
}

export default function Skills() {
  const { t } = useTranslation()
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="skills" className="relative py-28 overflow-hidden">
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-neon/5 blur-3xl pointer-events-none" />

      <div className="section-container" ref={ref}>
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 glass px-3 py-1.5 rounded-full mb-5"
          >
            <FiCode size={12} className="text-neon" />
            <span className="font-mono text-xs text-textsecond tracking-wider">{t('skills.tag')}</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="section-title gradient-text"
          >
            {t('skills.title')}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="section-subtitle"
          >
            {t('skills.subtitle')}
          </motion.p>
        </div>

        <div className="space-y-10">
          {Object.entries(SKILLS).map(([cat, skills], catIdx) => (
            <motion.div
              key={cat}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: catIdx * 0.04 }}
            >
              <p className="font-mono text-xs text-neon uppercase tracking-widest mb-4">
                — {CATEGORY_LABELS[cat]}
              </p>
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3">
                {skills.map((skill, i) => (
                  <SkillCard key={skill.name} skill={skill} delay={i * 0.05} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
