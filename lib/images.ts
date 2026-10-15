// Free-to-use Unsplash photography (Unsplash License), served through next/image
// so every image is resized, converted to AVIF/WebP and cached on our domain.

export type ImageKey = keyof typeof IMAGES;

export const IMAGES = {
  doctorPatient: { id: "photo-1631217868264-e5b90bb7e133", alt: "OB/GYN physician talking with a patient in a clinic exam room" },
  doctorConsult: { id: "photo-1666214277730-e9c7e755e5a3", alt: "Women's health doctor consulting with a patient in a medical office" },
  billingLaptop: { id: "photo-1576091160550-2173dba999ef", alt: "Medical biller working on a laptop next to a stethoscope" },
  calculatorStethoscope: { id: "photo-1708449903767-c4e97772c26e", alt: "Stethoscope resting on a calculator, representing medical billing and fee schedules" },
  stethoscopeMoney: { id: "photo-1702306946700-4cae9f2dfe82", alt: "Stethoscope on top of money, representing practice revenue and collections" },
  pregnantUltrasound: { id: "photo-1654931800911-7a9cfb3b7c17", alt: "Expectant mother holding an ultrasound scan during prenatal care" },
  coupleUltrasound: { id: "photo-1741900460432-af18a6491aef", alt: "Couple looking at prenatal ultrasound pictures" },
  pregnantBelly: { id: "photo-1457342813143-a1ae27448a82", alt: "Pregnant woman cradling her belly during the antepartum period" },
  bellyTouch: { id: "photo-1711313532327-2f47602eb6ba", alt: "Close-up of hands on a pregnant belly" },
  newborn: { id: "photo-1766299893052-107053bc92a1", alt: "Mother holding her newborn baby in a hospital bed after delivery" },
  newbornScale: { id: "photo-1559835491-08d2e0781dd9", alt: "Newborn baby on a digital scale in the hospital" },
  surgeryTeam: { id: "photo-1579684453423-f84349ef60b0", alt: "Surgical team performing a gynecologic procedure in an operating room" },
  operatingRoom: { id: "photo-1579154491915-611e891d3a5b", alt: "Surgeon and nurses in an operating room" },
  robotic: { id: "photo-1776104501583-3c83f2adfc3d", alt: "Surgeon operating robotic surgical equipment" },
  telehealth: { id: "photo-1758691462743-f9fc9e430d39", alt: "Doctor consulting a patient through a telehealth video call on a laptop" },
  telehealth2: { id: "photo-1758691463606-1493d79cc577", alt: "Physician holding a virtual visit with a patient online" },
  doctorKeyboard: { id: "photo-1758691462860-b1b9532c7394", alt: "Doctor typing clinical documentation with a stethoscope nearby" },
  femaleDoctorDesk: { id: "photo-1758691462651-611d730c5272", alt: "Female physician working at her desk in a medical office" },
  officeConsult: { id: "photo-1758691462878-6edc3d3da1be", alt: "Doctor consulting with a patient in a medical office" },
  femaleDoctor: { id: "photo-1584432810601-6c7f27d2362b", alt: "Female doctor in a white coat with a stethoscope" },
  hospitalLobby: { id: "photo-1519494026892-80bbd2d6fd0d", alt: "Hospital lobby and front desk reception area" },
  analytics: { id: "photo-1551288049-bebda4e38f71", alt: "Revenue cycle analytics charts on a laptop screen" },
  analyticsLaptop: { id: "photo-1460925895917-afdab827c52f", alt: "Laptop showing practice performance reports" },
  tabletFinance: { id: "photo-1748609160056-7b95f30041f0", alt: "Practice manager reviewing financial data on a tablet" },
  documents: { id: "photo-1583521214690-73421a1829a9", alt: "Stacks of paper claims and file folders in a billing office" },
  reviewingDocs: { id: "photo-1758876020343-c8c2add9d527", alt: "Billing specialist reviewing documents at a desk" },
  colleaguesDocs: { id: "photo-1758611972678-bc3b29b4718f", alt: "Two colleagues reviewing billing documents together" },
  signing: { id: "photo-1562564055-71e051d33c19", alt: "Provider signing enrollment paperwork" },
  binders: { id: "photo-1544396821-4dd40b938ad3", alt: "Rows of organized binders on office shelves" },
  meeting: { id: "photo-1600880292203-757bb62b4baf", alt: "Practice owner meeting with a billing consultant" },
  teamMeeting: { id: "photo-1517048676732-d65bc937f952", alt: "Team meeting around a conference table" },
  cardiology: { id: "photo-1532938911079-1b06ac7ceec7", alt: "Doctor holding a red stethoscope, representing cardiology" },
  city: { id: "photo-1480714378408-67cf0d13bc1b", alt: "American city skyline representing practices served nationwide" },
  usFlag: { id: "photo-1499188073299-5bd9060e044b", alt: "United States flag" },
} as const;

export function imgUrl(key: ImageKey, width = 1600): string {
  return `https://images.unsplash.com/${IMAGES[key].id}?auto=format&fit=crop&w=${width}&q=75`;
}

export function img(key: ImageKey) {
  return { src: imgUrl(key), alt: IMAGES[key].alt };
}
