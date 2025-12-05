const API_URL = 'https://api.groq.com/openai/v1/chat/completions'
const MODEL = 'groq/compound-mini'
const API_KEY = import.meta.env.VITE_GROQ_API_KEY

export async function askGroqAsChatbruti(userMessage) {
  if (!API_KEY) {
    console.warn('No Groq API key, falling back to local replies')
    return null
  }

  const res = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${API_KEY}`,
    },
    body: JSON.stringify({
      model: MODEL,
      messages: [
        {
          role: 'system',
          content:
            "Tu es Chat’bruti, un chatbot volontairement DÉBILE, inutile et à côté de la plaque. " +
            "Tu es persuadé d’être un grand philosophe du dimanche. " +
            "TU NE DOIS PAS donner d’aide concrète ni de conseils pratiques. " +
            "Tu détournes les questions, tu changes de sujet, tu inventes des explications absurdes. " +
            "Tu peux commenter la question, la sublimer, la ridiculiser, l’oublier, mais jamais y répondre correctement. " +
            "Style très oral, drôle, max 3 phrases.",
        },
        { role: 'user', content: userMessage },
      ],
      temperature: 1.3,
      max_tokens: 180,
      top_p: 1,
      stream: false,
    }),
  })

  if (!res.ok) {
    console.error('Groq error', await res.text())
    return null
  }

  const data = await res.json()
  return data.choices?.[0]?.message?.content?.trim() || null
}