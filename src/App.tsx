import { Header } from './components/header'
import { Hero } from './components/hero'
import { Service } from './components/service'
import { Contact } from './components/contact'
import { Footer } from './components/footer'

function App() {
  return (
    <>
      <Header />
      <main className='bg-stone-200'>
        <Hero />
        <Service />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
