import type { Question } from "./types"

const getSaskatchewanQuestions = (): Question[] => [
  {
    id: 3001,
    question: "What does a stop sign require you to do in Saskatchewan?",
    options: ["Slow down and continue if the intersection looks clear", "Come to a complete stop and proceed only when safe", "Stop only for pedestrians", "Honk before entering the intersection"],
    correctAnswer: 1,
    explanation: "SGI says a stop sign means you must come to a complete stop and not proceed until it is safe.",
    image: "/signs/stop-sign-canada.jpg",
  },
  {
    id: 3002,
    question: "What should you do when you see a warning sign for traffic signals ahead?",
    options: ["Maintain speed because you have priority", "Prepare to stop", "Turn on your four-way flashers", "Change lanes immediately"],
    correctAnswer: 1,
    explanation: "SGI's warning-sign section says a traffic signals ahead sign means be prepared to stop.",
    image: "/signs/traffic-signal-ahead.jpg",
  },
  {
    id: 3003,
    question: "What does a slippery-when-wet sign warn Saskatchewan drivers about?",
    options: ["Loose gravel only", "A bridge with a height restriction", "A road surface that can become slippery when wet", "An upcoming construction detour"],
    correctAnswer: 2,
    explanation: "SGI identifies this warning sign as meaning the road surface is slippery when wet.",
    image: "/signs/slippery-when-wet.jpg",
  },
  {
    id: 3004,
    question: "If there are no posted speed signs in Saskatchewan, what basic speed limit applies?",
    options: ["50 km/h", "60 km/h", "80 km/h", "100 km/h"],
    correctAnswer: 2,
    explanation: "SGI states that in the absence of signs, the speed limit in Saskatchewan is 80 km/h.",
    image: "/signs/speed-limit-60.jpg",
  },
  {
    id: 3005,
    question: "What is the maximum speed when passing a stopped tow truck or emergency vehicle with flashing lights in Saskatchewan?",
    options: ["40 km/h", "50 km/h", "60 km/h", "80 km/h"],
    correctAnswer: 2,
    explanation: "SGI says drivers must slow to 60 km/h when passing stopped tow trucks, service vehicles, or emergency vehicles with flashing lights.",
    image: "/signs/speed-limit-60.jpg",
  },
  {
    id: 3006,
    question: "What does the deer-crossing warning sign mean?",
    options: ["A zoo is nearby", "Wild animals regularly cross this section of road", "Hunting is allowed beside the highway", "There is a farm entrance ahead"],
    correctAnswer: 1,
    explanation: "SGI uses the deer-crossing sign to warn that this section of roadway is regularly crossed by deer.",
    image: "/signs/deer-crossing-sign.jpg",
  },
  {
    id: 3007,
    question: "How should you respond to a narrow bridge ahead sign?",
    options: ["Expect the pavement width ahead to be narrower than the approach", "Prepare for a railway crossing", "Move onto the shoulder", "Increase speed before the bridge"],
    correctAnswer: 0,
    explanation: "SGI says the narrow bridge sign warns that the width of pavement ahead is narrower than the approach.",
    image: "/signs/narrow-bridge.jpg",
  },
  {
    id: 3008,
    question: "What does a school-bus-stop-ahead sign tell you to expect?",
    options: ["A permanent detour", "A reduced speed limit at all hours", "A school bus stop where you must stop for flashing bus lights", "A railway crossing used by buses"],
    correctAnswer: 2,
    explanation: "SGI's warning-sign section says the school bus stop ahead sign warns drivers to stop for a bus with flashing lights.",
    image: "/signs/school-zone-sign.jpg",
  },
  {
    id: 3009,
    question: "What should drivers do in Saskatchewan school zones if there are no posted signs?",
    options: ["Continue at the regular speed limit", "Reduce speed and proceed cautiously", "Stop at every crosswalk", "Drive with high beams on"],
    correctAnswer: 1,
    explanation: "SGI says that even if no signs are posted, drivers should reduce speed and proceed cautiously in school zones.",
    image: "/signs/school-zone-sign.jpg",
  },
  {
    id: 3010,
    question: "What does a checkerboard sign mean?",
    options: ["Road work zone begins", "Road ends", "Two-way traffic starts", "Hidden intersection ahead"],
    correctAnswer: 1,
    explanation: "SGI identifies the checkerboard sign as a warning that the road ends.",
    image: "/signs/do-not-enter.jpg",
  },
  {
    id: 3011,
    question: "What does a lane-ends sign warn about?",
    options: ["The paved road becomes gravel immediately", "A lane will end ahead", "Only buses may use the lane ahead", "Traffic must merge into oncoming traffic"],
    correctAnswer: 1,
    explanation: "SGI's warning signs include lane ends signs to show that a lane, such as the right lane, ends ahead.",
    image: "/signs/merge-left-sign.jpg",
  },
  {
    id: 3012,
    question: "Why must you keep watching for traffic signs while driving in Saskatchewan?",
    options: ["Because signs are only used in cities", "Because SGI says signs must be recognized and obeyed without hesitation", "Because most signs are optional guidance", "Because signs replace traffic lights"],
    correctAnswer: 1,
    explanation: "SGI says drivers should learn sign shapes and colours so they can recognize and obey traffic signs without hesitation.",
    image: "/signs/two-way-traffic.jpg",
  },
]


