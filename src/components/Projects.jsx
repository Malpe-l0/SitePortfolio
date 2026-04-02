import { useScrollReveal } from '../hooks/useScrollReveal'
import verismoThumb from '../assets/projects/VERISMO.png'
import project2 from '../assets/projects/fnatic-site.png'

const projects = [
  {
    title: 'Parco del Verismo',
    subtitle: 'Clicca per visitare',
    thumbnail: verismoThumb,
    url: 'https://parcovergacapuana.it/',
  },
  {
    title: 'Fnatic Site',
    subtitle: 'Clicca per visitare',
    thumbnail: project2,
    url: 'https://fnatic-site.vercel.app/',
  },
]

export default function Projects() {
  const ref = useScrollReveal()
  return (
    <section ref={ref} id="progetti" className="reveal py-20 flex flex-col items-center">
      <h2
        className="font-extrabold text-[35px] uppercase tracking-wide mb-12 bg-clip-text text-transparent"
        style={{ backgroundImage: 'linear-gradient(180deg, #FF8660, #D5491D)' }}
      >
        Progetti
      </h2>
      <div className="flex flex-wrap gap-8 justify-center">
        {projects.map((project) => (
          <a
            key={project.title}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative w-full max-w-[416px] h-[301px] rounded-[18px] overflow-hidden bg-[var(--card-color)] block"
          >
            <img
              src={project.thumbnail}
              alt={project.title}
              className="w-full h-[78%] object-cover rounded-t-[18px]"
            />
            <div className="absolute bottom-0 left-0 right-0 h-[22%] flex items-center px-5 justify-between">
              <div>
                <p className="text-[10px] text-[#c5c5c5] uppercase leading-tight">{project.subtitle}</p>
                <p className="text-[19px] font-extrabold text-white uppercase leading-tight">{project.title}</p>
              </div>
              <div className="w-7 h-7 flex items-center justify-center opacity-60 group-hover:opacity-100 transition-opacity">
                <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" className="w-5 h-5">
                  <path d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
