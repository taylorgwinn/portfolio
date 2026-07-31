export type Film = {
  title: string;
  thumbnail?: string;
  videoUrl?: string;
  video?: string;
  label?: boolean;
  imagePosition?: string;
  aspect?: string;
  wide?: boolean;
};

export const clientDisplayNames: Record<string, string> = {
  Base: "Base @ Coinbase",
};

export type Project = {
  slug: string;
  client: string;
  title: string;
  shortTitle?: string;
  role: string;
  budget: string;
  award?: string;
  description: string;
  workDescription?: string;
  films: Film[];
  tags: string[];
  recentWorkMedia?: string;
  gridCols?: 2 | 4;
};

export const projects: Project[] = [
  {
    slug: "base-pay",
    client: "Base",
    title: "Base Pay Launch Campaign",
    role: "Lead Producer, Base",
    budget: "$250K",
    description:
      "Launch campaign and brand identity for Base Pay, Coinbase's onchain checkout product released with Shopify in July 2025. Partnered with Daisy Chain Studio on a bold animated campaign across digital, social, and live event platforms, positioning Base Pay as accessible, fast, and trustworthy.",
    films: [
      { title: "Base Pay Launch", video: "/videos/base-pay-launch.mp4" },
    ],
    tags: ["Product Launch", "Brand Identity", "Digital", "Social"],
  },
  {
    slug: "base-fwb-fest",
    client: "Base",
    title: "FWB Fest",
    role: "Lead Producer, Base",
    budget: "$200K",
    description:
      "Led production for the Base FWB Fest partnership, a branded event activation featuring custom merch, custom interactive inflatables, on-screen creative, and content capture.",
    workDescription:
      "Base was the main sponsor of FWB Fest in Idyllwild, where the Base App powered all onchain commerce throughout the festival. Partnered with art studio Pneuhaus to create a large-scale installation — a compound camera and custom inflatable structure — blending art, technology, and play. Creative Office ensured cohesion between the concept, identity, and execution, spanning environmental graphics, spatial design, and digital extensions, placing Base at the center of the festival experience as both infrastructure and creative partner for artists, technologists, and builders.",
    films: [
      {
        title: "FWB Sizzle",
        video: "/videos/base-fwb-fest.mp4",
        videoUrl: "https://www.instagram.com/p/DNBVKxvJbOT/",
      },
      {
        title: "Dome Exterior",
        thumbnail: "/images/base-fwb-fest/dome-exterior.jpg",
      },
      {
        title: "Night Arch",
        thumbnail: "/images/base-fwb-fest/night-arch.jpg",
      },
      {
        title: "Tunnel Walk",
        thumbnail: "/images/base-fwb-fest/tunnel-walk.jpg",
      },
      {
        title: "Stage Screen",
        thumbnail: "/images/base-fwb-fest/stage-screen.jpg",
      },
      {
        title: "Crowd on the Lawn",
        thumbnail: "/images/base-fwb-fest/crowd-lawn.jpg",
      },
      {
        title: "Base Space Sign",
        thumbnail: "/images/base-fwb-fest/base-space-sign.jpg",
      },
    ],
    tags: ["Event", "Merch", "Content"],
  },
  {
    slug: "base-basecamp-2025",
    client: "Base",
    title: "Basecamp 2025",
    shortTitle: "Basecamp",
    role: "Lead Producer, Base",
    budget: "$2M",
    description:
      "3 day event in Stowe, Vermont, welcoming over a thousand people from all over the world to take part in on-site workshops, seminars, challenges, games, and more.",
    workDescription:
      "BaseCamp 002 was Base's flagship summit in Stowe, Vermont, bringing together founders, creators, and cultural leaders shaping the onchain future. Over three days of talks, workshops, and immersive experiences, the event blended the Base brand with community and culture. Led the identity, visual system, and spatial design, developing branding and environments influenced by technical outdoor culture, alongside motion graphics and editorial video content.",
    films: [
      {
        title: "Basecamp Sizzle",
        video: "/videos/base-basecamp-2025.mp4",
        videoUrl: "https://www.instagram.com/p/DPURtSRCQao/",
      },
      {
        title: "Custom Playing Cards",
        thumbnail: "/images/base-basecamp-2025/cards.jpg",
      },
      {
        title: "Basecamp Hoodie",
        thumbnail: "/images/base-basecamp-2025/hoodie.jpg",
      },
      {
        title: "Event Wristbands",
        thumbnail: "/images/base-basecamp-2025/wristbands.jpg",
      },
      {
        title: "Basecamp Backpack",
        thumbnail: "/images/base-basecamp-2025/backpack.jpg",
      },
      {
        title: "Rock Cairn Signage",
        thumbnail: "/images/base-basecamp-2025/rock-signage.jpg",
      },
      {
        title: "Exterior Sign",
        thumbnail: "/images/base-basecamp-2025/exterior-sign.jpg",
      },
    ],
    tags: ["Event", "Merch", "Content"],
  },
  {
    slug: "base-erewhon",
    client: "Base",
    title: "Base x Erewhon Partnership",
    role: "Lead Producer, Base",
    budget: "Confidential",
    description:
      "Partnered with Erewhon on a limited-edition Blue Lemonade, free with Base App beta sign-up, to celebrate Base's New Day One rebrand. Led concept and execution across packaging, in-store presence, and social storytelling, driving hundreds of new user sign-ups and a fun cultural moment.",
    films: [
      {
        title: "Truck Wrap",
        thumbnail: "/images/base-erewhon/truck-wrap.jpg",
        aspect: "aspect-[4/5]",
      },
      {
        title: "Bottles on Shelf",
        thumbnail: "/images/base-erewhon/bottles-shelf.jpg",
        aspect: "aspect-[4/5]",
      },
      {
        title: "In-Store Staff",
        thumbnail: "/images/base-erewhon/staff-cap.jpg",
        aspect: "aspect-[4/5]",
      },
      {
        title: "Bottle in Pool",
        thumbnail: "/images/base-erewhon/bottle-pool.jpg",
        aspect: "aspect-[4/5]",
      },
      {
        title: "Bottle Caps",
        thumbnail: "/images/base-erewhon/bottle-caps.jpg",
        aspect: "aspect-[4/5]",
      },
      {
        title: "Cap in Bag",
        thumbnail: "/images/base-erewhon/cap-in-bag.jpg",
        aspect: "aspect-[4/5]",
      },
      {
        title: "Bottle Handoff",
        thumbnail: "/images/base-erewhon/bottle-handoff.jpg",
        aspect: "aspect-[4/5]",
      },
      {
        title: "Staff from Behind",
        thumbnail: "/images/base-erewhon/staff-back.jpg",
        aspect: "aspect-[4/5]",
      },
    ],
    tags: ["Collaboration", "Packaging", "Retail", "Social", "Merch"],
    recentWorkMedia: "/images/base-erewhon/base-erewhon.gif",
    gridCols: 4,
  },
  {
    slug: "apple-news",
    client: "Apple",
    title: "Apple News Brand Campaign",
    role: "Lead Integrated Producer, Apple",
    budget: "$3M",
    description:
      "Global awareness initiative across digital, social, TV, OOH, and brand partnerships. Launched spring 2020 during COVID restrictions using licensed footage and in-house content. Featured three hero films and OOH/DOOH placements across five U.S. cities.",
    films: [
      {
        title: "Meat",
        thumbnail:
          "https://images.squarespace-cdn.com/content/v1/67a0143d9031e77644cdeae6/22a41ad6-1af9-4328-9fb3-f3857b7e5937/thumb+%284%29.jpg",
        videoUrl: "https://www.youtube.com/watch?v=tZiLEogqr8o",
        label: true,
      },
      {
        title: "School",
        thumbnail:
          "https://images.squarespace-cdn.com/content/v1/67a0143d9031e77644cdeae6/55fb5100-0fc4-47e5-9216-e18323269054/thumb+%282%29.jpg",
        videoUrl: "https://www.youtube.com/watch?v=pkCL-C4H1fA",
        label: true,
      },
      {
        title: "Hoodie",
        thumbnail:
          "https://images.squarespace-cdn.com/content/v1/67a0143d9031e77644cdeae6/4a7739d7-98cd-4f49-81c9-ff88c2d1d5a9/thumb+%285%29.jpg",
        videoUrl: "https://www.youtube.com/watch?v=SWezsjewWPE",
        label: true,
      },
      {
        title: "Twitter Spotlight",
        thumbnail:
          "https://images.squarespace-cdn.com/content/v1/67a0143d9031e77644cdeae6/a748d841-9b4a-4426-b8ae-f3b267212503/thumb+%286%29.jpg",
        videoUrl: "https://www.youtube.com/watch?v=Nvt3ORpQ-C0",
        label: true,
      },
      {
        title: "K-Pop OOH — Los Angeles",
        thumbnail: "/images/apple-news/kpop-ooh-la.webp",
      },
      {
        title: "Red Carpet OOH — Los Angeles",
        thumbnail: "/images/apple-news/red-carpet-ooh-la.webp",
      },
      {
        title: "Meat OOH — New York City",
        thumbnail: "/images/apple-news/meat-ooh-nyc.webp",
      },
    ],
    tags: [
      "Integrated Campaign",
      "OOH",
      "Digital",
      "Social",
      "Broadcast",
      "Localization",
    ],
  },
  {
    slug: "hotels-com",
    client: "Hotels.com",
    title: "King Louis & Queen Marie Campaign",
    role: "Senior Global Project Manager, Omnicom Production",
    budget: "$1M",
    description:
      "Localized broadcast films for relevance across 12 global markets, including script and edit changes, along with a tailored version of “Queen Marie” for Japan.",
    films: [
      {
        title: "King Louis",
        thumbnail:
          "https://images.squarespace-cdn.com/content/v1/67a0143d9031e77644cdeae6/9592853d-c787-481a-b5b4-1dae76ebaec0/Screenshot+2025-02-04+at+8.51.56+PM.png",
        videoUrl: "https://www.youtube.com/watch?v=Bsox757t2cI",
        label: true,
      },
      {
        title: "Queen Marie",
        thumbnail:
          "https://images.squarespace-cdn.com/content/v1/67a0143d9031e77644cdeae6/f21271bb-fe2d-4a03-b4a5-7070017eeea0/Screenshot+2025-02-04+at+8.53.23+PM.png",
        videoUrl: "https://www.youtube.com/watch?v=CFFJs3QwSio",
        label: true,
        imagePosition: "center 70%",
      },
    ],
    tags: ["Localization", "Broadcast"],
  },
  {
    slug: "snapchat-launches",
    client: "Snapchat",
    title: "Global Product Launches",
    role: "Global Project Manager, Snapchat",
    budget: "Internally produced",
    description:
      "Created market-specific content for 30 global markets featuring localized copy, actors, product elements, and voiceover for three product features: Time Machine, Snap Games, and Group Stickers.",
    films: [
      {
        title: "Time Machine",
        thumbnail:
          "https://images.squarespace-cdn.com/content/v1/67a0143d9031e77644cdeae6/0cadf461-11dd-4c60-9760-acfe54d04da5/Screenshot+2025-02-05+at+7.36.06+PM.png",
        videoUrl: "https://www.youtube.com/shorts/FbhmEqZtVUs",
        label: true,
        imagePosition: "center 70%",
      },
      {
        title: "Snap Games",
        thumbnail:
          "https://images.squarespace-cdn.com/content/v1/67a0143d9031e77644cdeae6/c00139df-757b-4485-b43c-b1c46bd760ee/thumb+%287%29.jpg",
        videoUrl: "https://www.youtube.com/shorts/uXJ3ZXyGX90",
        label: true,
        imagePosition: "center 70%",
      },
      {
        title: "Group Stickers",
        thumbnail:
          "https://images.squarespace-cdn.com/content/v1/67a0143d9031e77644cdeae6/7751a0f9-ed47-4d07-b8bc-32e792d23ab1/thumb+%288%29.jpg",
        videoUrl: "https://www.youtube.com/shorts/ofapr_T8ya4",
        label: true,
      },
    ],
    tags: ["Product Launch", "Localization", "Digital", "Social"],
  },
  {
    slug: "beats-sacai",
    client: "Beats by Dre",
    title: "sacai x Beats X Launch",
    role: "Global Project Manager, Beats By Dre",
    budget: "$300K",
    description:
      "Global campaign promoting the sacai x Beats X product launch with localized assets across five markets spanning film, print, OOH, and social media.",
    films: [
      {
        title: "sacai x Beats Launch Film (feat. Syd)",
        thumbnail:
          "https://images.squarespace-cdn.com/content/v1/67a0143d9031e77644cdeae6/25f8b27c-484d-40d3-a0fc-0680978ab181/beatsx-x-sacai-special-edition-earphones_f6149bdb.jpeg",
        videoUrl: "https://www.youtube.com/watch?v=snofCi2OSjE",
      },
    ],
    tags: [
      "Product Launch",
      "Product Design",
      "OOH",
      "Print",
      "Social",
      "Digital",
    ],
  },
  {
    slug: "beats-rep-your-city",
    client: "Beats by Dre",
    title: "Rep Your City — NBA Collection",
    role: "Global Project Manager, Beats By Dre",
    budget: "$500K",
    description:
      "Campaign featuring music artists from selected cities representing the Beats Studio Pros NBA collection, in partnership with Bleacher Report — spanning film, print, OOH, and social media.",
    films: [
      {
        title: "Rep Your City (feat. Saweetie)",
        thumbnail:
          "https://images.squarespace-cdn.com/content/v1/67a0143d9031e77644cdeae6/dc7d8393-5f10-49ec-8624-f9c5e6ac490f/270x270cc+%282%29.jpeg",
        videoUrl: "https://www.youtube.com/watch?v=zGZ_RakHu8I",
      },
    ],
    tags: [
      "Sports Partnership",
      "OOH",
      "Social",
      "Product Launch",
      "Product Design",
    ],
  },
  {
    slug: "apple-watch-better-you",
    client: "Apple",
    title: "“Better You” — Apple Watch Series 4",
    role: "Global Project Manager, Media Arts Lab",
    budget: "$400K",
    description:
      "Coordinated eight partner agencies to localize broadcast films for 32 global markets, adjusting voice-over, subtitles, and UI.",
    films: [
      {
        title: "Better You",
        thumbnail:
          "https://images.squarespace-cdn.com/content/v1/67a0143d9031e77644cdeae6/2dc2ced3-305e-4255-ab50-c1879bf31a02/apple-watch-series-4-better-you.jpg",
        videoUrl: "https://www.youtube.com/watch?v=NAxAxqcPaV0",
      },
    ],
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
    films: [
      {
        title: "Good Odds",
        thumbnail:
          "https://images.squarespace-cdn.com/content/v1/67a0143d9031e77644cdeae6/94e5d8bf-0c3b-4539-91a5-ccb58138932c/download.jpeg",
        videoUrl: "https://www.youtube.com/watch?v=34PVFNl91ao",
      },
      {
        title: "Start Your Impossible — Key Art",
        thumbnail: "/images/toyota-olympics/hero-key-art.webp",
        aspect: "aspect-[8/3]",
        wide: true,
      },
      {
        title: "I'll Wait For You At The Bottom",
        thumbnail: "/images/toyota-olympics/toyota-poster-ill-wait.webp",
        aspect: "aspect-[3/4]",
      },
      {
        title: "You Set The Bar. I'll Jump Over It.",
        thumbnail: "/images/toyota-olympics/toyota-poster-you-set-the-bar.webp",
        aspect: "aspect-[3/4]",
      },
      {
        title: "Get Used To Seeing Me Up Here",
        thumbnail: "/images/toyota-olympics/toyota-poster-get-used-to-me.webp",
        aspect: "aspect-[3/4]",
      },
      {
        title: "Keep Winter, Winter.",
        thumbnail: "/images/toyota-olympics/toyota-poster-keep-winter.webp",
        aspect: "aspect-[3/4]",
      },
    ],
    tags: [
      "Integrated Campaign",
      "OOH",
      "Print",
      "Social",
      "Digital",
      "Localization",
      "Award-Winning",
    ],
    gridCols: 4,
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
    films: [
      {
        title: "More Football",
        thumbnail:
          "https://images.squarespace-cdn.com/content/v1/67a0143d9031e77644cdeae6/5347c4c7-0c8e-42f8-93b4-fa42d85b16d1/Cowboys-Giants-NFL-HOZ.jpg",
        videoUrl: "https://www.youtube.com/watch?v=PeyY20Pt91U",
      },
    ],
    tags: ["Integrated Campaign", "OOH", "Digital", "Social", "Award-Winning"],
  },
  {
    slug: "nfl-anything-can-happen",
    client: "NFL",
    title: "Anything Can Happen — Thursday Night Football",
    role: "Producer, R/GA",
    budget: "$2.75M",
    description:
      "Integrated campaign driving viewers to Thursday Night Football through content appealing to football fans across broadcast, digital, and social platforms.",
    films: [
      {
        title: "Anything Can Happen",
        thumbnail:
          "https://images.squarespace-cdn.com/content/v1/67a0143d9031e77644cdeae6/890a92f1-8290-4027-8543-a6ebd63007f5/Screenshot+2025-03-06+at+8.41.29%E2%80%AFPM.png",
        videoUrl: "https://www.youtube.com/watch?v=qvCweFEuPDc",
      },
    ],
    tags: ["Integrated Campaign", "OOH", "Digital", "Social"],
  },
];