const getAlbertaQuestions = (): Question[] => [
  {
    id: 2001,
    question: "Which Alberta guide should Class 7 learners study to prepare for the knowledge test?",
    options: ["Commercial Driver's Guide", "Driver's Guide: Cars and light trucks", "Rider's Guide", "School Bus Manual"],
    correctAnswer: 1,
    explanation: "Alberta directs Class 7 learners to study the Driver's Guide: Cars and light trucks before taking the knowledge test.",
    image: "/alberta-rocky-mountains.jpg",
  },
  {
    id: 2002,
    question: "What does Alberta say safe driving takes study and practice to develop?",
    options: ["Luck, speed and confidence", "Attitude, awareness, knowledge and skill", "Strength, endurance and reaction time", "Navigation, parking and map reading"],
    correctAnswer: 1,
    explanation: "The Alberta driver guide overview says safe driving takes study and practice to develop attitude, awareness, knowledge and skill.",
  },
  {
    id: 2003,
    question: "According to Alberta's official guide overview, what does the Driver's Guide for cars and light trucks provide information about?",
    options: ["Only vehicle maintenance", "Rules of the road, how to drive, and how to get a driver's licence", "Only road signs", "Only commercial driving"],
    correctAnswer: 1,
    explanation: "The overview states that the Driver's Guide for cars and light trucks covers the rules of the road, how to drive, and how to get a driver's licence.",
  },
  {
    id: 2004,
    question: "What do Alberta knowledge tests assess?",
    options: ["Only parallel parking skills", "Knowledge of Alberta's traffic laws", "Mechanical repair ability", "Highway driving speed"],
    correctAnswer: 1,
    explanation: "Alberta states that knowledge tests assess your knowledge of Alberta's traffic laws.",
    image: "/alberta-rocky-mountains.jpg",
  },
  {
    id: 2005,
    question: "In Alberta school zones, what is the speed limit according to the school bus safety bulletin unless otherwise posted?",
    options: ["20 km/h", "30 km/h", "40 km/h", "50 km/h"],
    correctAnswer: 1,
    explanation: "The Alberta school bus safety bulletin says school zones have a speed limit of 30 km/h in both urban and rural areas, unless otherwise posted.",
    image: "/signs/school-zone-sign.jpg",
  },
  {
    id: 2006,
    question: "What are Alberta drivers encouraged to take from licensed schools when learning to drive?",
    options: ["Mechanical inspections", "Driver education and training", "Winter tire certification", "A commercial licence exam"],
    correctAnswer: 1,
    explanation: "New drivers in Alberta are encouraged to take driver education and training from a licensed driver training school.",
    image: "/alberta-banff-lake-louise.jpg",
  },
  {
    id: 2007,
    question: "How often can you take the Alberta knowledge test?",
    options: ["Once a day", "Twice a day", "Once a week", "Unlimited times per day"],
    correctAnswer: 0,
    explanation: "Alberta's Class 7 learner's licence page says you can take the knowledge test once a day.",
    image: "/alberta-rocky-mountains.jpg",
  },
  {
    id: 2008,
    question: "Which Alberta driver guide is used as a supplement when preparing for the Class 6 knowledge test?",
    options: ["Commercial Driver's Guide", "Driver's Guide: Cars and light trucks", "Rider's Guide", "Air Brake Handbook"],
    correctAnswer: 2,
    explanation: "Alberta says the Rider's Guide is used as a supplement to the Driver's Guide: Cars and light trucks when preparing for the Class 6 knowledge test.",
    image: "/alberta-rocky-mountains.jpg",
  },
  {
    id: 2009,
    question: "Which Alberta guide is used as a supplement when preparing for commercial licence knowledge tests?",
    options: ["Rider's Guide", "Commercial Driver's Guide", "Class 7 quick guide", "School zone bulletin"],
    correctAnswer: 1,
    explanation: "The Commercial Driver's Guide is used as a supplement to the Driver's Guide: Cars and light trucks when preparing for commercial licence knowledge tests.",
    image: "/alberta-rocky-mountains.jpg",
  },
  {
    id: 2010,
    question: "What kind of driving attitude does Alberta say drivers should develop every time they drive?",
    options: ["Competitive and assertive", "Safe and responsible", "Fast and efficient", "Relaxed and informal"],
    correctAnswer: 1,
    explanation: "The Alberta overview says drivers should develop an attitude of safe and responsible driving every time they drive.",
  },
]

