import django from '../assets/skills/django.svg'
import nodejs from '../assets/skills/Node.js_logo.svg.png'
import react from '../assets/skills/React-icon.svg.png'
import tailwind from '../assets/skills/Tailwind_CSS_Logo.svg.png'
import flutter from '../assets/skills/flutter-logo-sharing.png'
import mysql from '../assets/skills/logo-mysql-170x115.png'
import java from '../assets/skills/java-programming-language-java-logo-free-png.png'
import mongodb from '../assets/skills/MongoDB_Logomark_ForestGreen.png'
import angular from '../assets/skills/angular_white.png'

import { useScrollReveal } from '../hooks/useScrollReveal'

const skills = [
  { name: 'Django', src: django },
  { name: 'Node.js', src: nodejs },
  { name: 'React', src: react },
  { name: 'Tailwind CSS', src: tailwind },
  { name: 'Flutter', src: flutter },
  { name: 'Java', src: java },
  { name: 'MongoDB', src: mongodb },
  { name: 'MySQL', src: mysql },
  { name: 'Angular', src: angular },
]

export default function Skills() {
  const ref = useScrollReveal()
  return (
    <section ref={ref} id="skills" className="reveal py-20 flex flex-col items-center">
      <p className="text-[#c5c5c5] font-semibold text-[20px] tracking-[2.4px] uppercase mb-10">
        Conoscenza di
      </p>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-x-12 gap-y-10 max-w-[900px] place-items-center">
        {skills.map((skill) => (
          <div key={skill.name} className="flex items-center justify-center">
            <img
              src={skill.src}
              alt={skill.name}
              className="h-10 md:h-12 w-auto object-contain"
              title={skill.name}
            />
          </div>
        ))}
      </div>
    </section>
  )
}
