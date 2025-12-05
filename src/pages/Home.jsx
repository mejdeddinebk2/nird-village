export default function Home() {
  return (
    <div className="page">
      <h2>Le Village Numérique Résistant</h2>

      <p>
        La fin du support de <strong>Windows 10</strong> montre à quel point les
        établissements scolaires dépendent des <strong>Big Tech</strong> :
        matériel déclaré obsolète, licences coûteuses, données stockées hors UE…
      </p>

      <div className="context-box">
        <h3>Objectif du site</h3>
        <p>
          Ce site met en scène un établissement scolaire comme un{' '}
          <strong>village numérique résistant</strong>, inspiré de la démarche{' '}
          <strong>NIRD – Numérique Inclusif, Responsable et Durable</strong>.
        </p>
        <ul>
          <li>Comprendre les problèmes de dépendance aux Big Tech.</li>
          <li>Découvrir des pistes concrètes de transition NIRD.</li>
          <li>Jouer avec des mini‑défis, scénarios et… un chatbot complètement inutile.</li>
        </ul>
      </div>

      <p>
        Explore le village, rencontre ses habitants numériques et laisse{' '}
        <strong>Chat’bruti</strong> commenter tout ça à sa manière
        délicieusement à côté de la plaque.
      </p>

      <button
        className="primary-btn"
        onClick={() => (window.location.href = '/village')}
      >
        Explorer le village
      </button>
    </div>
  )
}