const title = [
  {
    type: "input",
    name: "title",
    message: "Provide the Title of the Document.",
  }
];

const useCase = [
  {
    type: "input",
    name: "useCase",
    message: "Provide the Use Case.",
  }
];

const hasCaseField = [
  {
    type: "confirm",
    name: "hasCaseField",
    message: "Do you want to any additional Feilds, Inputs, or Interactions to this case?"
  }
];

const caseField = [
  {
    type:"input",
    name: "caseField",
    message: "What are the Feilds, Inputs, or Interactions in this Case?",
  }
];

const visual = [
  {
    type: "input",
    name: "usage",
    message: "Provide Name of Screenshot or Visual Describing the Case.",
  },
  {
    type: "list",
    name: "usageImageType",
    message: "Choose an image type.",
    choices: ["png", "jpg"],
  },
  {
    type: "input",
    name: "usageAltText",
    message: "Screenshot\'s or Visual\'s Alt text.",
  }
];

const hasExperience = [
  {
    type: "confirm",
    name: "hasExperience",
    message: "Do you want to add an User Flow and/or Experience?"
  }
];

const experience = [
  {
    type: "input",
    name: "experience",
    message: "Provide what is the User Flow or Experience.",
  }
];

const hasPage = [
  {
    type: "confirm",
    name: "hasPage",
    message: "Do you want to add Page Locations? (exmpale: mid-term/dossier/...)"
  }
];

const page = [
  {
    type: "input",
    name: "page",
    message: "What are the Pages used? (exmpale mid-term/dossier/...)",
  }
];

const hasComponent = [
  {
    type: "confirm",
    name: "hasComponent",
    message: "Do you want to add components?"
  }
];

const component = [
  {
    type: "input",
    name: "component",
    message: "What are the components?",
  }
];

const acceptanceCriteria = [
  {
    type: "input",
    name: "acceptanceCriteria",
    message: "What is the Acceptance Criteria?",
  }
];

const additionalDetail = [
  {
    type: "input",
    name: "additionalDetail",
    message: "Add any additional Details?",
  },
  {
    type: "input",
    name: "codeSnippets",
    message: "Provide a Code Snippet if applicable. (single line format)",
  },
];


export {
  title,
  useCase,
  caseField,
  hasCaseField,
  visual,
  experience,
  hasExperience,
  page,
  hasPage,
  component,
  hasComponent,
  acceptanceCriteria,
  additionalDetail
};