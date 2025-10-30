import type { Province, Question } from "./types"

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
    image: "/new-brunswick-bay-fundy.jpg",
    description: "New Brunswick driving test preparation",
  },
  {
    id: "9",
    name: "Newfoundland and Labrador",
    slug: "newfoundland-labrador",
    image: "/newfoundland-coastal-cliffs.jpg",
    description: "Newfoundland and Labrador driving knowledge",
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
    image: "/nunavut-arctic.jpg",
    description: "Nunavut driving knowledge test",
  },
]

const getAlbertaQuestions = (): Question[] => [
  {
    id: 1,
    question: "What is the speed limit in most urban areas in Alberta unless otherwise posted?",
    options: ["40 km/h", "50 km/h", "60 km/h", "70 km/h"],
    correctAnswer: 1,
    explanation: "The default speed limit in urban areas in Alberta is 50 km/h unless signs indicate otherwise.",
    image: "/alberta-calgary-skyline.jpg",
  },
  {
    id: 2,
    question: "What action must you take when you see this sign?",
    options: ["Complete stop required", "Slow down and proceed", "Yield to oncoming traffic", "Construction zone"],
    correctAnswer: 0,
    explanation:
      "A stop sign requires you to come to a complete stop at the stop line or before entering the intersection.",
    image: "/signs/stop-sign.jpg",
  },
  {
    id: 3,
    question: "In Alberta, when must you have your headlights on?",
    options: [
      "Only at night",
      "30 minutes before sunset to 30 minutes after sunrise",
      "Only in bad weather",
      "Only when visibility is less than 150 metres",
    ],
    correctAnswer: 1,
    explanation:
      "Alberta law requires headlights from 30 minutes before sunset to 30 minutes after sunrise, and when visibility is reduced to 150 metres or less.",
    image: "/alberta-jasper-mountains.jpg",
  },
  {
    id: 4,
    question: "What is the maximum speed limit on most Alberta highways?",
    options: ["100 km/h", "110 km/h", "120 km/h", "130 km/h"],
    correctAnswer: 1,
    explanation:
      "The maximum speed limit on most Alberta highways is 110 km/h, though some sections may have different posted limits.",
    image: "/alberta-canmore-mountains.jpg",
  },
  {
    id: 5,
    question: "What is the maximum speed allowed where you see this sign?",
    options: ["60 km/h", "Minimum 60 km/h", "Highway 60", "60 metres ahead"],
    correctAnswer: 0,
    explanation: "This is a regulatory speed limit sign indicating the maximum speed allowed is 60 km/h.",
    image: "/signs/speed-limit-60.jpg",
  },
  {
    id: 6,
    question: "In Alberta, what is the legal blood alcohol limit for fully licensed drivers?",
    options: ["0.05%", "0.08%", "0.10%", "0.00%"],
    correctAnswer: 1,
    explanation:
      "The legal blood alcohol limit for fully licensed drivers in Alberta is 0.08%. However, administrative penalties begin at 0.05%.",
    image: "/alberta-edmonton-river.jpg",
  },
  {
    id: 7,
    question: "When driving in Alberta winter conditions, what is the minimum tread depth required for tires?",
    options: ["1.6 mm", "3.5 mm", "5.0 mm", "6.0 mm"],
    correctAnswer: 1,
    explanation:
      "Alberta requires a minimum tread depth of 3.5 mm for winter driving conditions to ensure adequate traction on snow and ice.",
    image: "/alberta-banff-lake-louise.jpg",
  },
  {
    id: 8,
    question: "What does this regulatory sign prohibit?",
    options: ["No entry", "Do not enter", "No parking anytime", "No stopping"],
    correctAnswer: 2,
    explanation: "This sign indicates that parking is prohibited at all times in this area.",
    image: "/signs/no-parking-sign.jpg",
  },
  {
    id: 9,
    question: "What does a flashing green light mean at an Alberta intersection?",
    options: [
      "Proceed with caution",
      "You have the right of way to go straight or turn",
      "Pedestrian crossing ahead",
      "School zone active",
    ],
    correctAnswer: 1,
    explanation:
      "A flashing green light in Alberta means you have the right of way to proceed straight through or turn left, but you must still yield to pedestrians.",
    image: "/alberta-calgary-skyline.jpg",
  },
  {
    id: 10,
    question: "When you approach this sign, what must you do?",
    options: ["Stop completely", "Slow down and give way to traffic", "Merge with traffic", "Turn right only"],
    correctAnswer: 1,
    explanation:
      "A yield sign requires you to slow down and give the right of way to other traffic and pedestrians before proceeding.",
    image: "/signs/yield-sign.jpg",
  },
  {
    id: 11,
    question: "This sign warns you about what type of zone?",
    options: ["School zone ahead", "Playground zone", "Children playing area", "Reduced speed zone"],
    correctAnswer: 0,
    explanation:
      "This sign warns drivers that they are entering a school zone where reduced speeds apply during posted hours.",
    image: "/signs/school-zone-sign.jpg",
  },
  {
    id: 12,
    question: "What is the penalty for distracted driving (using handheld devices) in Alberta?",
    options: ["$100 fine", "$300 fine and 3 demerits", "$500 fine", "$1000 fine and license suspension"],
    correctAnswer: 1,
    explanation: "Distracted driving in Alberta results in a $300 fine and 3 demerit points for the first offense.",
    image: "/alberta-jasper-mountains.jpg",
  },
  {
    id: 13,
    question: "What does this sign indicate to drivers?",
    options: ["Pedestrian crossing ahead", "School crossing", "Playground zone", "Hospital zone"],
    correctAnswer: 0,
    explanation:
      "This sign indicates a designated pedestrian crossing area ahead where drivers must yield to pedestrians.",
    image: "/signs/pedestrian-crossing-sign.jpg",
  },
  {
    id: 14,
    question: "What maneuver is prohibited by this sign?",
    options: ["Right turns", "Left turns", "U-turns", "Straight through"],
    correctAnswer: 1,
    explanation: "This sign prohibits left turns at this intersection.",
    image: "/signs/no-left-turn-sign.jpg",
  },
  {
    id: 15,
    question: "In Alberta, how much space should you leave when passing a cyclist?",
    options: ["0.5 metres", "1 metre", "1.5 metres", "2 metres"],
    correctAnswer: 1,
    explanation: "Alberta law requires drivers to leave at least 1 metre of space when passing a cyclist.",
    image: "/alberta-banff-lake-louise.jpg",
  },
]

