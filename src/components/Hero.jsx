import avatar from '../assets/Ritratto.jpeg'
import FaultyTerminal from './FaultyTerminal/FaultyTerminal'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center pt-[82px] px-4">
      {/* FaultyTerminal background */}
      <div className="absolute inset-0 z-0">
        <FaultyTerminal
          scale={1}
          digitSize={1.5}
          scanlineIntensity={0.3}
          glitchAmount={1}
          flickerAmount={1}
          noiseAmp={0}
          chromaticAberration={0}
          dither={0}
          curvature={0.2}
          tint="#ffffff"
          mouseReact
          mouseStrength={0.2}
          brightness={1}
        />
      </div>
      {/* Content overlay */}
      <div className="relative z-10 flex flex-col items-center w-full">
      {/* Avatar */}
      <div className="mb-6">
        <img
          src={avatar}
          alt="Gabriele Di Modica"
          className="w-[160px] h-[160px] sm:w-[200px] sm:h-[200px] rounded-full object-cover shadow-[0_4px_4px_rgba(0,0,0,0.25)]"
        />
      </div>

      {/* Title */}
      <h1 className="text-[36px] sm:text-[46px] md:text-[55px] font-extrabold text-center leading-[1.15] mb-6">
        <span className="text-white">Scrivo codice e</span>
        <br />
        <span className="text-white">creo contenuti </span>
        <span
          className="bg-clip-text text-transparent"
          style={{ backgroundImage: 'linear-gradient(158deg, #0575E6 71%, #021B79 95%)' }}
        >
          su di esso!
        </span>
      </h1>

      {/* Bio */}
      <p className="text-[#c5c5c5] text-[16px] sm:text-[18px] font-light text-center tracking-[0.36px] leading-normal max-w-[680px] mb-10">
        Credo che il codice migliore nasca dalla collaborazione e dall'applicazione concreta su progetti reali.
        <br className="hidden sm:block" />
        Sviluppatore Web & Mobile con focus su React e TypeScript, lavoro in team con Git e metodologie Agile.
      </p>

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full sm:w-auto items-center">
        <a
          href="#contatti"
          className="w-full sm:w-auto text-center px-8 py-4 bg-white text-[#161513] font-semibold text-[16px] sm:text-[18px] rounded-full border border-white hover:bg-opacity-90 transition-all"
        >
          Contattami
        </a>
        <a
          href="/cv.pdf"
          download
          className="w-full sm:w-auto text-center px-8 py-4 text-white font-semibold text-[16px] sm:text-[18px] rounded-full border-2 border-white hover:bg-white hover:text-[#161513] transition-all"
        >
          Scarica CV
        </a>
      </div>
      </div>
    </section>
  )
}
