export const site = {
  name: "Marlow Auto Detail",
  title: "Marlow Auto Detail — Car Detailing in Manchester",
  description:
    "Interior detailing, deep cleansing and paint enhancement. Considered car care in Manchester, Salford and Trafford.",
  tagline: "A little obsessive. A lot of detail.",
  bookingCta: "Plan your detail",
  nav: [
    ["Services", "services"],
    ["The details", "the-details"],
    ["Our process", "how-it-works"],
    ["Visit us", "contact"],
  ],
  notFound: {
    title: "This page has taken a wrong turn.",
    body: "Let’s get you back on the right road.",
    action: "Back to home",
  },
} as const;
export const services = [
  {
    id: "interior",
    name: "Interior Detail",
    price: 95,
    duration: "3–4 hours",
    headline: "Fresh start.\nInside out.",
    benefit: "A considered clean for the spaces you use every day.",
    image: "interior",
    alt: "Close-up of a Volkswagen steering wheel and dashboard.",
    includes: [
      "Vacuuming",
      "Upholstery cleaning",
      "Dashboard and trim care",
      "Interior glass",
    ],
    note: "",
  },
  {
    id: "exterior",
    name: "Exterior Detail",
    price: 85,
    duration: "2–3 hours",
    headline: "Clean lines.\nClear reflections.",
    benefit:
      "Remove everyday grime and leave the exterior clean and protected.",
    image: "exterior.png",
    alt: "Rear view of an orange Porsche 911 GT3 RS parked between industrial buildings.",
    includes: [
      "Exterior wash",
      "Decontamination",
      "Wheel care",
      "Protective sealant",
    ],
    note: "",
  },
  {
    id: "polishing",
    name: "Enhancement Polish",
    price: 220,
    duration: "1 day",
    headline: "Turn up\nthe gloss.",
    benefit: "Refine the finish and improve gloss with a single-stage polish.",
    image: "craft",
    alt: "Detailer working with a microfibre cloth on a green sports car.",
    includes: [
      "Exterior preparation",
      "Single-stage machine polishing",
      "Finishing protection",
    ],
    note: "",
  },
  {
    id: "ceramic",
    name: "Deep Cleansing",
    price: 450,
    duration: "2–3 days",
    headline: "Deep clean.\nFresh finish.",
    benefit:
      "Lift ingrained grime and revive tired surfaces for a clean, refreshed finish.",
    image: "wash-after.png",
    alt: "Car exterior after deep cleansing, with a clean refreshed finish.",
    includes: [
      "Exterior wash",
      "Wheel and tyre clean",
      "Door shuts and trim care",
      "Finishing protection",
    ],
    note: "",
  },
  {
    id: "correction",
    name: "Paint Correction",
    price: 350,
    duration: "1–2 days",
    headline: "Less swirl.\nMore wow.",
    benefit:
      "A tailored approach to reducing suitable swirl marks and fine paint defects.",
    image: "paint-correction-after.png",
    alt: "Red sports car paintwork after correction, with a clear glossy finish.",
    includes: [
      "Paint assessment",
      "Agreed correction stages",
      "Finishing protection",
    ],
    note: "Suitability depends on paint condition. Some defects cannot safely be removed.",
  },
] as const;
export type ServiceId = (typeof services)[number]["id"];
export const steps = [
  [
    "Get acquainted.",
    "Start with your car, its condition, and what you want to achieve.",
  ],
  ["Make a plan.", "Agree the treatment, scope and price before work begins."],
  [
    "Into the details.",
    "Preparation, careful treatment, and a final inspection. Every stage matters.",
  ],
  [
    "Take the long way home.",
    "Collect your car with aftercare guidance to keep that fresh feeling.",
  ],
] as const;
export const hours = [
  ["Monday–Friday", "09:00–18:00"],
  ["Saturday", "09:00–16:00"],
  ["Sunday", "Closed"],
] as const;
export const faqs = [
  [
    "Which detail is right for my car?",
    "Interior Detail focuses on the cabin. Exterior Detail refreshes the outside. Deep Cleansing lifts ingrained grime, Enhancement Polish improves gloss, and Paint Correction targets suitable defects.",
  ],
  [
    "How much will it cost?",
    "Packages start at the prices shown. Vehicle size, condition and the agreed scope determine the final quotation.",
  ],
  [
    "How long will it take?",
    "Allow 2–3 hours for an exterior detail, 3–4 hours for interior care, and up to 2–3 days for deep cleansing. Timing depends on your vehicle and the treatment.",
  ],
  [
    "Will polishing remove every scratch?",
    "No. Defect depth and paint condition determine what can safely be improved. Deep scratches may need a different repair.",
  ],
  [
    "Do you offer mobile detailing?",
    "Our services are designed around studio appointments. Visits are by appointment.",
  ],
] as const;
export const formCopy = {
  missing: "Please complete this field.",
  lengthError: "Use 100 characters or fewer.",
  emailError: "Enter a valid email address.",
  phoneError: "Enter a valid phone number.",
  serviceError: "Choose a service or select “Not sure — advise me”.",
  dateError: "Enter a valid calendar date.",
  pastDate: "Choose today or a future date.",
  notesError: "Use 1,000 characters or fewer.",
} as const;
