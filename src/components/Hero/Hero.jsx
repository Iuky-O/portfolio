import { useEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiArrowDown } from 'react-icons/fi'
import { HiOutlineDownload } from 'react-icons/hi'
import cvPT from '../../assets/IUMY PIMENTEL - PTBR.pdf'
import cvEN from '../../assets/IUMY PIMENTEL - EN.pdf'

function ParticleCanvas() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let animId
    let particles = []

    const resize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }
    resize()
    window.addEventListener('resize', resize)

    class Particle {
      constructor() { this.reset() }
      reset() {
        const COLORS = ['#FF5DA8', '#FF85B7', '#FFB7D5', '#E883B5', '#FF9EC4', '#FFCCE0']
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.vx = (Math.random() - 0.5) * 0.4
        this.vy = -Math.random() * 0.6 - 0.1
        this.alpha = Math.random() * 0.45 + 0.1
        this.size = Math.random() * 2.5 + 0.8
        this.rotation = Math.random() * Math.PI * 2
        this.rotSpeed = (Math.random() - 0.5) * 0.04
        this.color = COLORS[Math.floor(Math.random() * COLORS.length)]
      }
      update() {
        this.x += this.vx
        this.y += this.vy
        this.rotation += this.rotSpeed
        this.alpha -= 0.0008
        if (this.alpha <= 0 || this.y < -10) this.reset()
      }
      draw() {
        ctx.save()
        ctx.globalAlpha = this.alpha
        ctx.fillStyle = this.color
        ctx.shadowBlur = 8
        ctx.shadowColor = this.color
        ctx.translate(this.x, this.y)
        ctx.rotate(this.rotation)
        ctx.beginPath()
        ctx.ellipse(0, 0, this.size * 0.7, this.size * 1.3, 0, 0, Math.PI * 2)
        ctx.fill()
        ctx.restore()
      }
    }

    for (let i = 0; i < 60; i++) particles.push(new Particle())

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      particles.forEach(p => { p.update(); p.draw() })
      animId = requestAnimationFrame(animate)
    }
    animate()

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return <canvas ref={canvasRef} id="particle-canvas" className="absolute inset-0 w-full h-full" />
}

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
})

export default function Hero() {
  const { t } = useTranslation()

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20">
      {/* Background layers */}
      <div className="absolute inset-0 bg-hero-mesh" />
      <div className="absolute inset-0" style={{
        background: 'radial-gradient(ellipse 80% 50% at 50% 60%, rgba(255,93,168,0.15) 0%, transparent 70%)',
      }} />

      {/* Decorative rings */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none" aria-hidden>
        <div className="w-[600px] h-[600px] rounded-full border border-neon/5 animate-spin-slow" />
        <div className="absolute w-[400px] h-[400px] rounded-full border border-accent/5" style={{ animation: 'spin 30s linear infinite reverse' }} />
        <div className="absolute w-[800px] h-[800px] rounded-full border border-midpurple/5 animate-spin-slow" />
      </div>

      {/* Glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full bg-neon/8 blur-3xl animate-glow-pulse" aria-hidden />
      <div className="absolute bottom-1/3 right-1/4 w-52 h-52 rounded-full bg-neon/5 blur-3xl animate-glow-pulse" style={{ animationDelay: '1.5s' }} aria-hidden />
      <div className="absolute top-2/3 left-1/2 w-40 h-40 rounded-full bg-midpurple/6 blur-3xl animate-glow-pulse" style={{ animationDelay: '3s' }} aria-hidden />

      <ParticleCanvas />

      {/* Content */}
      <div className="relative z-10 section-container flex flex-col items-center text-center">
        {/* Badge */}
        <motion.div {...fadeUp(0.1)} className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-8">
          <span className="w-2 h-2 rounded-full bg-neon animate-pulse" />
          <span className="font-mono text-xs text-textsecond tracking-wider">
            {t('hero.role')}
          </span>
        </motion.div>

        {/* Greeting */}
        <motion.p {...fadeUp(0.2)} className="font-body text-textsecond text-lg mb-2">
          {t('hero.greeting')}
        </motion.p>

        {/* Name */}
        <motion.h1
          {...fadeUp(0.3)}
          className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold leading-none mb-6"
        >
          <span className="gradient-text">Iumy</span>
          <br />
          <span className="text-textprimary">Pimentel</span>
        </motion.h1>

        {/* Description */}
        <motion.p
          {...fadeUp(0.45)}
          className="font-body text-textsecond text-base sm:text-lg max-w-xl leading-relaxed mb-10"
        >
          {t('hero.description')}
        </motion.p>

        {/* CTAs */}
        <motion.div {...fadeUp(0.55)} className="flex flex-wrap items-center justify-center gap-3 mb-10">
          <button
            className="btn-primary"
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
          >
            {t('hero.cta_projects')}
          </button>
          <button
            className="btn-outline"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            {t('hero.cta_contact')}
          </button>
          <a
            href={cvPT}
            download="Iumy_Pimentel_CV_PT.pdf"
            className="btn-outline flex items-center gap-2"
          >
            <HiOutlineDownload size={15} />
            {t('hero.cta_cv_pt')}
          </a>
          <a
            href={cvEN}
            download="Iumy_Pimentel_CV_EN.pdf"
            className="btn-outline flex items-center gap-2"
          >
            <HiOutlineDownload size={15} />
            {t('hero.cta_cv_en')}
          </a>
        </motion.div>

        {/* Social links */}
        <motion.div {...fadeUp(0.65)} className="flex items-center gap-4 mb-16">
          <a
            href="https://github.com/Iuky-O"
            target="_blank"
            rel="noopener noreferrer"
            className="glass p-3 rounded-full text-textsecond hover:text-neon hover:shadow-neon-sm transition-all duration-300 hover:-translate-y-0.5"
            aria-label="GitHub"
          >
            <FiGithub size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/iumy-pimentel/"
            target="_blank"
            rel="noopener noreferrer"
            className="glass p-3 rounded-full text-textsecond hover:text-neon hover:shadow-neon-sm transition-all duration-300 hover:-translate-y-0.5"
            aria-label="LinkedIn"
          >
            <FiLinkedin size={18} />
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="flex flex-col items-center gap-2 text-textmuted"
        >
          <span className="font-body text-xs tracking-widest uppercase">{t('hero.scroll')}</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <FiArrowDown size={16} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
