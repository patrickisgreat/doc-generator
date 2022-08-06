import * as fs from 'fs';
import inquirer from 'inquirer';
import { generateMarkdown } from "./generateMarkdown.js"
import { title, useCase, caseField, hasCaseField, visual, experience, hasExperience, page, hasPage, component, hasComponent, acceptanceCriteria, additionalDetail} from "./questions.js";

const responses = {
  title: [],
  useCase: [],
  caseFields: [],
  visual: [],
  experiences: [],
  pages: [],
  components: [],
  acceptanceCriteria: [],
  additionalDetails: [],
  filename: [],
}

// Provide the Title of the Document."
const titles = () => {
  inquirer.prompt(title).then((data) => {
    responses.title.push(data);
    useCases(data);
  });
};

// Provide the Use Case.
const useCases = () => {
  inquirer.prompt(useCase).then((data) => {
    responses.useCase.push(data);
    hasCaseFields(data);
  });
};

// Do you want to any additional Feilds, Inputs, or Interactions to this case?
const hasCaseFields = () => {
  inquirer.prompt(hasCaseField).then((data) => {
    caseFields(data);
  });
};

// What are the Feilds, Inputs, or Interactions in this Case?
const caseFields = (data) => {
  if (data.hasCaseField === true) {
    inquirer.prompt(caseField).then((data) => {
      responses.caseFields.push(data);
      hasCaseFields(data);
    });
  }
  else {
    visuals(data);
  }
};

// Provide Name of Screenshot or Visual Describing the Case. && Choose an image type. && Screenshot\'s or Visual\'s Alt text."
const visuals = () => {
  inquirer.prompt(visual).then((data) => {
    responses.visual.push(data);
    hasExperiences(data);
  });
};

// Do you want to add an User Flow and/or Experience?
const hasExperiences = () => {
  inquirer.prompt(hasExperience).then((data) => {
    experiences(data);
  });
};

// Provide what is the User Flow or Experience.
const experiences = (data) => {
  if (data.hasExperience === true) {
    inquirer.prompt(experience).then((data) => {
      responses.experiences.push(data);
      hasExperiences(data);
    });
  }
  else {
    hasPages(data);
  }
};

// Do you want to add Page Locations? (exmpale: mid-term/dossier/...)
const hasPages = () => {
  inquirer.prompt(hasPage).then((data) => {
    pages(data);
  });
};

// What are the Pages used? (exmpale mid-term/dossier/...)
const pages = (data) => {
  if (data.hasPage === true) {
    inquirer.prompt(page).then((data) => {
      responses.pages.push(data);
      hasPages(data);
    });
  }
  else {
    hasComponents(data);
  }
};

// Do you want to add components?
const hasComponents = () => {
  inquirer.prompt(hasComponent).then((data) => {
    components(data);
  });
};

// What are the components?
const components = (data) => {
  if (data.hasComponent === true) {
    inquirer.prompt(component).then((data) => {
      responses.components.push(data);
      hasComponents(data);
    });
  }
  else {
    acceptanceCriterias(data);
  }
};

// What is the Acceptance Criteria?
const acceptanceCriterias = () => {
  inquirer.prompt(acceptanceCriteria).then((data) => {
    responses.acceptanceCriteria.push(data);
    additionalDetails(data);
  });
};

// Add any additional Details? && Provide a Code Snippet if applicable. (single line format)
const additionalDetails = () => {
  inquirer.prompt(additionalDetail).then((data) => {
    responses.additionalDetails.push(data);
    finish(responses);
  });
};

const finish = (data) => {
  console.log(data);
  const filename = `${data.title[0].title.split(" ").join("")}.md`;

  fs.writeFile(__dirname + `/markdown/${filename}`, generateMarkdown(data), (err) =>
    err ? console.log(err) : console.log("Success!")
  );
};

function init() {
  titles();
}

init();