const getSaskatchewanQuestions = (): Question[] => [
  {
    id: 1,
    question: "What is the speed limit in most urban areas in Saskatchewan unless otherwise posted?",
    options: ["40 km/h", "50 km/h", "60 km/h", "70 km/h"],
    correctAnswer: 1,
    explanation: "The default speed limit in urban areas in Saskatchewan is 50 km/h unless signs indicate otherwise.",
    image: "/saskatchewan-regina-skyline.jpg",
  },
  {
    id: 2,
    question: "What action must you take when you see this sign?",
    options: ["Complete stop required", "Slow down and proceed", "Yield to oncoming traffic", "Construction zone"],
    correctAnswer: 0,
    explanation:
      "A stop sign requires you to come to a complete stop at the stop line or before entering the intersection.",
    image: "/signs/stop-sign.jpg",
  },
  {
    id: 3,
    question: "In Saskatchewan, what is the maximum speed limit on divided highways?",
    options: ["100 km/h", "110 km/h", "120 km/h", "130 km/h"],
    correctAnswer: 1,
    explanation: "The maximum speed limit on divided highways in Saskatchewan is 110 km/h, unless otherwise posted.",
    image: "/saskatchewan-prairie-sunset.jpg",
  },
  {
    id: 4,
    question: "When you approach this sign, what must you do?",
    options: ["Stop completely", "Slow down and give way to traffic", "Merge with traffic", "Turn right only"],
    correctAnswer: 1,
    explanation:
      "A yield sign requires you to slow down and give the right of way to other traffic and pedestrians before proceeding.",
    image: "/signs/yield-sign.jpg",
  },
  {
    id: 5,
    question: "When must you use headlights in Saskatchewan?",
    options: [
      "Only at night",
      "30 minutes before sunset to 30 minutes after sunrise",
      "Only in bad weather",
      "When visibility is less than 150 metres",
    ],
    correctAnswer: 1,
    explanation:
      "Saskatchewan law requires headlights from 30 minutes before sunset to 30 minutes after sunrise, and when visibility is reduced.",
    image: "/saskatchewan-northern-lights.jpg",
  },
  {
    id: 6,
    question: "What is the maximum speed allowed where you see this sign?",
    options: ["60 km/h", "Minimum 60 km/h", "Highway 60", "60 metres ahead"],
    correctAnswer: 0,
    explanation: "This is a regulatory speed limit sign indicating the maximum speed allowed is 60 km/h.",
    image: "/signs/speed-limit-60.jpg",
  },
  {
    id: 7,
    question: "What is the legal blood alcohol limit for fully licensed drivers in Saskatchewan?",
    options: ["0.04%", "0.08%", "0.10%", "0.00%"],
    correctAnswer: 1,
    explanation:
      "The legal blood alcohol limit for fully licensed drivers in Saskatchewan is 0.08%. Administrative penalties apply at 0.04%.",
    image: "/saskatchewan-saskatoon-river.jpg",
  },
  {
    id: 8,
    question: "In Saskatchewan, drivers must stop how far from a school bus with flashing red lights?",
    options: ["3 metres", "5 metres", "10 metres", "15 metres"],
    correctAnswer: 1,
    explanation:
      "You must stop at least 5 metres away from a school bus with flashing red lights, regardless of which side of the road you're on.",
    image: "/saskatchewan-wheat-fields.jpg",
  },
  {
    id: 9,
    question: "What does this regulatory sign prohibit?",
    options: ["No entry", "Do not enter", "No parking anytime", "No stopping"],
    correctAnswer: 2,
    explanation: "This sign indicates that parking is prohibited at all times in this area.",
    image: "/signs/no-parking-sign.jpg",
  },
  {
    id: 10,
    question: "In Saskatchewan, what is the penalty for distracted driving (first offense)?",
    options: ["$280 fine", "$580 fine and 4 demerits", "$1000 fine", "License suspension only"],
    correctAnswer: 1,
    explanation:
      "Distracted driving in Saskatchewan results in a $580 fine and 4 demerit points for the first offense.",
    image: "/saskatchewan-regina-skyline.jpg",
  },
  {
    id: 11,
    question: "This sign warns you about what type of zone?",
    options: ["School zone ahead", "Playground zone", "Children playing area", "Reduced speed zone"],
    correctAnswer: 0,
    explanation:
      "This sign warns drivers that they are entering a school zone where reduced speeds apply during posted hours.",
    image: "/signs/school-zone-sign.jpg",
  },
  {
    id: 12,
    question: "In Saskatchewan, when can you make a right turn on a red light?",
    options: [
      "Never",
      "After coming to a complete stop and yielding",
      "Only at marked intersections",
      "Only during daytime hours",
    ],
    correctAnswer: 1,
    explanation:
      "You can turn right on a red light after coming to a complete stop and yielding to pedestrians and other traffic, unless signs prohibit it.",
    image: "/saskatchewan-prairie-sunset.jpg",
  },
  {
    id: 13,
    question: "What does this sign indicate to drivers?",
    options: ["Pedestrian crossing ahead", "School crossing", "Playground zone", "Hospital zone"],
    correctAnswer: 0,
    explanation:
      "This sign indicates a designated pedestrian crossing area ahead where drivers must yield to pedestrians.",
    image: "/signs/pedestrian-crossing-sign.jpg",
  },
  {
    id: 14,
    question: "What should you do when approaching this warning sign?",
    options: ["Speed up", "Maintain speed", "Slow down and be cautious", "Stop completely"],
    correctAnswer: 2,
    explanation:
      "This slippery when wet sign warns you to slow down and drive cautiously in wet conditions as road traction is reduced.",
    image: "/signs/slippery-road-sign.jpg",
  },
  {
    id: 15,
    question: "In Saskatchewan, what is the speed limit in school zones during posted hours?",
    options: ["20 km/h", "30 km/h", "40 km/h", "50 km/h"],
    correctAnswer: 1,
    explanation:
      "The speed limit in Saskatchewan school zones is 30 km/h during posted hours when children are present.",
    image: "/saskatchewan-saskatoon-river.jpg",
  },
  {
    id: 16,
    question: "What maneuver is prohibited by this sign?",
    options: ["Right turns", "Left turns", "U-turns", "Straight through"],
    correctAnswer: 1,
    explanation: "This sign prohibits left turns at this intersection.",
    image: "/signs/no-left-turn-sign.jpg",
  },
  {
    id: 17,
    question: "According to SGI, what is the recommended following distance in good weather?",
    options: ["2-second rule", "3-second rule", "4-second rule", "5-second rule"],
    correctAnswer: 1,
    explanation:
      "Saskatchewan recommends the 3-second rule for following distance in good conditions. Increase this in poor weather.",
    image: "/saskatchewan-wheat-fields.jpg",
  },
  {
    id: 18,
    question: "What does this warning sign alert you to?",
    options: ["Construction ahead", "Merge traffic", "Lane ends", "Workers present"],
    correctAnswer: 0,
    explanation:
      "This construction zone sign warns drivers to reduce speed and be alert for workers and equipment ahead.",
    image: "/signs/construction-ahead-sign.jpg",
  },
  {
    id: 19,
    question: "In Saskatchewan, what is the minimum tread depth required for tires?",
    options: ["1.6 mm", "3.5 mm", "5.0 mm", "6.0 mm"],
    correctAnswer: 0,
    explanation:
      "Saskatchewan requires a minimum tread depth of 1.6 mm, though 3.5 mm is recommended for winter conditions.",
    image: "/saskatchewan-northern-lights.jpg",
  },
  {
    id: 20,
    question: "What should you do when you see this warning sign?",
    options: ["Speed up to cross quickly", "Stop, look, and listen for trains", "Sound your horn", "Proceed normally"],
    correctAnswer: 1,
    explanation:
      "Railway crossing signs require you to stop, look, and listen for trains before proceeding across the tracks.",
    image: "/signs/railway-crossing-sign.jpg",
  },
  {
    id: 21,
    question: "What does this warning sign alert you to watch for?",
    options: ["Cattle crossing", "Deer crossing the road", "Farm equipment", "Slow vehicles"],
    correctAnswer: 1,
    explanation: "This sign warns drivers to watch for deer crossing the road, especially during dawn and dusk hours.",
    image: "/signs/deer-crossing-sign.jpg",
  },
  {
    id: 22,
    question: "In Saskatchewan, what should you do when approaching an emergency vehicle with flashing lights?",
    options: [
      "Maintain your speed",
      "Slow down and move over if safe to do so",
      "Speed up to get out of the way",
      "Stop immediately",
    ],
    correctAnswer: 1,
    explanation:
      "Saskatchewan's 'Move Over' law requires you to slow down and move over to give emergency vehicles space when safe to do so.",
    image: "/saskatchewan-prairie-sunset.jpg",
  },
  {
    id: 23,
    question: "What does this regulatory sign mean?",
    options: ["No vehicles allowed", "Do not enter this roadway", "Road closed", "Authorized vehicles only"],
    correctAnswer: 1,
    explanation: "This 'Do Not Enter' sign prohibits all traffic from entering this roadway.",
    image: "/signs/do-not-enter-sign.jpg",
  },
  {
    id: 24,
    question: "According to SGI guidelines, when turning left at an intersection, you must yield to:",
    options: [
      "Vehicles turning right only",
      "Oncoming traffic and pedestrians",
      "Pedestrians only",
      "No one if you have a green light",
    ],
    correctAnswer: 1,
    explanation:
      "When turning left, you must yield to oncoming traffic and pedestrians crossing the street you're turning onto.",
    image: "/saskatchewan-saskatoon-river.jpg",
  },
  {
    id: 25,
    question: "What does this traffic sign indicate?",
    options: ["Lane ends", "Merge left ahead", "Construction zone", "Passing lane"],
    correctAnswer: 1,
    explanation: "This sign indicates that traffic must merge to the left due to lane closure or construction ahead.",
    image: "/signs/merge-left-sign.jpg",
  },
  {
    id: 26,
    question: "In Saskatchewan, what is the speed limit on undivided highways?",
    options: ["80 km/h", "90 km/h", "100 km/h", "110 km/h"],
    correctAnswer: 2,
    explanation: "The speed limit on undivided highways in Saskatchewan is 100 km/h unless otherwise posted.",
    image: "/saskatchewan-wheat-fields.jpg",
  },
  {
    id: 27,
    question: "According to SGI, how far must you park from a fire hydrant?",
    options: ["3 metres", "4.5 metres", "6 metres", "9 metres"],
    correctAnswer: 1,
    explanation: "You must park at least 4.5 metres away from a fire hydrant in Saskatchewan.",
    image: "/saskatchewan-regina-skyline.jpg",
  },
  {
    id: 28,
    question: "What does a flashing yellow light mean at a Saskatchewan intersection?",
    options: [
      "Stop completely",
      "Proceed with caution",
      "Speed up to clear the intersection",
      "Yield to oncoming traffic only",
    ],
    correctAnswer: 1,
    explanation: "A flashing yellow light means proceed with caution. Slow down and be prepared to stop if necessary.",
    image: "/saskatchewan-northern-lights.jpg",
  },
  {
    id: 29,
    question: "In Saskatchewan, what is the blood alcohol limit for new drivers (GDL)?",
    options: ["0.00%", "0.04%", "0.05%", "0.08%"],
    correctAnswer: 0,
    explanation: "New drivers in Saskatchewan's Graduated Driver Licensing program must maintain 0.00% blood alcohol.",
    image: "/saskatchewan-prairie-sunset.jpg",
  },
  {
    id: 30,
    question: "According to SGI, when should you check your blind spots?",
    options: [
      "Only when changing lanes",
      "Before changing lanes, turning, or backing up",
      "Only on highways",
      "Once per trip",
    ],
    correctAnswer: 1,
    explanation:
      "You should check blind spots before changing lanes, turning, backing up, or any time you're changing your vehicle's position.",
    image: "/saskatchewan-saskatoon-river.jpg",
  },
]

