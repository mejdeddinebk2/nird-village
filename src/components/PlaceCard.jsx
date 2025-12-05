import Quiz from './Quiz.jsx'

export default function PlaceCard({ place }) {
  return (
    <div className="place-card">
      <h2>{place.name}</h2>

      <h3>Le problème</h3>
      <p>{place.problem}</p>

      <h3>Pistes NIRD</h3>
      <ul>
        {place.nirdSolutions.map((s, i) => (
          <li key={i}>{s}</li>
        ))}
      </ul>

      <Quiz quiz={place.quiz} />
    </div>
  )
}