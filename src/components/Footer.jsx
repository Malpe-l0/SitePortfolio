import { useScrollReveal } from '../hooks/useScrollReveal'
import linkedinIcon from '../assets/social/linkedin.png'
import githubIcon from '../assets/social/github.png'

export default function Footer() {
  const ref = useScrollReveal()
  return (
    <footer ref={ref} id="contatti" className="reveal bg-black py-16 px-10">
      <div className="max-w-[1440px] mx-auto">
        <h2 className="font-bold text-[24px] text-white tracking-[0.47px] mb-4">Contatti</h2>
        <p className="text-[#c5c5c5] text-[14px] leading-[1.6] max-w-[700px] mb-6">
          Sviluppatore Web & Mobile con focus su React e TypeScript. Cerco un tirocinio formativo
          dove contribuire concretamente a progetti reali.
        </p>
        <div className="flex items-center gap-2 mb-8">
          <svg viewBox="0 0 24 24" fill="none" stroke="#c5c5c5" strokeWidth="1.5" className="w-4 h-4 shrink-0">
            <path d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
          </svg>
          <a
            href="mailto:gabrieledimodica04@gmail.com"
            className="text-[#c5c5c5] text-[14px] hover:text-white transition-colors"
          >
            gabrieledimodica04@gmail.com
          </a>
        </div>
        <div className="flex gap-6">
          <a href="https://www.linkedin.com/in/gabriele-di-modica-761517380/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:opacity-70 transition-opacity">
            <img src={linkedinIcon} alt="LinkedIn" className="w-6 h-6 object-contain" />
          </a>
          <a href="https://github.com/Malpe-l0" target="_blank" rel="noreferrer" aria-label="GitHub" className="hover:opacity-70 transition-opacity">
            <img src={githubIcon} alt="GitHub" className="w-6 h-6 object-contain" />
          </a>
        </div>
      </div>
    </footer>
  )
}