const getOntarioQuestions = (): Question[] => [
  {
    id: 1,
    question: "What is the speed limit in most urban areas in Ontario unless otherwise posted?",
    options: ["40 km/h", "50 km/h", "60 km/h", "70 km/h"],
    correctAnswer: 1,
    explanation: "The default speed limit in urban areas in Ontario is 50 km/h unless signs indicate otherwise.",
  },
  {
    id: 2,
    question: "What action must you take when you see this sign?",
    options: ["Complete stop required", "Slow down and proceed", "Yield to oncoming traffic", "Construction zone"],
    correctAnswer: 0,
    explanation:
      "A stop sign requires you to come to a complete stop at the stop line or before entering the intersection.",
    image: "/signs/stop-sign.jpg",
  },
  {
    id: 3,
    question: "In Ontario, what is the maximum speed limit on 400-series highways?",
    options: ["90 km/h", "100 km/h", "110 km/h", "120 km/h"],
    correctAnswer: 1,
    explanation: "The maximum speed limit on 400-series highways in Ontario is 100 km/h unless otherwise posted.",
  },
  {
    id: 4,
    question: "When you approach this sign, what must you do?",
    options: ["Stop completely", "Slow down and give way to traffic", "Merge with traffic", "Turn right only"],
    correctAnswer: 1,
    explanation: "A yield sign requires you to slow down and give the right of way to other traffic and pedestrians.",
    image: "/signs/yield-sign.jpg",
  },
  {
    id: 5,
    question: "What is the maximum speed allowed where you see this sign?",
    options: ["60 km/h", "Minimum 60 km/h", "Highway 60", "60 metres ahead"],
    correctAnswer: 0,
    explanation: "This is a regulatory speed limit sign indicating the maximum speed allowed is 60 km/h.",
    image: "/signs/speed-limit-60.jpg",
  },
  {
    id: 6,
    question: "In Ontario, what is the legal blood alcohol limit for fully licensed drivers?",
    options: ["0.05%", "0.08%", "0.10%", "0.00%"],
    correctAnswer: 1,
    explanation:
      "The legal blood alcohol limit for fully licensed drivers in Ontario is 0.08%. Warn range penalties start at 0.05%.",
  },
  {
    id: 7,
    question: "What does this regulatory sign prohibit?",
    options: ["No entry", "Do not enter", "No parking anytime", "No stopping"],
    correctAnswer: 2,
    explanation: "This sign indicates that parking is prohibited at all times in this area.",
    image: "/signs/no-parking-sign.jpg",
  },
  {
    id: 8,
    question: "In Ontario, what is the penalty for distracted driving (first offense)?",
    options: ["$280 fine", "$615 fine and 3 demerits", "$1000 fine", "License suspension only"],
    correctAnswer: 1,
    explanation:
      "Distracted driving in Ontario results in a $615 fine, 3 demerit points, and a 3-day license suspension for the first offense.",
  },
  {
    id: 9,
    question: "This sign warns you about what type of zone?",
    options: ["School zone ahead", "Playground zone", "Children playing area", "Reduced speed zone"],
    correctAnswer: 0,
    explanation: "This sign warns drivers that they are entering a school zone where reduced speeds apply.",
    image: "/signs/school-zone-sign.jpg",
  },
  {
    id: 10,
    question: "What does this sign indicate to drivers?",
    options: ["Pedestrian crossing ahead", "School crossing", "Playground zone", "Hospital zone"],
    correctAnswer: 0,
    explanation:
      "This sign indicates a designated pedestrian crossing area ahead where drivers must yield to pedestrians.",
    image: "/signs/pedestrian-crossing-sign.jpg",
  },
  {
    id: 11,
    question: "What maneuver is prohibited by this sign?",
    options: ["Right turns", "Left turns", "U-turns", "Straight through"],
    correctAnswer: 1,
    explanation: "This sign prohibits left turns at this intersection.",
    image: "/signs/no-left-turn-sign.jpg",
  },
  {
    id: 12,
    question: "In Ontario, when must you use headlights?",
    options: [
      "Only at night",
      "30 minutes before sunset to 30 minutes after sunrise",
      "Only in bad weather",
      "When visibility is less than 150 metres",
    ],
    correctAnswer: 1,
    explanation:
      "Ontario law requires headlights from 30 minutes before sunset to 30 minutes after sunrise, and when visibility is reduced.",
  },
  {
    id: 13,
    question: "What should you do when approaching this warning sign?",
    options: ["Speed up", "Maintain speed", "Slow down and be cautious", "Stop completely"],
    correctAnswer: 2,
    explanation: "This slippery when wet sign warns you to slow down and drive cautiously in wet conditions.",
    image: "/signs/slippery-road-sign.jpg",
  },
  {
    id: 14,
    question: "In Ontario, how far must you stop from a school bus with flashing red lights?",
    options: ["10 metres", "20 metres", "30 metres", "40 metres"],
    correctAnswer: 1,
    explanation: "You must stop at least 20 metres away from a school bus with flashing red lights in both directions.",
  },
  {
    id: 15,
    question: "What does this regulatory sign mean?",
    options: ["No vehicles allowed", "Do not enter this roadway", "Road closed", "Authorized vehicles only"],
    correctAnswer: 1,
    explanation: "This 'Do Not Enter' sign prohibits all traffic from entering this roadway.",
    image: "/signs/do-not-enter-sign.jpg",
  },
]

