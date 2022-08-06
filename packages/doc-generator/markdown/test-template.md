# MUC: -1- Midterm Dossier - Dossier History

## Use Case:
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

The information should include multiple fields:
- lectus
- magna
- fringilla
- urna
- porttitor

## Visual:
![Visual](./testing-visuals/temp/2png)

## User Experience:
1. User access landing page and selects [Mid Term](https://dev.fleet-performance.airbus-v.com/mid-term/briefing)(either in nav or card)
2. Within Midterm user selects [Dossier tab](https://dev.fleet-performance.airbus-v.com/mid-term/dossier/) (default is [Briefing view](https://dev.fleet-performance.airbus-v.com/mid-term/briefing/))
3. User selects [Dossier card](https://dev.fleet-performance.airbus-v.com/mid-term/dossier/group/Gca86f67e-7903-418d-a5b2-75371c121719/single/D617c18ca1e9e5a00097634cb/troubleshooting/), directs them to card or group card
4. User selects the hot pink "Dossier History" button to open Dossier History
5. A "Dossier History" Modal will be displayed
6. If any events exist they should be displayed under vertical Dossier card. (Results can vary)

## Pages:
- mid-term/dossiers/dossierCardsAll/dossierCardsAll/dossierCardsAll.tsx
- mid-term/dossiers/dossierDetail/dossierDetail.tsx

## Components:
- DossierCard
- DossierHistoryTimeline
- TimelineModal

## Acceptance Criteria:
- `Given there is at least dossier card to display when the user arrives at the Dossier tab of mid term they should see all dossier cards rendered. each dossier card shall display information and direct user to the dossier card information. After being directed the user should be able to view the Dossier History by clicking the button. The Dossier History will display all events tied to the specific dossier`

## Additional Details/Code Snippets:
  - Query for Dossier History Timeline
  ````
  export const getDossierHistoryTimeline = gql`
    query ($id: ID!) {
      node(id: $id) {
        ... on Dossier {
          id
          timeline(groupFeedbacks: false) {
            nodes {
              id
              dossierId
              feedback { ... }
              type
              tailNb
              eventDate
              status
              priority
              # reportedEffects
              # diagnosis
              # dispatchConditions
              repeat
              # trouble
              # observation
              # monitor
            }
          }
        }
      }
    }
  `;
  ````