import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Village from './pages/Village.jsx'
import Resources from './pages/Resources.jsx'
import Chatbruti from './components/Chatbruti.jsx'

function App() {
  return (
    <>
      <header className="topbar">
        <h1>Village Numérique Résistant</h1>
        <nav>
          <Link to="/">Accueil</Link>
          <Link to="/village">Village</Link>
          <Link to="/ressources">Ressources libres</Link>
        </nav>
      </header>

      <main className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/village" element={<Village />} />
          <Route path="/ressources" element={<Resources />} />
        </Routes>
      </main>

      <Chatbruti />
    </>
  )
}

export default App