const getBritishColumbiaQuestions = (): Question[] => [
  {
    id: 1,
    question: "What is the speed limit in most urban areas in British Columbia unless otherwise posted?",
    options: ["40 km/h", "50 km/h", "60 km/h", "70 km/h"],
    correctAnswer: 1,
    explanation: "The default speed limit in urban areas in BC is 50 km/h unless signs indicate otherwise.",
  },
  {
    id: 2,
    question: "What action must you take when you see this sign?",
    options: ["Complete stop required", "Slow down and proceed", "Yield to oncoming traffic", "Construction zone"],
    correctAnswer: 0,
    explanation:
      "A stop sign requires you to come to a complete stop at the stop line or before entering the intersection.",
    image: "/signs/stop-sign.jpg",
  },
  {
    id: 3,
    question: "In BC, what is the maximum speed limit on most highways?",
    options: ["80 km/h", "90 km/h", "100 km/h", "110 km/h"],
    correctAnswer: 2,
    explanation: "The maximum speed limit on most BC highways is 100 km/h unless otherwise posted.",
  },
  {
    id: 4,
    question: "When you approach this sign, what must you do?",
    options: ["Stop completely", "Slow down and give way to traffic", "Merge with traffic", "Turn right only"],
    correctAnswer: 1,
    explanation: "A yield sign requires you to slow down and give the right of way to other traffic and pedestrians.",
    image: "/signs/yield-sign.jpg",
  },
  {
    id: 5,
    question: "What is the maximum speed allowed where you see this sign?",
    options: ["60 km/h", "Minimum 60 km/h", "Highway 60", "60 metres ahead"],
    correctAnswer: 0,
    explanation: "This is a regulatory speed limit sign indicating the maximum speed allowed is 60 km/h.",
    image: "/signs/speed-limit-60.jpg",
  },
  {
    id: 6,
    question: "In BC, what is the legal blood alcohol limit for fully licensed drivers?",
    options: ["0.05%", "0.08%", "0.10%", "0.00%"],
    correctAnswer: 1,
    explanation:
      "The legal blood alcohol limit for fully licensed drivers in BC is 0.08%. Immediate roadside prohibition starts at 0.05%.",
  },
  {
    id: 7,
    question: "What does this regulatory sign prohibit?",
    options: ["No entry", "Do not enter", "No parking anytime", "No stopping"],
    correctAnswer: 2,
    explanation: "This sign indicates that parking is prohibited at all times in this area.",
    image: "/signs/no-parking-sign.jpg",
  },
  {
    id: 8,
    question: "In BC, what is the penalty for using an electronic device while driving (first offense)?",
    options: ["$268 fine", "$368 fine and 4 demerits", "$500 fine", "$1000 fine"],
    correctAnswer: 1,
    explanation: "Using an electronic device while driving in BC results in a $368 fine and 4 demerit points.",
  },
  {
    id: 9,
    question: "This sign warns you about what type of zone?",
    options: ["School zone ahead", "Playground zone", "Children playing area", "Reduced speed zone"],
    correctAnswer: 0,
    explanation: "This sign warns drivers that they are entering a school zone where reduced speeds apply.",
    image: "/signs/school-zone-sign.jpg",
  },
  {
    id: 10,
    question: "What does this sign indicate to drivers?",
    options: ["Pedestrian crossing ahead", "School crossing", "Playground zone", "Hospital zone"],
    correctAnswer: 0,
    explanation:
      "This sign indicates a designated pedestrian crossing area ahead where drivers must yield to pedestrians.",
    image: "/signs/pedestrian-crossing-sign.jpg",
  },
  {
    id: 11,
    question: "What maneuver is prohibited by this sign?",
    options: ["Right turns", "Left turns", "U-turns", "Straight through"],
    correctAnswer: 1,
    explanation: "This sign prohibits left turns at this intersection.",
    image: "/signs/no-left-turn-sign.jpg",
  },
  {
    id: 12,
    question: "In BC, when must you use headlights?",
    options: [
      "Only at night",
      "30 minutes before sunset to 30 minutes after sunrise",
      "Only in bad weather",
      "When visibility is less than 150 metres",
    ],
    correctAnswer: 1,
    explanation:
      "BC law requires headlights from 30 minutes before sunset to 30 minutes after sunrise, and when visibility is reduced.",
  },
  {
    id: 13,
    question: "What should you do when approaching this warning sign?",
    options: ["Speed up", "Maintain speed", "Slow down and be cautious", "Stop completely"],
    correctAnswer: 2,
    explanation: "This slippery when wet sign warns you to slow down and drive cautiously in wet conditions.",
    image: "/signs/slippery-road-sign.jpg",
  },
  {
    id: 14,
    question: "In BC, what is the speed limit in school zones during posted hours?",
    options: ["20 km/h", "30 km/h", "40 km/h", "50 km/h"],
    correctAnswer: 1,
    explanation: "The speed limit in BC school zones is 30 km/h during posted hours.",
  },
  {
    id: 15,
    question: "What does this regulatory sign mean?",
    options: ["No vehicles allowed", "Do not enter this roadway", "Road closed", "Authorized vehicles only"],
    correctAnswer: 1,
    explanation: "This 'Do Not Enter' sign prohibits all traffic from entering this roadway.",
    image: "/signs/do-not-enter-sign.jpg",
  },
]

