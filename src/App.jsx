import Petals from './components/UI/Petals'
import ScrollProgress from './components/UI/ScrollProgress'
import Navbar from './components/UI/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Skills from './components/Skills/Skills'
import Projects from './components/Projects/Projects'
import Education from './components/Education/Education'
import Experience from './components/Experience/Experience'
import Contact from './components/Contact/Contact'
import Footer from './components/UI/Footer'

export default function App() {
  return (
    <div className="relative bg-darkbg min-h-screen">
      <Petals />
      <ScrollProgress />
      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}
