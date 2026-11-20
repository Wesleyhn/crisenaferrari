import type { ReactNode } from 'react'

type Social = {
  label: string
  href: string
  icon: ReactNode
}

// Troque os href pelos links reais das redes.
const socials: Social[] = [
  {
    label: 'Instagram',
    href: '#',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-5">
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
      </svg>
    ),
  },
  {
    label: 'X',
    href: '#',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="size-5">
        <path d="M17.75 3h3.07l-6.7 7.66L22 21h-6.17l-4.83-6.32L5.47 21H2.4l7.17-8.2L2 3h6.33l4.37 5.77zm-1.08 16.18h1.7L7.4 4.73H5.58z" />
      </svg>
    ),
  },
]

export default function Footer({ className = '' }: { className?: string }) {
  return (
    <footer className={`bg-b1 border-t border-c5 ${className}`}>
      <div className="container m-auto flex items-center justify-between gap-6 px-4 py-8 max-md:flex-col max-md:text-center">
        <div className="flex flex-col gap-3 max-md:items-center">
          <span className="font-sans text-sm font-medium tracking-wider text-c1 uppercase">
            Sempre Ferrari.
          </span>
          <div className="flex h-0.75 w-18" aria-hidden="true">
            <span className="flex-1 bg-P6" />
            <span className="flex-1 bg-c1" />
            <span className="flex-1 bg-P1" />
          </div>
        </div>

        <p className="font-sans text-xs tracking-widest text-c5 uppercase">
          Conceito não oficial · Para os tifosi
        </p>

        <ul className="flex gap-4">
          {socials.map((s) => (
            <li key={s.label}>
              <a
                href={s.href}
                aria-label={s.label}
                target="_blank"
                rel="noreferrer"
                className="flex size-14 items-center justify-center rounded-full border border-b4 text-c1 transition-colors hover:border-P1 hover:bg-P1"
              >
                {s.icon}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  )
}
