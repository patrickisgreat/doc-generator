import { caseField } from "./questions.js";

// Creates a function to generate markdown for README
export function generateMarkdown(data) {

  function mapMarkdownFields(array, symbol) {
      return array.map(x => {
        const key = Object.keys(x)[0];
        return `  ${symbol} ${x[key]}\n`;
      })
  }

  return `
# ${data.title[0]?.title}

## Use Case:
  ${data.useCase[0]?.useCase}

${ mapMarkdownFields(data.caseFields, '-').join("") }

## Visual:
  ![${data.visual[0].usageAltText}](./${data.visual[0].usage}.${data.visual[0].usageImageType})

## User Flow/Experience:
${mapMarkdownFields(data.experiences, '1.').join("") }

## Pages:
${mapMarkdownFields(data.pages, '-').join("") }

## Components:
${mapMarkdownFields(data.components, '-').join("") }

## Acceptance Criteria:
  - \`${data.acceptanceCriteria[0]?.acceptanceCriteria}\`

## Additional Details/Code Snippets:
  - ${data.additionalDetails[0]?.additionalDetail}
  \`\`\`\`
  ${data.additionalDetails[0]?.codeSnippets}
  \`\`\`\`
`;
}

// module.exports is an object we use to store variables or methods to be called on in other js also future proofs in case you need to export more functio