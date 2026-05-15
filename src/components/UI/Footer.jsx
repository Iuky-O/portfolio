import { FiGithub, FiLinkedin, FiHeart } from 'react-icons/fi'

export default function Footer() {
  return (
    <footer className="relative py-10 border-t border-white/5">
      <div className="section-container flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="font-display text-lg gradient-text font-semibold">
          Iumy/IukyO<span className="text-neon">.</span>
        </span>

        <p className="font-body text-xs text-textmuted flex items-center gap-1.5">
          Feito com <FiHeart size={11} className="text-neon" /> por Iumy Pimentel
        </p>

        <div className="flex items-center gap-3">
          <a
            href="https://github.com/Iuky-O"
            target="_blank"
            rel="noopener noreferrer"
            className="text-textmuted hover:text-neon transition-colors"
            aria-label="GitHub"
          >
            <FiGithub size={16} />
          </a>
          <a
            href="https://www.linkedin.com/in/iumy-pimentel/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-textmuted hover:text-neon transition-colors"
            aria-label="LinkedIn"
          >
            <FiLinkedin size={16} />
          </a>
        </div>
      </div>
    </footer>
  )
}
