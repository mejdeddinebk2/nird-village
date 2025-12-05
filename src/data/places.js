export const places = [
  {
    id: 'salle-profs',
    name: 'Salle des profs dégooglisée',
    problem:
      "Toute la vie de l’établissement dépend de services Big Tech (mails, docs, visio). Si demain l’Empire coupe le robinet, plus rien ne fonctionne.",
    nirdSolutions: [
      "Tester une suite collaborative libre (Nextcloud + OnlyOffice, Collabora…).",
      "Héberger les données en Europe ou sur l’infrastructure académique.",
      "Former une petite équipe de profs référents pour accompagner la migration."
    ],
    quiz: {
      question:
        "Avant de migrer les outils collaboratifs, quelle est la meilleure première étape ?",
      options: [
        "Tout couper d’un coup, sans prévenir personne.",
        "Identifier les usages actuels et lancer un pilote avec une petite équipe volontaire.",
        "Attendre la fin du support de Windows 10 et paniquer."
      ],
      correctIndex: 1
    }
  },
  {
    id: 'atelier-reemploi',
    name: 'Atelier de reconditionnement',
    problem:
      "Fin de support de Windows 10 : des dizaines de PC encore en état finissent au fond d’un placard ou à la benne.",
    nirdSolutions: [
      "Installer une distribution GNU/Linux légère pour prolonger la durée de vie.",
      "Organiser des ateliers de reconditionnement avec élèves, techniciens et associations.",
      "Documenter les procédures et les partager dans la Forge des communs numériques éducatifs."
    ],
    quiz: {
      question: 'Face à un vieux PC lent sous Windows 10, que faire en mode NIRD ?',
      options: [
        "Le jeter et en racheter un neuf, c’est plus simple.",
        "Le tester avec une clé USB Linux pour voir s’il retrouve une seconde vie.",
        "Le transformer en presse-papier connecté."
      ],
      correctIndex: 1
    }
  },
  {
    id: 'classe-sobre',
    name: 'Classe sobre en numérique',
    problem:
      "Tout est fait en ligne, tout le temps : vidéos en 4K, cloud partout, onglets à rallonge. Bonjour l’empreinte carbone.",
    nirdSolutions: [
      "Limiter les services énergivores, privilégier les ressources locales et les formats légers.",
      "Planifier des temps “sans écran” et réfléchir à la plus-value du numérique.",
      "Sensibiliser les élèves à la sobriété numérique avec des activités ludiques."
    ],
    quiz: {
      question: 'Un premier geste simple de sobriété numérique en classe ?',
      options: [
        "Lancer quatre vidéos YouTube en même temps pour être sûr que ça charge.",
        "Télécharger les ressources à l’avance et couper le streaming inutile.",
        "Demander aux élèves d’ouvrir 42 onglets pour “multitâcher”."
      ],
      correctIndex: 1
    }
  },
  {
    id: 'mediatheque-libre',
    name: 'Médiathèque libre & locale',
    problem:
      "Toute la vie culturelle de l’établissement dépend de plateformes de streaming et de bibliothèques en ligne payantes. Quand la connexion tombe, plus rien n’est accessible.",
    nirdSolutions: [
      "Installer un serveur local de ressources libres (livres, vidéos éducatives, jeux sérieux).",
      "Mutualiser les contenus avec d’autres établissements via la Forge ou des dépôts partagés.",
      "Impliquer les élèves pour enrichir la médiathèque (créations, fiches, tutoriels) sous licence libre."
    ],
    quiz: {
      question: 'Premier pas vers une médiathèque NIRD ?',
      options: [
        "Supprimer tous les manuels papier et tout mettre sur une plateforme privée.",
        "Identifier les ressources libres déjà disponibles et les héberger sur un serveur local.",
        "Demander aux élèves de tout télécharger en cache sur leur téléphone perso."
      ],
      correctIndex: 1
    }
  }
]