const getOntarioQuestions = (): Question[] => [
  {
    id: 1001,
    question: "What is the minimum age to apply for a driver's licence in Ontario?",
    options: ["14 years old", "15 years old", "16 years old", "18 years old"],
    correctAnswer: 2,
    explanation: "Ontario residents must be at least 16 years old to drive and to apply for an Ontario driver's licence.",
  },
  {
    id: 1002,
    question: "If you become an Ontario resident, how long can you continue to use your existing driver's licence before applying for an Ontario licence?",
    options: ["30 days", "45 days", "60 days", "90 days"],
    correctAnswer: 2,
    explanation: "New Ontario residents have 60 days to continue using their existing driver's licence and apply for an Ontario driver's licence.",
  },
  {
    id: 1003,
    question: "What does defensive driving in Ontario mainly focus on?",
    options: ["Power, acceleration and speed", "Visibility, space and communication", "Parking, signalling and fuel economy", "Navigation, road trips and route planning"],
    correctAnswer: 1,
    explanation: "Ontario's handbook says defensive driving is based on three ideas: visibility, space and communication.",
  },
  {
    id: 1004,
    question: "How often should you check your mirrors according to Ontario's defensive driving guidance?",
    options: ["Every 2 seconds", "Every 5 seconds or so", "Only before changing lanes", "Only when slowing down"],
    correctAnswer: 1,
    explanation: "The handbook advises drivers to keep their eyes moving and check mirrors every five seconds or so.",
  },
  {
    id: 1005,
    question: "What must you do at a stop sign in Ontario?",
    options: ["Slow down and proceed if clear", "Stop only for pedestrians", "Come to a complete stop and wait until the way is clear", "Honk before entering the intersection"],
    correctAnswer: 2,
    explanation: "A stop sign means you must come to a complete stop at the proper stopping point and wait until the way is clear before entering the intersection.",
    image: "/signs/stop-sign.jpg",
  },
  {
    id: 1006,
    question: "What does a yield sign mean in Ontario?",
    options: ["You have the right of way", "You must let traffic in or close to the intersection go first", "You must always stop for 3 seconds", "You should speed up before merging"],
    correctAnswer: 1,
    explanation: "A yield sign means you must let traffic in the intersection or close to it go first, stopping if necessary and proceeding only when the way is clear.",
    image: "/signs/yield-sign.jpg",
  },
  {
    id: 1007,
    question: "What should you do when you see an Ontario school zone sign?",
    options: ["Maintain your speed unless children are visible", "Slow down, drive with extra caution and watch for children", "Stop immediately in all cases", "Change lanes away from the curb"],
    correctAnswer: 1,
    explanation: "The school zone sign warns that you are coming to a school zone. Drivers should slow down, use extra caution and watch for children.",
    image: "/signs/school-zone-sign.jpg",
  },
  {
    id: 1008,
    question: "What does a railway crossing sign warn drivers about in Ontario?",
    options: ["A pedestrian crossover ahead", "A stop-controlled intersection", "Railway tracks crossing the road", "A construction detour"],
    correctAnswer: 2,
    explanation: "A railway crossing sign warns that railway tracks cross the road. You should slow down, look both ways for trains and be prepared to stop.",
    image: "/signs/railway-crossing-sign.jpg",
  },
  {
    id: 1009,
    question: "When yellow lights are flashing in a lower-speed Ontario school zone, what must drivers do?",
    options: ["Ignore them outside school hours", "Observe the lower posted speed limit", "Stop and wait for a crossing guard", "Drive no faster than 50 km/h"],
    correctAnswer: 1,
    explanation: "The handbook states that in these zones, drivers must observe the lower speed limit shown when the yellow lights are flashing.",
    image: "/signs/school-zone-sign.jpg",
  },
  {
    id: 1010,
    question: "What does the Ontario handbook say you must do when a school bus has flashing signals?",
    options: ["Proceed carefully if you are in the opposite lane", "Stop for the school bus when signals are flashing", "Only stop in school zones", "Stop only if children are visible"],
    correctAnswer: 1,
    explanation: "Ontario's handbook includes the rule to stop for a school bus when its signals are flashing.",
    image: "/ontario-cn-tower.jpg",
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
    question: "What action must you take when you see this regulatory sign?",
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
    question: "When you approach this regulatory sign, what must you do?",
    options: ["Stop completely", "Slow down and give way to traffic", "Merge with traffic", "Turn right only"],
    correctAnswer: 1,
    explanation: "A yield sign requires you to slow down and give the right of way to other traffic and pedestrians.",
    image: "/signs/yield-sign.jpg",
  },
  {
    id: 5,
    question: "What is the maximum speed allowed where you see this regulatory sign?",
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
    question: "What maneuver is prohibited by this regulatory sign?",
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
    question: "What action must you take when you see this regulatory sign?",
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
    question: "What is the maximum speed allowed where you see this regulatory sign?",
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