const getGenericProvinceQuestions = (provinceName: string): Question[] => [
  {
    id: 1,
    question: `What is the speed limit in most urban areas in ${provinceName} unless otherwise posted?`,
    options: ["40 km/h", "50 km/h", "60 km/h", "70 km/h"],
    correctAnswer: 1,
    explanation: `The default speed limit in urban areas in ${provinceName} is 50 km/h unless signs indicate otherwise.`,
  },
  {
    id: 2,
    question: "What action must you take when you see this sign?",
    options: ["Complete stop required", "Slow down and proceed", "Yield to oncoming traffic", "Construction zone"],
    correctAnswer: 0,
    explanation:
      "A stop sign requires you to come to a complete stop at the stop line or before entering the intersection.",
    image: "/signs/stop-sign.jpg",
  },
  {
    id: 3,
    question: "When must you stop for a school bus with flashing red lights?",
    options: [
      "Only when children are present",
      "When red lights are flashing",
      "During school hours only",
      "Never, just slow down",
    ],
    correctAnswer: 1,
    explanation: "You must stop when a school bus has its red lights flashing and stop sign extended.",
  },
  {
    id: 4,
    question: "What does a yellow traffic light mean?",
    options: ["Speed up to get through", "Stop if safe to do so", "Continue at current speed", "Honk your horn"],
    correctAnswer: 1,
    explanation: "A yellow light means caution - stop if you can do so safely.",
  },
  {
    id: 5,
    question: "What is the maximum speed allowed where you see this sign?",
    options: ["60 km/h", "Minimum 60 km/h", "Highway 60", "60 metres ahead"],
    correctAnswer: 0,
    explanation: "This is a regulatory speed limit sign indicating the maximum speed allowed is 60 km/h.",
    image: "/signs/speed-limit-60.jpg",
  },
  {
    id: 6,
    question: "What is the recommended following distance in normal conditions?",
    options: ["1 second", "2 seconds", "3 seconds", "4 seconds"],
    correctAnswer: 2,
    explanation: "The 3-second rule is recommended for safe following distance in normal conditions.",
  },
  {
    id: 7,
    question: "When parking uphill with a curb, which way should you turn your wheels?",
    options: ["Away from the curb", "Toward the curb", "Straight ahead", "It doesn't matter"],
    correctAnswer: 0,
    explanation:
      "When parking uphill with a curb, turn wheels away from the curb so the car won't roll into traffic if brakes fail.",
  },
  {
    id: 8,
    question: "What does this regulatory sign prohibit?",
    options: ["No entry", "Do not enter", "No parking anytime", "No stopping"],
    correctAnswer: 2,
    explanation: "This sign indicates that parking is prohibited at all times in this area.",
    image: "/signs/no-parking-sign.jpg",
  },
  {
    id: 9,
    question: "What is the legal blood alcohol limit for fully licensed drivers in most Canadian provinces?",
    options: ["0.05%", "0.08%", "0.10%", "0.00%"],
    correctAnswer: 1,
    explanation: "The legal blood alcohol limit for fully licensed drivers is 0.08% in most Canadian provinces.",
  },
  {
    id: 10,
    question: "When should you use your headlights?",
    options: [
      "Only at night",
      "30 minutes before sunset to 30 minutes after sunrise",
      "Only in bad weather",
      "Only when visibility is poor",
    ],
    correctAnswer: 1,
    explanation: "Most provinces require headlights from 30 minutes before sunset to 30 minutes after sunrise.",
  },
  {
    id: 11,
    question: "This sign warns you about what type of zone?",
    options: ["School zone ahead", "Playground zone", "Children playing area", "Reduced speed zone"],
    correctAnswer: 0,
    explanation: "This sign warns drivers that they are entering a school zone where reduced speeds apply.",
    image: "/signs/school-zone-sign.jpg",
  },
  {
    id: 12,
    question: "What should you do at a four-way stop?",
    options: [
      "The largest vehicle goes first",
      "First to arrive, first to go",
      "Always yield to the right",
      "Honk and proceed",
    ],
    correctAnswer: 1,
    explanation: "At a four-way stop, the first vehicle to arrive has the right of way.",
  },
  {
    id: 13,
    question: "When are you required to signal a lane change?",
    options: ["Only on highways", "At least 30 metres before", "Only in heavy traffic", "Signal is optional"],
    correctAnswer: 1,
    explanation: "You must signal at least 30 metres before changing lanes to give other drivers adequate warning.",
  },
  {
    id: 14,
    question: "What does this sign indicate to drivers?",
    options: ["Pedestrian crossing ahead", "School crossing", "Playground zone", "Hospital zone"],
    correctAnswer: 0,
    explanation:
      "This sign indicates a designated pedestrian crossing area ahead where drivers must yield to pedestrians.",
    image: "/signs/pedestrian-crossing-sign.jpg",
  },
  {
    id: 15,
    question: "What is the purpose of shoulder checking?",
    options: ["To check your posture", "To check blind spots", "To look for police", "To adjust mirrors"],
    correctAnswer: 1,
    explanation: "Shoulder checking helps you see vehicles in your blind spots before changing lanes or turning.",
  },
]

