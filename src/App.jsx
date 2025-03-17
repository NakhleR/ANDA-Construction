import About from "./components/About"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Portfolio from "./components/Porfolio"
import Projects from "./components/Projects"
import Services from "./components/Services"
import StickyHighlights from "./components/StickyHighlights"

const App = () => {

  return (
    <main>
      <Navbar />
      <Hero />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </main >
  )
}

export default App
