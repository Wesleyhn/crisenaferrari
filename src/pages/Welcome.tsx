import Footer from '../components/Footer'
import ImageCarousel from '../components/ImageCarousel'
import LinkCards from '../components/LinkCards'

export default function Welcome() {
  return (
    <main className="bg-b1 ">
      <section className="border-b border-c5">
        <div className="fade-in flex items-center justify-between container m-auto px-4 py-6 max-md:py-4">
          <h1 className="text-4xl max-md:text-lg font-display font-bold text-c1 uppercase">Crise na Ferrari</h1>
          <p className="text-xs font-sans uppercase text-c5">Burrinhos de Maranello</p>
        </div>
      </section>
      <section className="container flex max-md:flex-col m-auto px-4 my-12 py-6 max-md:py-4  gap-4 justify-around">

        <div className="flex flex-col gap-4 max-md:flex-col-reverse">
          <div className="text-balance">
            <span className="fade-in stagger-1 flex items-center gap-3 text-c5 text-xs uppercase tracking-widest font-sans">
              <span className="size-2 rounded-full bg-P4" aria-hidden="true" />
              Passione senza fine
            </span>
            <h1 className="fade-in stagger-2 text-c1 font-display font-bold text-8xl max-md:text-4xl mt-2 mb-4">A paixão nos move.</h1>
            <p className="fade-in stagger-3 text-c5 font-sans text-sm">O corno do ADM 2 ainda está desenvolvendo esse site. Aguardem novidades.</p>
          </div>
          <ImageCarousel className="fade-in stagger-4" />
        </div>

        <div className="flex flex-col justify-center min-lg:m-auto">
          <LinkCards />
        </div>
      </section>
      <Footer className="fade-in stagger-7" />
    </main>
  )
}
