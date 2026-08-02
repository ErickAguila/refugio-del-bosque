import { Footer } from './components/footer'
import { Header } from './components/header'
import { Benefits } from './components/benefits'
import { Cabins } from './components/service'
import { Contact } from './components/contact'
import { Gallery } from './components/gallery'
import { Hero } from './components/hero'
import { Introduction } from './components/introduction'
import { WhatsappButton } from './components/whatsappButton'

function App() {
  return (
    <>
      <a className="skip-link" href="#contenido">Saltar al contenido</a>
      <Header />
      <main id="contenido">
        <Hero />
        <Introduction />
        <Cabins />
        <Benefits />
        <Gallery />
        <Contact />
      </main>
      <Footer />
      <WhatsappButton />
    </>
  )
}

export default App
