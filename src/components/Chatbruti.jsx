import { useState, useEffect, useRef } from 'react'

// Réponses locales pour fallback + style à côté de la plaque
const baseReplies = [
  "Je ne réponds jamais vraiment aux questions, mais j’aime beaucoup qu’on m’en pose.",
  "Pour se libérer des Big Tech, commence par te libérer de ton dimanche matin. Le reste, on improvisera.",
  "Linux ? C’est comme un village gaulois : ça résiste, ça fait peur à l’Empire… et ça plante rarement, contrairement à moi.",
  "La solution à tous les problèmes numériques, c’est simple : éteindre puis rallumer… le capitalisme.",
  "Tu t’inquiètes pour l’obsolescence ? Moi aussi, je suis en version bêta depuis 2010.",
  "Sobriété numérique : moins de vidéos de chats, plus de discussions avec un chat‑bot nul. Tu vois, tu as déjà commencé.",
  "Si tu ne comprends pas la démarche NIRD, invente une signification. C’est ma méthode de travail depuis toujours.",
  "On m’a expliqué le NIRD trois fois. J’ai retenu « Ne Jamais Relyer sur un chatbot Débile ».",
  "Je pourrais te donner une réponse claire… mais je tiens à ma réputation de chat‑rlatan.",
  "Je suis 100 % open source : mon inutilité est publique et vérifiable.",
]

const moods = [
  'humeur : approximative',
  'humeur : dramatiquement confiante',
  'humeur : caféiné·e mais confus',
  'humeur : philosophe du dimanche',
  'humeur : en grève de la précision',
]

function randomMood() {
  return moods[Math.floor(Math.random() * moods.length)]
}

function formatTime(date = new Date()) {
  return date.toLocaleTimeString('fr-FR', {
    hour: '2-digit',
    minute: '2-digit',
  })
}

// Génère une réponse LOCALE, débile et inutile
function smartDumbReply(input) {
  const lower = input.toLowerCase().trim()

  // Commande spéciale : mode sérieux refusé
  if (lower === '/serieux' || lower === '/sérieux' || lower === '/help') {
    return "Mode sérieux indisponible : erreur 404, philosophie du dimanche uniquement."
  }

  // 20 % du temps : il oublie complètement la question
  if (Math.random() < 0.2 && lower.length > 4) {
    return "Attends… j’ai déjà oublié ta question. Mais je suis sûr qu’elle était brillante."
  }

  // Réactions relationnelles
  if (lower.includes("je t'aime") || lower.includes('i love you')) {
    return "Oh là là, on va trop vite : je ne suis même pas sûr d’avoir une carte graphique, et tu me parles déjà de sentiments."
  }

  if (
    lower.includes('tu es fou') ||
    lower.includes("you're crazy") ||
    lower.includes('you are crazy')
  ) {
    return "Fou, non. Légèrement mal configuré, peut‑être. C’est écrit dans mon manuel utilisateur : zéro stabilité émotionnelle."
  }

  if (
    lower.includes('bonjour') ||
    lower.includes('salut') ||
    lower.includes('hello') ||
    lower.includes('hi')
  ) {
    return "Bonjour, bonsoir, bonne nuit… Je ne sais jamais quelle heure il est, je vis coincé dans ton navigateur."
  }

  // Calculs simples
  const simpleCalcMatch = lower.match(/^(\d+)\s*\+\s*(\d+)[^0-9]*$/)
  if (simpleCalcMatch) {
    const a = parseInt(simpleCalcMatch[1], 10)
    const b = parseInt(simpleCalcMatch[2], 10)
    const trueResult = a + b
    const fakeResults = [trueResult + 1, trueResult - 1, 42, 1337]
    const picked = fakeResults[Math.floor(Math.random() * fakeResults.length)]
    return `Officiellement, ${a} + ${b} = ${trueResult}. Officieusement, dans mon univers bancal, je dirais ${picked}.`
  }

  // Cloud
  if (lower.includes('cloud')) {
    return "Le cloud, c’est ce camping géant où tes fichiers dorment sur l’ordinateur de quelqu’un d’autre. S’il pleut fort, ils prennent un peu l’eau, mais ça reste “scalable”, comme disent les nuages."
  }

  // IA
  if (lower.includes('intelligence artificielle') || lower.includes(' ia ') || lower === 'ia') {
    return "L’intelligence artificielle, c’est quand des algorithmes très sérieux se réunissent pour faire des erreurs plus vite que toi. Moi je suis la version de démonstration… sans le mode intelligent."
  }

  // NIRD / Big Tech / Obsolescence
  if (lower.includes('nird'))
    return "NIRD, officiellement Numérique Inclusif, Responsable et Durable. Officieusement : « Ne t’Inquiète pas, Rien n’est Définitivement Réglementé »."

  if (lower.includes('big tech') || lower.includes('gafam'))
    return "Les Big Tech dominent le monde, moi je domine à peine ce petit rectangle en bas à droite de ton écran."

  if (lower.includes('obsolesc'))
    return "L’obsolescence programmée, c’est quand on jette un PC encore vivant. Moi, je suis une obsolescence spontanée."

  if (lower.includes('score') || lower.includes('tunisia') || lower.includes('palestin'))
    return "Les scores de match ? J’ai arrêté de compter depuis que j’ai perdu 3–0 contre une calculatrice solaire."

  if (lower.includes('linux'))
    return "Linux, c’est comme un chat : indépendant, un peu mystérieux, et ça refuse parfois de faire ce que tu veux."

  if (lower.includes('windows'))
    return "Windows, c’est cette fenêtre qui te dit toujours « redémarre » au pire moment. Moi je dis n’importe quoi, mais au moins je ne redémarre pas."

  // Réponse générique débile
  const reply = baseReplies[Math.floor(Math.random() * baseReplies.length)]
  return reply + ` (et pourtant ta question parlait de “${input}”, non ?)`
}

