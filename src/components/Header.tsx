import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className="border-b border-c5">
      <div className="fade-in flex items-center justify-between container m-auto px-4 py-6 max-md:py-4">
        <Link to="/" className="text-4xl max-md:text-lg font-display font-bold text-c1 uppercase">
          Crise na Ferrari
        </Link>
        <p className="text-xs font-sans uppercase text-c5">Burrinhos de Maranello</p>
      </div>
    </header>
  )
}
