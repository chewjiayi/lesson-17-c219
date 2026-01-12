// api.js
// Data source for Diploma & Module information

const diplomas = [
  {
    id: "Digital Design and Development",
    name: "Digital Design and Development",
    description:
      "Combine creativity and technology, focusing on coding, digital media, web design, and interactive applications.",
    modules: [
      {
        id: "c337",
        code: "C337",
        name: "Immersive Technology",
        lecturer: "Kong Chee Chong",
        details:
          "This module introduces students to immersive technologies such as Augmented Reality (AR) and Virtual Reality (VR). Students will learn to design and develop applications that leverage these technologies."
      },
      {
        id: "C257",
        code: "C257",
        name: "Fundamentals of Digital Design",
        lecturer: "Julia Lee",
        details:
          "This module covers the principles of digital design, including visual design, user experience, and web development. Students will gain hands-on experience in creating digital content and applications."
      },
      {
        id: "c237",
        code: "C237",
        name: "Software Application Development",
        lecturer: "Leonard Gan",
        details:
          "This module introduces students to software development principles and practices. Students will learn to design, develop, and test software applications using various programming languages and tools."
      }
    ]
  },
  {
    id: "it",
    name: "Information Technology",
    description:
      "Focuses on software development, UI/UX design, and mobile application development.",
    modules: [
      {
  id: "c218",
  code: "C218",
  name: "UI/UX Design for Apps",
  lecturer: "Azhar Kamar",
  details:
    "Students will be equipped with knowledge in User Experience (UX) design in areas such as requirement gathering, creating and analysis of the User Interfaces (UI) in this module."
},
      {
        id: "c346",
        code: "C346",
        name: "Mobile App Development",
        lecturer: "School of Infocomm",
        details:
          "This module focuses on developing mobile applications using modern frameworks. Students will learn mobile UI design, application logic, and deployment techniques."
      }
    ]
  },
  {
    id: "fintech",
    name: "Financial Technology",
    description:
      "Combines finance and technology, focusing on digital payments, data, and financial systems.",
    modules: [
      {
        id: "c237",
        code: "C237",
        name: "Software Application Development",
        lecturer: "School of Infocomm",
        details:
          "This module introduces students to software development principles and practices. Students will learn to design, develop, and test software applications using various programming languages and tools."
      },
      {
        id: "c375",
        code: "C375",
        name: "Financial Data Analytics",
        lecturer: "School of Infocomm",
        details:
          "Students will learn how to analyse financial data using analytical tools and techniques to support business decision-making."
      }
    ]
  }
];

/* =========================
   API FUNCTIONS
   ========================= */

// Get all diplomas
export function getDiplomas() {
  return diplomas;
}

// Get a single diploma by ID
export function getDiploma(diplomaId) {
  return diplomas.find(diploma => diploma.id === diplomaId);
}

// Get a specific module using diplomaId + moduleId
export function getModule(diplomaId, moduleId) {
  const diploma = getDiploma(diplomaId);
  return diploma?.modules.find(module => module.id === moduleId);
}