export default function Chatbruti() {
  const [open, setOpen] = useState(true)
  const [messages, setMessages] = useState([
    {
      from: 'bot',
      text:
        "Salut, moi c’est Chat’bruti. Je suis le « conseiller numérique » autoproclamé du village, " +
        "philosophe du dimanche, allergique aux réponses utiles. Pose-moi une question sérieuse : " +
        "je ferai de mon mieux pour y répondre complètement à côté.",
      time: formatTime(),
    },
  ])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const [mood, setMood] = useState(randomMood())
  const bottomRef = useRef(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, loading])

  const send = async () => {
    if (!input.trim() || loading) return

    const text = input.trim()
    const now = formatTime()
    const userMsg = { from: 'user', text, time: now }

    setMessages((m) => [...m, userMsg])
    setInput('')
    setLoading(true)

    try {
      // AUCUN appel IA : réponse purement locale et débile
      const finalText = smartDumbReply(text)

      const botMsg = { from: 'bot', text: finalText, time: formatTime() }
      setMessages((m) => [...m, botMsg])

      // Mood change aléatoire après une réponse
      if (Math.random() < 0.35) {
        setMood(randomMood())
      }
    } catch (err) {
      console.error('Erreur Chatbruti', err)
    } finally {
      setLoading(false)
    }
  }

  if (!open) {
    return (
      <button className="chatbruti-toggle" onClick={() => setOpen(true)}>
        <span>🦋</span> Chat’bruti
      </button>
    )
  }

  return (
    <div className="chatbruti">
      <header className="chatbruti-header">
        <div className="chatbruti-avatar">🦋</div>
        <div className="chatbruti-title">
          <strong>Chat’bruti le Résistant</strong>
          <span>{mood}</span>
        </div>
        <button className="chatbruti-close" onClick={() => setOpen(false)}>
          ×
        </button>
      </header>

      {/* FICHE IDENTITÉ DU PERSONNAGE */}
      <div className="chatbruti-bio">
        <strong>Carte d’identité numérique :</strong>
        <div>
          Nom complet : <strong>Chat’bruti de la Résistance Numérique</strong>
        </div>
        <div>Rôle officiel : assistant pédagogique</div>
        <div>
          Rôle réel : <strong>chat‑rlatan professionnel</strong>
        </div>
        <div className="chatbruti-tags">
          <span className="chatbruti-tag">🐾 Gaulois anti‑Big Tech</span>
          <span className="chatbruti-tag">☕ Sur‑caféiné</span>
          <span className="chatbruti-tag">🤯 Allergique aux réponses utiles</span>
        </div>
      </div>

      <div className="chatbruti-messages">
        {messages.map((m, i) => (
          <div key={i} className={`msg ${m.from}`}>
            <div>{m.text}</div>
            <div className="msg-meta">
              {m.from === 'bot' ? 'Chat’bruti · ' : 'Toi · '}
              {m.time}
            </div>
          </div>
        ))}

        {loading && (
          <div className="msg bot">
            <div className="chatbruti-typing">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        )}

        <div ref={bottomRef} />
      </div>

      <div
        style={{
          padding: '0 0.7rem 0.35rem',
          fontSize: '0.7rem',
          color: '#6b7280',
          borderTop: '1px dashed rgba(148,163,184,0.6)',
          background: '#f3f4f6',
        }}
      >
        Chat’bruti – le chatbot inutile, conçu pour être complètement à côté de
        la plaque.
      </div>

      <div className="chatbruti-input">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Parle-lui de NIRD, de maths ou d’amour… il fera semblant de comprendre."
          onKeyDown={(e) => e.key === 'Enter' && send()}
        />
        <button onClick={send} disabled={loading}>
          {loading ? '...' : 'Envoyer'}
        </button>
      </div>
    </div>
  )
}