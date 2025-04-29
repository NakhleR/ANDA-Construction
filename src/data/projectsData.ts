export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  location: string;
  year: string;
  client: string;
  scope: string[];
  images: string[];
  challenge: string;
  solution: string;
  result: string;
}

export const projectsData: Project[] = [
  {
    id: "villa-moderne",
    title: "Villa Moderne à Rouen",
    description: "Une villa contemporaine de 250m² alliant confort et design, avec une attention particulière à l'efficacité énergétique et l'intégration paysagère.",
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    category: "Maison individuelle",
    location: "Rouen, France",
    year: "2022",
    client: "Famille Durand",
    scope: ["Architecture", "Construction", "Aménagement intérieur", "Paysagisme"],
    images: [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1492&q=80",
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    ],
    challenge: "Le défi principal de ce projet était de concevoir une maison moderne qui s'intègre harmonieusement dans un quartier résidentiel traditionnel tout en offrant des performances énergétiques exemplaires.",
    solution: "Nous avons opté pour une architecture contemporaine avec des lignes épurées utilisant des matériaux locaux. Un système de domotique avancé a été installé pour optimiser la consommation énergétique, complété par des panneaux solaires et une pompe à chaleur.",
    result: "La villa répond aux normes BBC (Bâtiment Basse Consommation) avec une consommation 40% inférieure à la moyenne. L'esthétique du bâtiment a été saluée par les voisins et a même remporté un prix d'architecture local."
  },
  {
    id: "residence-les-jardins",
    title: "Résidence Les Jardins",
    description: "Un ensemble résidentiel de 45 appartements répartis sur 5 étages avec espaces verts communs et stationnement souterrain, alliant fonctionnalité et qualité de vie.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    category: "Immeuble résidentiel",
    location: "Lyon, France",
    year: "2021",
    client: "Groupe Immobilier Habitat Plus",
    scope: ["Conception", "Construction", "Aménagement des espaces communs", "Coordination des travaux"],
    images: [
      "https://images.unsplash.com/photo-1460317442991-0ec209397118?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1518481612222-68bbe828ecd1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1515263487990-61b07816b324?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    ],
    challenge: "La gestion d'un projet de cette envergure nécessitait une coordination minutieuse des différents corps de métier et le respect d'un calendrier serré pour livrer les appartements dans les délais impartis.",
    solution: "Nous avons mis en place une équipe dédiée avec un chef de projet expérimenté et avons utilisé un système de gestion de projet numérique permettant de suivre en temps réel l'avancement des travaux et d'anticiper les éventuels retards.",
    result: "Le projet a été livré avec seulement 2 semaines de retard malgré la crise sanitaire, et 95% des appartements ont été vendus avant la fin de la construction, témoignant de l'attractivité de la résidence."
  },
  {
    id: "hangar-industriel-ecotec",
    title: "Hangar Industriel EcoTec",
    description: "Construction d'un hangar industriel de 3000m² pour une entreprise de fabrication de composants électroniques, intégrant des solutions écologiques innovantes.",
    image: "https://images.unsplash.com/photo-1553522989-5f9b3886ad6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    category: "Bâtiment industriel",
    location: "Bordeaux, France",
    year: "2023",
    client: "EcoTec Industries",
    scope: ["Conception", "Construction", "Installation électrique spécifique", "Isolation thermique renforcée"],
    images: [
      "https://images.unsplash.com/photo-1478486982180-2de2fafa19f9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
      "https://images.unsplash.com/photo-1631467946253-f516ffa585c1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80",
      "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    ],
    challenge: "Ce hangar industriel devait répondre à des exigences techniques précises pour l'activité de production électronique, tout en minimisant son impact environnemental conformément à la politique d'entreprise d'EcoTec.",
    solution: "Nous avons conçu un bâtiment avec une structure métallique légère mais résistante, complétée par une isolation thermique haute performance. Le toit a été équipé de 500m² de panneaux photovoltaïques et un système de récupération des eaux de pluie a été installé.",
    result: "Le bâtiment est autonome à 60% pour ses besoins énergétiques et la qualité de l'isolation permet des économies substantielles en chauffage et climatisation. L'entreprise a pu démarrer sa production avec 3 semaines d'avance sur le planning initial."
  },
  {
    id: "renovation-hotel-particulier",
    title: "Rénovation d'un Hôtel Particulier",
    description: "Rénovation complète d'un hôtel particulier du 19ème siècle en préservant son caractère historique tout en l'adaptant aux standards de confort modernes.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    category: "Rénovation historique",
    location: "Paris, France",
    year: "2020",
    client: "Famille Lefèvre",
    scope: ["Restauration", "Mise aux normes", "Réaménagement intérieur", "Conservation du patrimoine"],
    images: [
      "https://images.unsplash.com/photo-1600210492493-0946911123ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
      "https://images.unsplash.com/photo-1611048267451-e6ed903d4a38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80",
      "https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    ],
    challenge: "La difficulté majeure était de moderniser le bâtiment tout en préservant ses éléments architecturaux classés, notamment les moulures, les parquets d'époque et l'escalier en pierre.",
    solution: "Nous avons collaboré avec des artisans spécialisés dans la restauration de bâtiments historiques. Les systèmes modernes (électricité, plomberie, chauffage) ont été installés de manière discrète pour ne pas altérer l'esthétique d'origine.",
    result: "La rénovation a permis de conserver l'authenticité du lieu tout en y apportant le confort moderne. Le projet a reçu les félicitations de l'Architecte des Bâtiments de France pour la qualité de la restauration."
  },
  {
    id: "centre-commercial-ecoville",
    title: "Centre Commercial Ecoville",
    description: "Conception et construction d'un centre commercial de moyenne surface intégrant des principes de développement durable et d'accessibilité pour tous.",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    category: "Bâtiment commercial",
    location: "Nantes, France",
    year: "2022",
    client: "Groupe Commercial Atlantique",
    scope: ["Conception architecturale", "Construction", "Aménagement des espaces commerciaux", "Aménagement paysager"],
    images: [
      "https://images.unsplash.com/photo-1533013404834-a7e6dfad131c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1392&q=80",
      "https://images.unsplash.com/photo-1519642918688-7e43b19245d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1604754742629-3e5728249d73?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    ],
    challenge: "Le projet devait répondre aux besoins commerciaux tout en s'inscrivant dans une démarche environnementale ambitieuse, avec l'objectif d'obtenir la certification HQE (Haute Qualité Environnementale).",
    solution: "Nous avons opté pour une conception bioclimatique maximisant l'éclairage naturel et réduisant les besoins en climatisation. Des matériaux écologiques et locaux ont été privilégiés, et un système de gestion intelligente du bâtiment a été installé.",
    result: "Le centre commercial a obtenu la certification HQE avec un niveau \"Excellent\". La qualité des espaces et l'engagement environnemental ont attiré des enseignes premium, assurant un taux d'occupation de 95% dès l'ouverture."
  },
  {
    id: "complexe-sportif-municipal",
    title: "Complexe Sportif Municipal",
    description: "Construction d'un complexe sportif municipal comprenant gymnase, piscine et terrains extérieurs, avec une attention particulière à l'accessibilité et l'efficacité énergétique.",
    image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1493&q=80",
    category: "Équipement public",
    location: "Strasbourg, France",
    year: "2021",
    client: "Municipalité de Strasbourg",
    scope: ["Conception architecturale", "Construction", "Aménagement des installations sportives", "Gestion de projet public"],
    images: [
      "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1075&q=80",
      "https://images.unsplash.com/photo-1570863102241-1d7a02e35173?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1603400521630-9f2de124b33b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
    ],
    challenge: "La principale difficulté était de concilier les différentes exigences techniques des diverses installations sportives tout en restant dans les limites du budget municipal et en respectant un calendrier serré.",
    solution: "Nous avons adopté une approche modulaire permettant de construire simultanément différentes parties du complexe. Une attention particulière a été portée à la conception des systèmes de chauffage et de ventilation adaptés à chaque espace.",
    result: "Le complexe a été inauguré avec seulement un mois de retard malgré des conditions météorologiques défavorables pendant la construction. Les installations répondent aux normes des fédérations sportives nationales et permettent d'accueillir des compétitions régionales."
  }
];
