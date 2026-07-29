export type Project = {
  slug: string;
  client: string;
  title: string;
  role: string;
  budget: string;
  award?: string;
  description: string;
  films: string[];
  tags: string[];
};

export const projects: Project[] = [
  {
    slug: "apple-news",
    client: "Apple",
    title: "Apple News Brand Campaign",
    role: "Lead Integrated Producer",
    budget: "$3M",
    description:
      "Global awareness initiative across digital, social, TV, OOH, and brand partnerships. Launched spring 2020 during COVID restrictions using licensed footage and in-house content. Featured three hero films and OOH/DOOH placements across five U.S. cities.",
    films: ["Meat", "School", "Hoodie", "Twitter Spotlight"],
    tags: ["Integrated Campaign", "OOH", "Digital", "Social"],
  },
  {
    slug: "hotels-com",
    client: "Hotels.com",
    title: "King Louis & Queen Marie Campaign",
    role: "Senior Global Project Manager, Omnicom Production",
    budget: "$1M",
    description:
      "Localized broadcast films for relevance across 12 global markets, including script and edit changes, along with a tailored version of “Queen Marie” for Japan.",
    films: ["King Louis", "Queen Marie"],
    tags: ["Localization", "Broadcast", "Global Campaign"],
  },
  {
    slug: "snapchat-launches",
    client: "Snapchat",
    title: "Global Product Launches",
    role: "Global Project Manager",
    budget: "Internally produced",
    description:
      "Created market-specific content for 30 global markets featuring localized copy, actors, product elements, and voiceover for three product features: Time Machine, Snap Games, and Group Stickers.",
    films: ["Time Machine", "Snap Games", "Group Stickers"],
    tags: ["Product Launch", "Global Localization", "Push Notifications"],
  },
  {
    slug: "beats-sacai",
    client: "Beats by Dre",
    title: "sacai x Beats X Launch",
    role: "Global Project Manager",
    budget: "$300K",
    description:
      "Global campaign promoting the sacai x Beats X product launch with localized assets across five markets spanning film, print, OOH, and social media.",
    films: ["sacai x Beats Launch Film (feat. Syd)"],
    tags: ["Product Launch", "OOH", "Print", "Social"],
  },
  {
    slug: "beats-rep-your-city",
    client: "Beats by Dre",
    title: "Rep Your City — NBA Collection",
    role: "Global Project Manager",
    budget: "$500K",
    description:
      "Campaign featuring music artists from selected cities representing the Beats Studio Pros NBA collection, in partnership with Bleacher Report — spanning film, print, OOH, and social media.",
    films: ["Rep Your City (feat. Saweetie)"],
    tags: ["Sports Partnership", "OOH", "Social"],
  },
  {
    slug: "apple-watch-better-you",
    client: "Apple",
    title: "“Better You” — Apple Watch Series 4",
    role: "Global Project Manager, Media Arts Lab",
    budget: "$400K",
    description:
      "Coordinated eight partner agencies to localize broadcast films for 32 global markets, adjusting voice-over, subtitles, and UI.",
    films: ["Better You"],
    tags: ["Product Launch", "Localization", "Broadcast"],
  },
  {
    slug: "toyota-olympics",
    client: "Toyota",
    title: "Start Your Impossible — Global Olympics Campaign",
    role: "Global Project Manager, Saatchi & Saatchi",
    budget: "$2M",
    award: "Cannes Gold Lion",
    description:
      "Oversaw production and localization of 1,500+ assets across 30 global markets, spanning broadcast, OOH and DOOH, web, digital, social, and print.",
    films: ["Good Odds"],
    tags: ["Olympic Campaign", "Large-Scale Localization", "Award-Winning"],
  },
  {
    slug: "nfl-more-football",
    client: "NFL",
    title: "More Football — GamePass Campaign",
    role: "Producer, R/GA",
    budget: "$3M",
    award: "Clio Silver",
    description:
      "Integrated campaign to drive GamePass subscriptions using content targeting football fans across broadcast, digital, and social channels.",
    films: ["More Football"],
    tags: ["Sports Marketing", "Integrated Campaign", "Award-Winning"],
  },
  {
    slug: "nfl-anything-can-happen",
    client: "NFL",
    title: "Anything Can Happen — Thursday Night Football",
    role: "Producer, R/GA",
    budget: "$2.75M",
    description:
      "Integrated campaign driving viewers to Thursday Night Football through content appealing to football fans across broadcast, digital, and social platforms.",
    films: ["Anything Can Happen"],
    tags: ["Sports Marketing", "Integrated Campaign"],
  },
];
