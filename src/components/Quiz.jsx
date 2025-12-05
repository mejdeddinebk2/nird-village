import { useState } from 'react'

export default function Quiz({ quiz }) {
  const [answer, setAnswer] = useState(null)

  const handleClick = (idx) => {
    if (answer !== null) return
    setAnswer(idx)
  }

  return (
    <div className="quiz">
      <h3>Mini-défi NIRD</h3>
      <p>{quiz.question}</p>
      <div className="quiz-options">
        {quiz.options.map((opt, i) => (
          <button
            key={i}
            onClick={() => handleClick(i)}
            disabled={answer !== null}
          >
            {opt}
          </button>
        ))}
      </div>
      {answer !== null && (
        <p className="quiz-result">
          {answer === quiz.correctIndex
            ? "Bien joué ! Tu as l’esprit NIRD."
            : "Réponse digne de Chat’bruti… mais le village résistant ferait autrement."}
        </p>
      )}
    </div>
  )
}