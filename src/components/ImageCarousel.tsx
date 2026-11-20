import { useEffect, useState } from 'react'

const files = import.meta.glob<string>('../assets/carrossel/*.{jpg,jpeg,png,webp,avif}', {
  eager: true,
  import: 'default',
})

const slides = Object.entries(files)
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([path, src]) => ({
    src,
    // texto alternativo gerado a partir do nome do arquivo: "02-podio-monza.jpg" → "podio monza"
    alt: decodeURIComponent(path.split('/').pop() ?? '')
      .replace(/\.[^.]+$/, '')
      .replace(/^\d+[-_ ]*/, '')
      .replace(/[-_]+/g, ' '),
  }))

const INTERVAL_MS = 5000

export default function ImageCarousel({ className = '' }: { className?: string }) {
  const [current, setCurrent] = useState(0)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    if (paused || slides.length < 2) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const id = setTimeout(() => setCurrent((i) => (i + 1) % slides.length), INTERVAL_MS)
    return () => clearTimeout(id)
  }, [current, paused])

  if (slides.length === 0) return null

  const go = (i: number) => setCurrent((i + slides.length) % slides.length)

  return (
    <div
      className={`group relative aspect-656/300 w-full max-w-164 overflow-hidden rounded-xl bg-b2 ${className}`}
      role="region"
      aria-roledescription="carrossel"
      aria-label="Galeria de imagens"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      {slides.map((slide, i) => (
        <img
          key={slide.src}
          src={slide.src}
          alt={slide.alt}
          aria-hidden={i !== current}
          className={`absolute inset-0 size-full object-cover transition-opacity duration-700 ${
            i === current ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}

      {slides.length > 1 && (
        <>
          <button
            type="button"
            onClick={() => go(current - 1)}
            aria-label="Imagem anterior"
            className="absolute top-1/2 left-3 flex size-9 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-b1/60 text-c1 opacity-0 backdrop-blur transition group-hover:opacity-100 hover:bg-P1 focus-visible:opacity-100 max-md:opacity-100"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-4" aria-hidden="true">
              <path d="m15 6-6 6 6 6" />
            </svg>
          </button>
          <button
            type="button"
            onClick={() => go(current + 1)}
            aria-label="Próxima imagem"
            className="absolute top-1/2 right-3 flex size-9 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-b1/60 text-c1 opacity-0 backdrop-blur transition group-hover:opacity-100 hover:bg-P1 focus-visible:opacity-100 max-md:opacity-100"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-4" aria-hidden="true">
              <path d="m9 6 6 6-6 6" />
            </svg>
          </button>

          <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-2">
            {slides.map((slide, i) => (
              <button
                key={slide.src}
                type="button"
                onClick={() => go(i)}
                aria-label={`Ir para imagem ${i + 1}`}
                aria-current={i === current}
                className={`h-1.5 cursor-pointer rounded-full transition-all ${
                  i === current ? 'w-6 bg-P4' : 'w-1.5 bg-c1/60 hover:bg-c1'
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  )
}
