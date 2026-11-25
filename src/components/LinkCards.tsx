import type { CSSProperties } from 'react'
import { Link } from 'react-router-dom'

type LinkItem = {
  title: string
  description: string
  href: string
}

// Card de destaque (vermelho). Troque textos e href à vontade.
const featured = {
  eyebrow: 'Seja um burrinho de Maranello',
  title: 'Faça parte da resenha',
  description: 'Conheça as regras e entre no nosso grupo do WhatsApp.',
  to: '/comunidade',
}

// Cards da lista: a numeração (01, 02...) é gerada automaticamente.
const links: LinkItem[] = [
  { title: 'Race Quizz', description: 'Desafio de conhecimento sobre F1 no geral', href: 'https://race-quiz-beta.netlify.app' },
  { title: 'Botão inútil', description: 'Um dia vai ter alguma coisa funcionando aqui', href: '#' },
]

export default function LinkCards() {
  return (
    <nav aria-labelledby="destinos" className="flex w-full flex-col gap-4 lg:w-md">
      <span id="destinos" className="fade-in stagger-2 font-sans text-xs tracking-widest text-c5 uppercase">
        Destinos para os tifosi
      </span>

      <Link
        to={featured.to}
        className="fade-in stagger-3 group flex flex-col rounded-xl bg-P1 p-6 text-c1 transition-colors hover:bg-P2"
      >
        <span className="flex items-center justify-between font-sans text-xs tracking-widest uppercase">
          {featured.eyebrow}
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            aria-hidden="true"
          >
            <path d="M7 17 17 7M8 7h9v9" />
          </svg>
        </span>
        <span className="mt-6 font-display text-4xl font-semibold max-md:text-3xl">
          {featured.title}
        </span>
        <span className="mt-1 font-sans text-sm">{featured.description}</span>
      </Link>

      <ul className="flex flex-col gap-4">
        {links.map((link, i) => (
          <li
            key={link.title}
            className="fade-in"
            // cada card entra um pouco depois do anterior
            style={{ '--stagger': i + 4 } as CSSProperties}
          >
            <a
              href={link.href}
              className="group flex items-center gap-6 rounded-xl border border-b3 bg-b2 px-6 py-5 transition-colors hover:border-b4 hover:bg-b3"
            >
              <span className="font-mono text-xs text-c5">
                {String(i + 1).padStart(2, '0')}
              </span>
              <span className="flex flex-1 flex-col gap-1">
                <span className="font-display text-2xl font-semibold text-c1">{link.title}</span>
                <span className="font-sans text-sm text-c5">{link.description}</span>
              </span>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="size-4 text-c1 transition-transform group-hover:translate-x-1"
                aria-hidden="true"
              >
                <path d="m9 6 6 6-6 6" />
              </svg>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
