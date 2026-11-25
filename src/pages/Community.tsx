import { useEffect, useState, type CSSProperties } from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import Header from '../components/Header'

const WHATSAPP_URL = 'https://chat.whatsapp.com/JF7Le0SvI3JBr0jhqOwIGj'

// Edite, adicione ou remova regras aqui: a numeração é automática.
const rules = [
  {
    title: 'Respeito acima de tudo',
    description: 'Zoeira faz parte, ataque pessoal não. Racismo, homofobia, machismo ou qualquer preconceito é ban direto.',
  },
  {
    title: 'O assunto é Ferrari e F1',
    description: 'Um papo paralelo acontece, mas política, religião e brigas de fora ficam fora do grupo.',
  },
  {
    title: 'Rival é bem-vindo, hater não',
    description: 'Torce para outra equipe? Pode entrar na resenha. Só não venha para atrapalhar quem está sofrendo.',
  },
  {
    title: 'Sem spam',
    description: 'Nada de propaganda, correntes, rifas, golpes ou links suspeitos.',
  },
  {
    title: 'Sem conteúdo impróprio',
    description: 'Nada de pornografia, violência explícita ou exposição de dados e conversas de outras pessoas.',
  },
  {
    title: 'A palavra final é dos ADMs',
    description: 'Viu algo errado? Chame um ADM no privado. Quem descumprir as regras pode ser removido.',
  },
]

export default function Community() {
  const [accepted, setAccepted] = useState(false)

  useEffect(() => {
    const previousTitle = document.title
    document.title = 'Comunidade e regras · Crise na Ferrari'
    window.scrollTo(0, 0)
    return () => {
      document.title = previousTitle
    }
  }, [])

  return (
    <div className="flex min-h-dvh flex-col bg-b1">
      <Header />

      <main className="container m-auto grid flex-1 content-start gap-12 px-4 py-12 max-md:gap-8 max-md:py-8 lg:grid-cols-[2fr_3fr] lg:gap-16">
        <div className="lg:sticky lg:top-12 lg:self-start">
          <Link to="/" className="fade-in font-sans text-sm text-c5 transition-colors hover:text-c1">
            ← Voltar
          </Link>
          <span className="fade-in stagger-1 mt-8 flex items-center gap-3 font-sans text-xs tracking-widest text-c5 uppercase">
            <span className="size-2 rounded-full bg-P4" aria-hidden="true" />
            Rispetto prima di tutto
          </span>
          <h1 className="fade-in stagger-2 mt-2 mb-4 font-display text-7xl font-bold text-balance text-c1 max-md:text-5xl">
            Antes de entrar.
          </h1>
          <div className="fade-in stagger-3 flex flex-col gap-4 font-sans text-base leading-relaxed text-c5">
            <p>
              Os Burrinhos de Maranello são um grupo de torcedores da Ferrari no WhatsApp. Aqui a gente
              comenta as corridas, reclama da estratégia, comemora quando dá e sofre junto quando não dá.
            </p>
            <p>Para a resenha continuar boa para todo mundo, leia as regras antes de entrar.</p>
          </div>
        </div>

        <section aria-labelledby="regras">
          <h2 id="regras" className="fade-in stagger-2 font-sans text-xs tracking-widest text-c5 uppercase">
            Regras do grupo
          </h2>

          <ol className="mt-4 flex flex-col border-t border-b3">
            {rules.map((rule, i) => (
              <li
                key={rule.title}
                className="fade-in flex gap-6 border-b border-b3 py-5"
                style={{ '--stagger': i + 3 } as CSSProperties}
              >
                <span className="pt-2 font-mono text-xs text-c5" aria-hidden="true">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div className="flex flex-col gap-1">
                  <h3 className="font-display text-2xl font-semibold text-c1">{rule.title}</h3>
                  <p className="font-sans text-sm leading-relaxed text-c5">{rule.description}</p>
                </div>
              </li>
            ))}
          </ol>

          <div className="fade-in stagger-9 mt-8 flex flex-col gap-4">
            <label className="flex cursor-pointer items-center gap-3 font-sans text-sm text-c1">
              <input
                type="checkbox"
                checked={accepted}
                onChange={(e) => setAccepted(e.target.checked)}
                className="size-5 shrink-0 cursor-pointer accent-P1"
              />
              Li e concordo com as regras do grupo
            </label>

            {accepted ? (
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                className="rounded-xl bg-P1 px-6 py-4 text-center font-display text-2xl font-semibold text-c1 transition-colors hover:bg-P2"
              >
                Entrar no grupo do WhatsApp
              </a>
            ) : (
              <button
                type="button"
                disabled
                className="cursor-not-allowed rounded-xl bg-b3 px-6 py-4 font-display text-2xl font-semibold text-c5"
              >
                Entrar no grupo do WhatsApp
              </button>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
