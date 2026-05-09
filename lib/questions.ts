import type { Question } from "./types"

const getSaskatchewanQuestions = (): Question[] => [
  {
    id: 3001,
    question: "What does a stop sign require you to do in Saskatchewan?",
    options: ["Slow down and continue if the intersection looks clear", "Come to a complete stop and proceed only when safe", "Stop only for pedestrians", "Honk before entering the intersection"],
    correctAnswer: 1,
    explanation: "SGI says a stop sign means you must come to a complete stop and not proceed until it is safe.",
    image: "/signs/stop-sign-canada.jpg",
    categories: ["Signs", "Right-of-Way"],
  },
  {
    id: 3002,
    question: "What should you do when you see a warning sign for traffic signals ahead?",
    options: ["Maintain speed because you have priority", "Prepare to stop", "Turn on your four-way flashers", "Change lanes immediately"],
    correctAnswer: 1,
    explanation: "SGI's warning-sign section says a traffic signals ahead sign means be prepared to stop.",
    image: "/signs/traffic-signal-ahead.jpg",
    categories: ["Signs", "Safety"],
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
    categories: ["Speed", "Rules"],
  },
  {
    id: 3005,
    question: "What is the maximum speed when passing a stopped tow truck or emergency vehicle with flashing lights in Saskatchewan?",
    options: ["40 km/h", "50 km/h", "60 km/h", "80 km/h"],
    correctAnswer: 2,
    explanation: "SGI says drivers must slow to 60 km/h when passing stopped tow trucks, service vehicles, or emergency vehicles with flashing lights.",
    image: "/signs/speed-limit-60.jpg",
    categories: ["Speed", "Emergency Vehicles"],
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
  },
  {
    id: 2005,
    question: "In Alberta school zones, what is the speed limit according to the school bus safety bulletin unless otherwise posted?",
    options: ["20 km/h", "30 km/h", "40 km/h", "50 km/h"],
    correctAnswer: 1,
    explanation: "The Alberta school bus safety bulletin says school zones have a speed limit of 30 km/h in both urban and rural areas, unless otherwise posted.",
    image: "/signs/school-zone-sign.jpg",
    categories: ["School Zone", "Speed"],
  },
  {
    id: 2006,
    question: "What are Alberta drivers encouraged to take from licensed schools when learning to drive?",
    options: ["Mechanical inspections", "Driver education and training", "Winter tire certification", "A commercial licence exam"],
    correctAnswer: 1,
    explanation: "New drivers in Alberta are encouraged to take driver education and training from a licensed driver training school.",
  },
  {
    id: 2007,
    question: "How often can you take the Alberta knowledge test?",
    options: ["Once a day", "Twice a day", "Once a week", "Unlimited times per day"],
    correctAnswer: 0,
    explanation: "Alberta's Class 7 learner's licence page says you can take the knowledge test once a day.",
  },
  {
    id: 2008,
    question: "Which Alberta driver guide is used as a supplement when preparing for the Class 6 knowledge test?",
    options: ["Commercial Driver's Guide", "Driver's Guide: Cars and light trucks", "Rider's Guide", "Air Brake Handbook"],
    correctAnswer: 2,
    explanation: "Alberta says the Rider's Guide is used as a supplement to the Driver's Guide: Cars and light trucks when preparing for the Class 6 knowledge test.",
  },
  {
    id: 2009,
    question: "Which Alberta guide is used as a supplement when preparing for commercial licence knowledge tests?",
    options: ["Rider's Guide", "Commercial Driver's Guide", "Class 7 quick guide", "School zone bulletin"],
    correctAnswer: 1,
    explanation: "The Commercial Driver's Guide is used as a supplement to the Driver's Guide: Cars and light trucks when preparing for commercial licence knowledge tests.",
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
    categories: ["Signs", "Right-of-Way"],
  },
  {
    id: 1006,
    question: "What does a yield sign mean in Ontario?",
    options: ["You have the right of way", "You must let traffic in or close to the intersection go first", "You must always stop for 3 seconds", "You should speed up before merging"],
    correctAnswer: 1,
    explanation: "A yield sign means you must let traffic in the intersection or close to it go first, stopping if necessary and proceeding only when the way is clear.",
    image: "/signs/yield-sign.jpg",
    categories: ["Signs", "Right-of-Way"],
  },
  {
    id: 1007,
    question: "What should you do when you see an Ontario school zone sign?",
    options: ["Maintain your speed unless children are visible", "Slow down, drive with extra caution and watch for children", "Stop immediately in all cases", "Change lanes away from the curb"],
    correctAnswer: 1,
    explanation: "The school zone sign warns that you are coming to a school zone. Drivers should slow down, use extra caution and watch for children.",
    image: "/signs/school-zone-sign.jpg",
    categories: ["Signs", "School Zone"],
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
    categories: ["School Zone", "Safety"],
  },
]

