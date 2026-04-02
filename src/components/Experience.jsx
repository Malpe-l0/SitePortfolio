import { useScrollReveal } from '../hooks/useScrollReveal'
import itsLogo from '../assets/experience/its-logo.png'
import appleLogo from '../assets/experience/Parco_Letterario_Giovanni_Verga_e_Luigi_Capuana.png'

const experiences = [
  {
    logo: itsLogo,
    title: 'Percorso ITS Web and Mobile Development',
    period: 'Ott 2024 - In Corso',
    description:
      "Percorso formativo biennale specializzato nello sviluppo web e mobile presso ITS Steve Jobs di Caltagirone. Ho approfondito tecnologie frontend e backend, lavorando su progetti reali in team e acquisendo competenze su React, Node.js, Django e Flutter.",
  },
  {
    logo: appleLogo,
    title: 'Progetto di Gruppo – Portale Web Istituzionale',
    period: '2024',
    description:
      "Sviluppo collaborativo di un portale web istituzionale con Django e Python per un progetto di cooperazione tra comuni siciliani. Ruolo: sviluppo frontend delle pagine e integrazione con il backend Django. Team di 4 persone, gestione del codice con Git (branch, pull request, merge).",
  },
]

export default function Experience() {
  const ref = useScrollReveal()
  return (
    <section ref={ref} id="esperienze" className="reveal py-20 flex flex-col items-center">
      <h2
        className="font-extrabold text-[35px] uppercase tracking-wide mb-12 bg-clip-text text-transparent"
        style={{ backgroundImage: 'linear-gradient(180deg, #5BADFF, #1373D1)' }}
      >
        Esperienze
      </h2>
      <div className="flex flex-col gap-10 max-w-[810px] w-full px-4">
        {experiences.map((exp) => (
          <div key={exp.title} className="flex gap-5">
            <div className="shrink-0 w-10 h-10 mt-1">
              <img src={exp.logo} alt={exp.title} className="w-full h-full object-contain rounded-[4px]" />
            </div>
            <div className="flex-1">
              <div className="flex items-start justify-between gap-4 mb-2">
                <h3 className="font-bold text-[18px] text-white leading-tight">{exp.title}</h3>
                <span className="text-[#8491a0] text-[14px] whitespace-nowrap shrink-0">{exp.period}</span>
              </div>
              <p className="text-[#8491a0] text-[14px] leading-[1.6]">{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
