import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./pages/About"
import Work from "./pages/Work"
import Services from "./pages/Services"
import Contact from "./pages/Contact"

function App() {
  return (
    <div className="bg-black min-h-screen">
      <Navbar />
      <main>
        <div id="hero"><Hero /></div>
        <div id="about"><About /></div>
        <div id="work"><Work /></div>
        <div id="services"><Services /></div>
        <div id="contact"><Contact /></div>
      </main>
    </div>
  )
}

export default App