const getBritishColumbiaQuestions = (): Question[] => [
  {
    id: 4001,
    question: "According to ICBC, what is the speed limit in most urban areas unless a sign shows otherwise?",
    options: ["40 km/h", "50 km/h", "60 km/h", "70 km/h"],
    correctAnswer: 1,
    explanation: "ICBC's Learn to Drive Smart states that the speed limit in most urban areas is 50 km/h unless posted otherwise.",
    categories: ["Speed", "Rules of the Road"],
  },
  {
    id: 4002,
    question: "What does a stop sign require BC drivers to do?",
    options: ["Slow down and continue if clear", "Come to a complete stop and proceed only when safe", "Stop only for pedestrians", "Honk before entering the intersection"],
    correctAnswer: 1,
    explanation: "ICBC says a stop sign requires you to come to a complete stop and not move again until the way is clear.",
    image: "/signs/stop-sign.jpg",
    categories: ["Signs", "Right-of-Way"],
  },
  {
    id: 4003,
    question: "What does a yield sign mean in British Columbia?",
    options: ["You have priority over all traffic", "You must let traffic close to the intersection go first", "You must always stop for three seconds", "You should merge without slowing down"],
    correctAnswer: 1,
    explanation: "ICBC explains that at a yield sign you must give the right of way to traffic close enough to be a hazard.",
    image: "/signs/yield-sign.jpg",
    categories: ["Signs", "Right-of-Way"],
  },
  {
    id: 4004,
    question: "What is the maximum speed limit on most BC highways unless signs show a different speed?",
    options: ["80 km/h", "90 km/h", "100 km/h", "110 km/h"],
    correctAnswer: 2,
    explanation: "Learn to Drive Smart notes that the maximum speed on most BC highways is 100 km/h unless posted otherwise.",
    categories: ["Speed", "Rules of the Road"],
  },
  {
    id: 4005,
    question: "What does a 60 km/h regulatory sign mean?",
    options: ["The minimum speed is 60 km/h", "The maximum speed is 60 km/h", "Highway 60 is ahead", "A speed check starts in 60 metres"],
    correctAnswer: 1,
    explanation: "A regulatory speed sign tells you the maximum legal speed for that section of road.",
    image: "/signs/speed-limit-60.jpg",
    categories: ["Signs", "Speed"],
  },
  {
    id: 4006,
    question: "In BC school zones during posted hours, what speed limit applies unless another sign says differently?",
    options: ["20 km/h", "30 km/h", "40 km/h", "50 km/h"],
    correctAnswer: 1,
    explanation: "ICBC says the speed limit in school zones is 30 km/h during posted hours unless a different speed is posted.",
    image: "/signs/school-zone-sign.jpg",
    categories: ["School Zone", "Speed"],
  },
  {
    id: 4007,
    question: "What should BC drivers do when approaching a pedestrian crossing sign?",
    options: ["Speed up to clear the crossing", "Be ready to yield to pedestrians", "Stop only if a police officer is present", "Change lanes immediately"],
    correctAnswer: 1,
    explanation: "Pedestrian crossing signs warn you to watch for people crossing and be ready to yield when required.",
    image: "/signs/pedestrian-crossing-sign.jpg",
    categories: ["Signs", "Pedestrians"],
  },
  {
    id: 4008,
    question: "What does ICBC say about using a hand-held electronic device while driving?",
    options: ["It is allowed in slow traffic", "It is prohibited for drivers", "It is allowed if you keep one hand on the wheel", "It is only banned on highways"],
    correctAnswer: 1,
    explanation: "BC distracted-driving rules prohibit drivers from using hand-held electronic devices while driving.",
    categories: ["Safety", "Distracted Driving"],
  },
  {
    id: 4009,
    question: "When must you use headlights in British Columbia?",
    options: ["Only in complete darkness", "From 30 minutes after sunset to 30 minutes before sunrise", "From 30 minutes before sunset to 30 minutes after sunrise and when visibility is poor", "Only when it is raining"],
    correctAnswer: 2,
    explanation: "BC law requires headlights from 30 minutes before sunset until 30 minutes after sunrise, and whenever visibility is limited.",
    categories: ["Safety", "Visibility"],
  },
  {
    id: 4010,
    question: "What does a no-left-turn sign mean?",
    options: ["Left turns are only allowed at night", "You may not turn left at that location", "You must turn left from the next lane", "U-turns are required"],
    correctAnswer: 1,
    explanation: "A no-left-turn sign means left turns are prohibited at that intersection or access point.",
    image: "/signs/no-left-turn-sign.jpg",
    categories: ["Signs", "Rules of the Road"],
  },
  {
    id: 4011,
    question: "What does a no-parking sign tell BC drivers?",
    options: ["You cannot stop for any reason", "You may stop briefly but cannot park there", "You can park only with hazard lights on", "You can load passengers only at night"],
    correctAnswer: 1,
    explanation: "A no-parking sign means you may stop temporarily to load or unload where allowed, but you may not leave your vehicle parked there.",
    image: "/signs/no-parking-sign.jpg",
    categories: ["Signs", "Parking"],
  },
  {
    id: 4012,
    question: "What does a do-not-enter sign mean?",
    options: ["No vehicles are allowed at any time", "Do not enter that roadway from your direction", "The road ends in 100 metres", "Only buses may enter"],
    correctAnswer: 1,
    explanation: "A do-not-enter sign tells you traffic must not enter from that direction.",
    image: "/signs/do-not-enter-sign.jpg",
    categories: ["Signs", "Rules of the Road"],
  },
  {
    id: 4013,
    question: "What should you do when you see a slippery-when-wet warning sign?",
    options: ["Increase speed before the surface changes", "Slow down and drive with extra caution", "Move onto the shoulder", "Brake hard immediately"],
    correctAnswer: 1,
    explanation: "ICBC warns that slippery surfaces require lower speed, smoother steering, and gentler braking.",
    image: "/signs/slippery-road-sign.jpg",
    categories: ["Signs", "Safety"],
  },
  {
    id: 4014,
    question: "Why does ICBC emphasize shoulder checks before changing lanes or turning?",
    options: ["To check tire position", "To check blind spots that mirrors may miss", "To signal to pedestrians", "To confirm your headlights are on"],
    correctAnswer: 1,
    explanation: "Learn to Drive Smart stresses shoulder checks because mirrors do not show every vehicle, cyclist, or hazard beside you.",
    categories: ["Safety", "Blind Spots"],
  },
  {
    id: 4015,
    question: "What is the best way to use this BC practice test?",
    options: ["Use it instead of reading the handbook", "Use it with the ICBC handbook to find and fix weak spots", "Rely only on sign pictures and skip explanations", "Only use it once right before the test"],
    correctAnswer: 1,
    explanation: "This practice set works best when paired with ICBC's Learn to Drive Smart guide so weak topics can be reviewed directly.",
    image: "/bc-coastal-mountains.jpg",
    categories: ["Study Strategy", "Handbook Use"],
  },
]

const getGenericProvinceQuestions = (provinceName: string): Question[] => [
  {
    id: 1,
    question: `What is the speed limit in most urban areas in ${provinceName} unless otherwise posted?`,
    options: ["40 km/h", "50 km/h", "60 km/h", "70 km/h"],
    correctAnswer: 1,
    explanation: `This is a general practice rule used in the app. Always confirm the exact default speed limit for ${provinceName} in the official driver handbook.`,
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
    explanation: "This is a general school-bus safety rule used for practice. Check your province handbook for exact stop requirements and roadway exceptions.",
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
    explanation: "This is a common Canadian rule used for practice, but exact headlight requirements can vary by province and conditions.",
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