const shuffleArray = <T,>(array: T[]): T[] => {
  const shuffled = [...array]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled
}

export const getQuestionsByProvince = (provinceSlug: string): Question[] => {
  let allQuestions: Question[] = []

  switch (provinceSlug) {
    case "alberta":
      allQuestions = getAlbertaQuestions()
      break
    case "saskatchewan":
      allQuestions = getSaskatchewanQuestions()
      break
    case "ontario":
      allQuestions = getOntarioQuestions()
      break
    case "british-columbia":
      allQuestions = getBritishColumbiaQuestions()
      break
    case "quebec":
      allQuestions = getGenericProvinceQuestions("Quebec")
      break
    case "manitoba":
      allQuestions = getGenericProvinceQuestions("Manitoba")
      break
    case "nova-scotia":
      allQuestions = getGenericProvinceQuestions("Nova Scotia")
      break
    case "new-brunswick":
      allQuestions = getGenericProvinceQuestions("New Brunswick")
      break
    case "newfoundland-labrador":
      allQuestions = getGenericProvinceQuestions("Newfoundland and Labrador")
      break
    case "prince-edward-island":
      allQuestions = getGenericProvinceQuestions("Prince Edward Island")
      break
    case "northwest-territories":
      allQuestions = getGenericProvinceQuestions("Northwest Territories")
      break
    case "yukon":
      allQuestions = getGenericProvinceQuestions("Yukon")
      break
    case "nunavut":
      allQuestions = getGenericProvinceQuestions("Nunavut")
      break
    default:
      allQuestions = getGenericProvinceQuestions("Canada")
  }

  const shuffledQuestions = shuffleArray(allQuestions)
  return shuffledQuestions.slice(0, 15)
}
