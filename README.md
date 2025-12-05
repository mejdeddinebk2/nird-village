# Village Numérique Résistant – Nuit de l'Info 2025

Application web réalisée pendant la Nuit de l'Info 2025.

## Concept

L'application met en scène un établissement scolaire comme un **village numérique résistant**, inspiré de la démarche **NIRD** (Numérique Inclusif, Responsable et Durable).

Elle propose :

- Un fond **dégradé NIRD** (bleu → violet → rose → orange → jaune) qui rappelle l'identité visuelle du sujet.
- 4 lieux interactifs :
  - Salle des profs dégooglisée  
  - Atelier de reconditionnement  
  - Classe sobre en numérique  
  - Médiathèque libre & locale  
- Pour chaque lieu :
  - Un **problème** lié à la dépendance aux Big Tech  
  - Des **pistes NIRD** concrètes (logiciels libres, Linux, réemploi, sobriété, mutualisation…)  
  - Un **mini‑défi / quiz** pour ancrer l’idée.

## Défi « Chat’bruti – le chatbot inutile » (Viveris)

Le site intègre **Chat’bruti le Résistant**, un véritable **personnage** :

- Nom complet : *Chat’bruti de la Résistance Numérique*  
- Titre : philosophe du dimanche, chat‑rlatan numérique  
- Avatar : papillon (🦋) aux couleurs du NIRD  
- Fiche d’identité affichée dans la fenêtre de chat (rôle officiel / rôle réel, tags de personnalité)

Comportement :

- Chat’bruti **ne répond jamais sérieusement** :
  - Il détourne les questions, exagère, invente des explications absurdes.
  - Il répond faux aux calculs (1+1, 2+5…) avec des commentaires décalés.
  - Il transforme des notions sérieuses (cloud, IA, NIRD…) en images ridicules.
  - Il peut **oublier complètement** la question (« Attends… j’ai déjà oublié ta question… »).
  - Il refuse un mode sérieux (`/sérieux` → « mode sérieux indisponible »).

- Les réponses sont **100 % locales** (aucune IA sérieuse) pour respecter l’esprit du défi :
  - le chatbot n’est pas utile,
  - il est vivant, bavard et totalement à côté de la plaque.

Chat’bruti est affiché sur toutes les pages : il est **intégré à l’expérience** du village numérique résistant.

## Tech

- React + Vite
- CSS pur (thème NIRD, cartes, chatbot)
- Pas de back‑end : tout fonctionne côté client.

## Lancer le projet en local

```bash
npm install
npm run dev