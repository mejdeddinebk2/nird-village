import VillageMap from '../components/VillageMap.jsx'

export default function Village() {
  return (
    <div className="page">
      <div className="context-box">
        <h3>Pourquoi ce village résiste ?</h3>
        <p>
          Les établissements scolaires sont souvent dépendants des Big Tech :
          systèmes propriétaires, obsolescence programmée, stockage de données
          hors UE…
        </p>
        <p>
          La démarche <strong>NIRD</strong> (Numérique Inclusif, Responsable et
          Durable) propose une autre voie : réemploi du matériel, logiciels
          libres, hébergement maîtrisé et sobriété numérique. Explore les lieux
          du village pour voir comment un établissement peut avancer, étape par
          étape.
        </p>
      </div>

      <VillageMap />
    </div>
  )
}