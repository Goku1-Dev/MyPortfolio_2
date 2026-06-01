export const projectsData = [
  {
    id: 1,
    title: "Portfolio Dashboard",
    description: "A personal portfolio dashboard built with React and SCSS, featuring dark mode, animated transitions, and a modular component architecture.",
    tags: ["React", "SCSS", "Vite", "Component Design", "Dark Mode"],
    github: "https://github.com",
    live: "https://example.com",
    accent: "#6FA3D0",
    sections: [
      {
        id: "overview",
        heading: "Overview",
        content:
          "This portfolio dashboard was built to showcase projects, designs, and practice work in a clean, minimal interface. The goal was to create something that felt personal and well-crafted — not just another template clone. Every detail, from spacing to typography, was considered deliberately.",
      },
      {
        id: "motivation",
        heading: "Why I Built It",
        content:
          "I wanted a portfolio that felt like a product, not a resume. Most portfolios are static pages with a list of links. I wanted mine to have real navigation, smooth transitions, and a component system I could extend over time. Building it from scratch also gave me the chance to practice SCSS architecture and React state patterns.",
      },
      {
        id: "tech",
        heading: "Technical Decisions",
        content:
          "The stack is intentionally minimal: React for the UI, SCSS (with BEM naming) for styles, and Vite for the build tool. No routing library — navigation is managed with a simple state machine in the root component. This keeps the bundle small and the code easy to follow.",
        subsections: [
          {
            id: "tech-scss",
            subheading: "SCSS Architecture",
            content:
              "Styles are organised using the BEM methodology with a global token file for colors, spacing, and typography. Each component owns its own .scss file, scoped by a root class to avoid leakage.",
          },
          {
            id: "tech-darkmode",
            subheading: "Dark Mode",
            content:
              "Theme switching is handled by toggling a CSS class on the root layout element. All color values are defined as CSS custom properties, so the theme flips instantly without any JavaScript recalculation.",
          },
          {
            id: "tech-anim",
            subheading: "Animations",
            content:
              "Page transitions use a simple CSS keyframe animation triggered by a React key change on the panel. This gives a clean fade-and-slide effect without needing a transition library.",
          },
        ],
      },
      {
        id: "lessons",
        heading: "Lessons Learned",
        content:
          "Keeping state management simple was the right call. Early on I considered adding React Router or Zustand, but the added complexity wasn't worth it for a project of this scale. The discipline of resisting over-engineering was as valuable as any technical skill practised here.",
      },
    ],
  },
  {
    id: 2,
    title: "Design System Kit",
    description: "A scalable design system with reusable components, tokenised spacing, typography, and color — documented in Storybook.",
    tags: ["Figma", "Storybook", "Design Tokens", "React", "Documentation"],
    github: "https://github.com",
    live: "https://example.com",
    accent: "#8B7ED8",
    sections: [
      {
        id: "overview",
        heading: "Overview",
        content:
          "The Design System Kit is a shared component library built to unify visual language across multiple products. It covers foundations — color, spacing, type, and motion — as well as a growing set of UI components, all documented interactively in Storybook.",
      },
      {
        id: "problem",
        heading: "The Problem",
        content:
          "Without a shared system, teams make locally-reasonable but globally-inconsistent decisions. Buttons end up with five slightly different border radii. Spacing is eyeballed. Colors drift. The design system exists to fix this by making the right choice the easy choice.",
      },
      {
        id: "foundations",
        heading: "Foundations",
        content:
          "The system starts with a token layer — a single source of truth for every design decision expressed as a named value. Tokens are defined in JSON and transformed by Style Dictionary into platform-specific outputs: CSS custom properties for the web, Swift constants for iOS.",
        subsections: [
          {
            id: "foundations-color",
            subheading: "Color",
            content:
              "The color palette uses a semantic layering approach: primitive colors (the raw hues) are aliased to semantic tokens (background, surface, text, border, interactive) that carry intent rather than appearance.",
          },
          {
            id: "foundations-type",
            subheading: "Typography",
            content:
              "Type is set on a modular scale with two typefaces: a display face for headings and a legible sans-serif for body copy. Scale steps, line heights, and letter-spacing values are all tokenised.",
          },
          {
            id: "foundations-spacing",
            subheading: "Spacing",
            content:
              "Spacing follows a base-4 scale (4, 8, 12, 16, 24, 32, 48, 64 …). Components consume spacing tokens rather than hard-coded pixel values, so adjusting the scale propagates everywhere consistently.",
          },
        ],
      },
      {
        id: "storybook",
        heading: "Storybook Documentation",
        content:
          "Every component is documented with stories that cover default states, all prop variations, edge cases (empty states, long strings, overflow), and accessibility notes. MDX pages explain usage guidelines, when to use each component, and common pitfalls.",
      },
      {
        id: "lessons",
        heading: "Lessons Learned",
        content:
          "The hardest part wasn't building components — it was writing good documentation. A component no one knows how to use correctly might as well not exist. Investing time in clear naming, helpful stories, and honest usage guidelines paid back many times over.",
      },
    ],
  },
  {
    id: 3,
    title: "UX Case Study — Fintech App",
    description: "End-to-end UX process for a fintech mobile app: user research, wireframes, prototypes, and usability testing with real users.",
    tags: ["UX Research", "Figma", "Prototyping", "Usability Testing", "Mobile"],
    github: null,
    live: "https://example.com",
    accent: "#56B4A0",
    sections: [
      {
        id: "overview",
        heading: "Overview",
        content:
          "This case study documents the end-to-end UX process for a mobile fintech application aimed at helping young adults track spending and build saving habits. The project ran over eight weeks and included discovery research, ideation, prototyping, and two rounds of usability testing.",
      },
      {
        id: "research",
        heading: "Research",
        content:
          "The process began with five in-depth interviews with the target demographic: 22–32-year-olds who described themselves as bad at saving. The goal was to understand mental models around money, pain points with existing apps, and what success looked like to them.",
        subsections: [
          {
            id: "research-findings",
            subheading: "Key Findings",
            content:
              "Three themes emerged consistently: participants found existing apps overwhelming (too many features, too much data), they wanted to feel in control rather than surveilled, and they responded strongly to progress framing — small wins mattered more than aggregate totals.",
          },
          {
            id: "research-persona",
            subheading: "Primary Persona",
            content:
              "From the research we synthesised a primary persona: a 26-year-old who earns a decent salary but has no savings, not from lack of income but from lack of visibility and habit. They want help without judgment.",
          },
        ],
      },
      {
        id: "design",
        heading: "Design Process",
        content:
          "Sketches moved quickly to low-fidelity wireframes in Figma. The core design decision was to lead with a single number — your weekly budget remaining — rather than a dashboard of charts. Everything else is one tap away, not zero taps.",
        subsections: [
          {
            id: "design-ia",
            subheading: "Information Architecture",
            content:
              "The app collapses to three tabs: Today (the single number view), History (a simple log), and Goals (saving targets). Removing the settings and account tabs from the primary navigation reduced cognitive load significantly in testing.",
          },
          {
            id: "design-proto",
            subheading: "Prototype",
            content:
              "A high-fidelity interactive prototype was built in Figma covering the core flow: onboarding, setting a weekly budget, logging a transaction, and viewing a saving goal. The prototype used realistic data to avoid the uncanny valley of placeholder text.",
          },
        ],
      },
      {
        id: "testing",
        heading: "Usability Testing",
        content:
          "Two rounds of moderated usability testing were conducted remotely, each with five participants completing a set of core tasks. Round one revealed that the budget-remaining metaphor wasn't immediately understood — participants weren't sure if the number reset daily or weekly. Round two, after adding a clear label and reset indicator, showed 100% task completion with no confusion.",
      },
      {
        id: "outcomes",
        heading: "Outcomes",
        content:
          "The final designs were handed off to the development team with a comprehensive Figma file including components, states, annotations, and a motion spec. The project demonstrated that reducing scope — doing less, better — consistently outperformed feature-rich alternatives in user testing.",
      },
    ],
  },
];
