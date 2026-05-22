// @ts-check

import {createRequire} from 'module';

const require = createRequire(import.meta.url);
const {hub, curricula} = require('literacy-site-theme/ecosystem');
const currentSiteHref = 'https://literacy-for-kids.github.io/financial_literacy_for_kids/';

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  curriculumSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Value Foundations',
      description: 'Weeks 1–4: The Mechanics of Trade and "The Why"',
      collapsed: false,
      items: [
        'week01-understanding-value',
        'week02-trade-and-barter',
        'week03-why-money-exists',
        'week04-the-household-economy',
        'checkpoint-1',
      ],
    },
    {
      type: 'category',
      label: 'The Flow of Resources',
      description: 'Weeks 5–8: Circulation and Digital Friction',
      items: [
        'week05-how-money-moves',
        'week06-ways-we-pay',
        'week07-digital-money',
        'week08-friction-and-spending',
        'checkpoint-2',
      ],
    },
    {
      type: 'category',
      label: 'Strategy & Planning',
      description: 'Weeks 9–11: Resource Allocation and Risk',
      items: [
        'week09-opportunity-cost',
        'week10-budgeting',
        'week11-risk-and-emergency-funds',
        'checkpoint-3',
      ],
    },
    {
      type: 'category',
      label: 'Economic Systems',
      description: 'Weeks 12–14: Banking, Interest, and Macro Mechanics',
      items: [
        'week12-banks',
        'week13-interest',
        'week14-inflation',
        'week-supplemental-taxes',
        'checkpoint-4',
      ],
    },
    {
      type: 'category',
      label: 'The Value Creation Project',
      description: 'Weeks 15–18: Entrepreneurship and Application',
      items: [
        'week15-finding-problems-and-opportunities',
        'week16-designing-a-solution',
        'week17-resources-and-costs',
        'week18-sharing-value',
        'checkpoint-5',
        'capstone-rubric',
      ],
    },
    'curriculum-overview',
    'glossary',
    {
      type: 'category',
      label: 'Resources & Printables',
      description: 'Companion materials, handouts, and facilitator tools',
      items: [
        'resources/overview',
        {
          type: 'category',
          label: 'Activity Cards & Worksheets',
          items: [
            'resources/value-trade-cards',
            'resources/household-scenario-cards',
            'resources/payment-comparison-cards',
            'resources/digital-safety-scenarios',
            'resources/spending-decision-cards',
            'resources/opportunity-cost-cards',
            'resources/budget-planning-sheets',
            'resources/emergency-event-cards',
            'resources/bank-ledger-templates',
            'resources/capstone-planning-guide',
            'resources/capstone-presentation-guide',
          ],
        },
        {
          type: 'category',
          label: 'Student Handouts',
          items: [
            'handouts/week07-digital-money',
            'handouts/week08-friction-spending',
            'handouts/week10-budgeting',
            'handouts/week13-interest',
            'handouts/week14-inflation',
          ],
        },
        'resources/facilitator-quick-reference',
      ],
    },
    {
      type: 'category',
      label: 'Explore Other Literacies',
      items: [
        {type: 'link', label: hub.label, href: hub.href},
        ...curricula
          .filter((curriculum) => curriculum.href !== currentSiteHref)
          .map((curriculum) => ({
            type: 'link',
            label: curriculum.label,
            href: curriculum.href,
          })),
      ],
    },
    'license',
  ],
};

export default sidebars;
