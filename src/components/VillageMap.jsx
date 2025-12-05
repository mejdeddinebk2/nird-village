import { useState } from 'react'
import { places } from '../data/places.js'
import PlaceCard from './PlaceCard.jsx'

export default function VillageMap() {
  const [selected, setSelected] = useState(places[0])

  return (
    <div className="village-layout">
      <aside className="village-list">
        {places.map((p) => (
          <button
            key={p.id}
            className={p.id === selected.id ? 'active' : ''}
            onClick={() => setSelected(p)}
          >
            {p.name}
          </button>
        ))}
      </aside>

      <main className="village-main">
        <PlaceCard place={selected} />
      </main>
    </div>
  )
}