import type { Province } from "./types"

export const provinces: Province[] = [
  {
    id: "1",
    name: "Ontario",
    slug: "ontario",
    image: "/ontario-cn-tower.jpg",
    description: "Test your knowledge of Ontario driving rules",
  },
  {
    id: "2",
    name: "Alberta",
    slug: "alberta",
    image: "/alberta-rocky-mountains.jpg",
    description: "Official Alberta driving knowledge test - Based on the Alberta Driver's Handbook",
  },
  {
    id: "3",
    name: "British Columbia",
    slug: "british-columbia",
    image: "/bc-coastal-mountains.jpg",
    description: "BC driving rules and regulations",
  },
  {
    id: "4",
    name: "Quebec",
    slug: "quebec",
    image: "/quebec-chateau-frontenac.jpg",
    description: "Quebec driving knowledge test",
  },
  {
    id: "5",
    name: "Manitoba",
    slug: "manitoba",
    image: "/manitoba-winnipeg.jpg",
    description: "Manitoba driving test preparation",
  },
  {
    id: "6",
    name: "Saskatchewan",
    slug: "saskatchewan",
    image: "/saskatchewan-golden-wheat-field.jpg",
    description: "Official Saskatchewan driving knowledge test - Based on SGI Driver's Handbook",
  },
  {
    id: "7",
    name: "Nova Scotia",
    slug: "nova-scotia",
    image: "/nova-scotia-lighthouse.jpg",
    description: "Nova Scotia driving knowledge test",
  },
  {
    id: "8",
    name: "New Brunswick",
    slug: "new-brunswick",
    image: "/new-brunswick-fundy-cliffs.jpg",
    description: "New Brunswick driving test preparation",
  },
  {
    id: "9",
    name: "Newfoundland and Labrador",
    slug: "newfoundland-labrador",
    image: "/newfoundland-coastal-cliffs.jpg",
    description: "Practice Newfoundland and Labrador road sign and rule questions",
  },
  {
    id: "10",
    name: "Prince Edward Island",
    slug: "prince-edward-island",
    image: "/pei-red-sand-beach.jpg",
    description: "PEI driving knowledge test",
  },
  {
    id: "11",
    name: "Northwest Territories",
    slug: "northwest-territories",
    image: "/nwt-northern-lights-landscape.jpg",
    description: "Northwest Territories driving test",
  },
  {
    id: "12",
    name: "Yukon",
    slug: "yukon",
    image: "/yukon-mountains.jpg",
    description: "Yukon Territory driving knowledge",
  },
  {
    id: "13",
    name: "Nunavut",
    slug: "nunavut",
    image: "/nunavut-ice-landscape.jpg",
    description: "Practice Nunavut road sign and safe-driving basics",
  },
]

export const handbookCoverageNote = "Ontario, Alberta, and Saskatchewan now use handbook-backed question sets. Remaining provinces will be upgraded to official guide coverage as content is expanded."

/* Question bank moved to lib/questions.ts */
