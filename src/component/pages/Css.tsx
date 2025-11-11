import { useState } from "react";

interface Section {
  heading: string;
  text?: string;
  code?: string;
  points?: string[];
}

interface ContentSection {
  title: string;
  description: string;
  sections: Section[];
}

const Css = () => {
  const [activeTab, setActiveTab] = useState("basics");

  const topics = [
    { id: "basics", label: "CSS Basics", icon: "✅" },
    { id: "selectors", label: "Selectors", icon: "🎯" },
    { id: "colors", label: "Colors & Backgrounds", icon: "💅" },
    { id: "box-model", label: "Box Model", icon: "🧱" },
    { id: "typography", label: "Typography", icon: "📝" },
    { id: "units", label: "Units", icon: "🔐" },
    { id: "display", label: "Display & Visibility", icon: "🧩" },
    { id: "positioning", label: "Positioning", icon: "🗂️" },
    { id: "flexbox", label: "Flexbox", icon: "🪟" },
    { id: "grid", label: "CSS Grid", icon: "🪟" },
    { id: "responsive", label: "Responsive Design", icon: "📱" },
    { id: "styling", label: "Styling Techniques", icon: "🎨" },
    { id: "pseudo", label: "Pseudo Classes", icon: "🎭" },
    { id: "variables", label: "CSS Variables", icon: "🧮" },
    { id: "functions", label: "CSS Functions", icon: "🧮" },
    { id: "sass", label: "SCSS / SASS", icon: "🧑‍💻" },
  ];

  const content: Record<string, ContentSection> = {
    basics: {
      title: "CSS Basics",
      description: "Learn the foundational concepts of CSS and how to apply styles to your web pages.",
      sections: [
        {
          heading: "What is CSS & Why It's Used",
          text: "CSS (Cascading Style Sheets) is a style sheet language used to describe the presentation of HTML documents. It controls colors, fonts, layouts, spacing, and the overall visual appearance of web pages, separating content from design.",
        },
        {
          heading: "Ways to Apply CSS",
          text: "There are three main ways to add CSS to your HTML:",
          points: [
            "Inline CSS: Using the style attribute directly in HTML elements",
            "Internal CSS: Using <style> tag in the HTML <head> section",
            "External CSS: Linking separate .css files using <link> tag (recommended for maintainability)",
          ],
          code: `<!-- Inline CSS -->
<p style="color: red; font-size: 16px;">This is red text</p>

<!-- Internal CSS -->
<head>
  <style>
    p {
      color: blue;
      font-size: 16px;
    }
  </style>
</head>

<!-- External CSS (Recommended) -->
<head>
  <link rel="stylesheet" href="styles.css">
</head>`,
        },
        {
          heading: "CSS Syntax",
          text: "CSS consists of selectors and declaration blocks. The selector points to the HTML element, and declarations define the styling properties.",
          code: `/* Basic CSS Syntax */
selector {
  property: value;
}

/* Example */
h1 {
  color: blue;
  font-size: 32px;
  text-align: center;
}

p {
  color: #333;
  line-height: 1.6;
  margin-bottom: 16px;
}`,
        },
        {
          heading: "Comments in CSS",
          text: "Comments help document your code and are ignored by browsers.",
          code: `/* This is a single-line comment */

/*
  This is a
  multi-line comment
  explaining complex styles
*/

h1 {
  color: blue; /* Inline comment */
}`,
        },
      ],
    },
    selectors: {
      title: "CSS Selectors",
      description: "Master the different types of selectors to target HTML elements precisely.",
      sections: [
        {
          heading: "Type Selector (Element Selector)",
          text: "Targets all elements of a specific type.",
          code: `/* Selects all <p> elements */
p {
  color: blue;
}

/* Selects all <h1> elements */
h1 {
  font-size: 32px;
}`,
        },
        {
          heading: "Class & ID Selectors",
          code: `/* Class selector - can be used multiple times */
.highlight {
  background-color: yellow;
}

.btn {
  padding: 10px 20px;
  border-radius: 4px;
}

/* ID selector - should be unique */
#header {
  background-color: navy;
}

#main-content {
  max-width: 1200px;
  margin: 0 auto;
}`,
        },
        {
          heading: "Universal Selector (*)",
          text: "Selects all elements on the page. Often used for CSS resets.",
          code: `/* Reset all margins and paddings */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}`,
        },
        {
          heading: "Grouping Selectors",
          text: "Apply the same styles to multiple selectors.",
          code: `/* Group multiple selectors */
h1, h2, h3, h4, h5, h6 {
  font-family: 'Arial', sans-serif;
  font-weight: bold;
}

.btn-primary, .btn-secondary, .btn-danger {
  padding: 10px 20px;
  border: none;
  cursor: pointer;
}`,
        },
        {
          heading: "Attribute Selectors",
          text: "Target elements based on their attributes.",
          code: `/* Elements with specific attribute */
a[target] {
  background-color: yellow;
}

/* Specific attribute value */
a[href="https://example.com"] {
  color: red;
}

/* Attribute value contains */
a[href*="google"] {
  color: blue;
}

/* Attribute value starts with */
a[href^="https"] {
  color: green;
}

/* Attribute value ends with */
a[href$=".pdf"] {
  color: orange;
}`,
        },
        {
          heading: "Combinators",
          text: "Describe relationships between selectors.",
          code: `/* Descendant selector (div p) - all <p> inside <div> */
div p {
  color: blue;
}

/* Child selector (div > p) - direct children only */
div > p {
  color: red;
}

/* Adjacent sibling (div + p) - immediately after */
div + p {
  margin-top: 20px;
}

/* General sibling (div ~ p) - all siblings after */
div ~ p {
  color: gray;
}`,
        },
      ],
    },
    colors: {
      title: "Colors & Backgrounds",
      description: "Explore different color formats and background properties to enhance your designs.",
      sections: [
        {
          heading: "Color Formats",
          text: "CSS supports multiple color formats for maximum flexibility.",
          code: `/* Hexadecimal */
.hex {
  color: #3b82f6;
  background-color: #fff;
}

/* RGB (Red, Green, Blue) */
.rgb {
  color: rgb(59, 130, 246);
  background-color: rgb(255, 255, 255);
}

/* RGBA (with Alpha/transparency) */
.rgba {
  color: rgba(59, 130, 246, 0.8);
  background-color: rgba(0, 0, 0, 0.5);
}

/* HSL (Hue, Saturation, Lightness) */
.hsl {
  color: hsl(217, 91%, 60%);
  background-color: hsl(0, 0%, 100%);
}

/* Named colors */
.named {
  color: blue;
  background-color: white;
}`,
        },
        {
          heading: "Background Properties",
          code: `/* Background color */
.bg-color {
  background-color: #f0f0f0;
}

/* Background image */
.bg-image {
  background-image: url('image.jpg');
  background-size: cover; /* cover, contain, 100px, 50% */
  background-repeat: no-repeat; /* repeat, repeat-x, repeat-y */
  background-position: center; /* top, bottom, left, right, center */
  background-attachment: fixed; /* scroll, fixed, local */
}

/* Shorthand */
.bg-shorthand {
  background: #f0f0f0 url('image.jpg') no-repeat center/cover;
}

/* Multiple backgrounds */
.multi-bg {
  background-image: url('overlay.png'), url('background.jpg');
  background-position: center, top left;
  background-repeat: no-repeat, repeat;
}`,
        },
        {
          heading: "Gradients",
          text: "Create smooth color transitions with linear and radial gradients.",
          code: `/* Linear gradient */
.linear-gradient {
  background: linear-gradient(to right, #3b82f6, #8b5cf6);
  background: linear-gradient(45deg, red, blue);
  background: linear-gradient(to bottom, #fff 0%, #000 100%);
}

/* Multiple color stops */
.multi-gradient {
  background: linear-gradient(
    to right,
    red 0%,
    yellow 33%,
    green 66%,
    blue 100%
  );
}

/* Radial gradient */
.radial-gradient {
  background: radial-gradient(circle, #3b82f6, #8b5cf6);
  background: radial-gradient(ellipse at top, white, blue);
}

/* Repeating gradients */
.repeating {
  background: repeating-linear-gradient(
    45deg,
    #3b82f6,
    #3b82f6 10px,
    #8b5cf6 10px,
    #8b5cf6 20px
  );
}`,
        },
      ],
    },
    "box-model": {
      title: "The Box Model",
      description: "Understand how CSS treats every element as a box with content, padding, border, and margin.",
      sections: [
        {
          heading: "Understanding the Box Model",
          text: "Every HTML element is treated as a rectangular box consisting of content, padding, border, and margin areas.",
          code: `/* Box Model Breakdown */
.box {
  /* Content area */
  width: 300px;
  height: 200px;

  /* Padding (space inside the border) */
  padding: 20px;
  padding-top: 10px;
  padding-right: 15px;
  padding-bottom: 10px;
  padding-left: 15px;

  /* Border */
  border: 2px solid #333;

  /* Margin (space outside the border) */
  margin: 10px;
  margin-top: 5px;
  margin-right: auto;
  margin-bottom: 5px;
  margin-left: auto;
}

/* Shorthand */
.shorthand {
  padding: 10px 20px; /* top/bottom left/right */
  margin: 10px 15px 20px 25px; /* top right bottom left */
}`,
        },
        {
          heading: "box-sizing Property",
          text: "Controls how the total width and height of an element is calculated.",
          code: `/* content-box (default) - width/height applies to content only */
.content-box {
  box-sizing: content-box;
  width: 300px;
  padding: 20px;
  border: 5px solid black;
  /* Total width: 300 + 40 (padding) + 10 (border) = 350px */
}

/* border-box - width/height includes padding and border */
.border-box {
  box-sizing: border-box;
  width: 300px;
  padding: 20px;
  border: 5px solid black;
  /* Total width: 300px (includes padding and border) */
}

/* Apply to all elements (recommended) */
* {
  box-sizing: border-box;
}`,
        },
        {
          heading: "Border Styles, Radius, Outline",
          code: `/* Border styles */
.border-styles {
  border-style: solid; /* solid, dashed, dotted, double, groove, ridge */
  border-width: 2px;
  border-color: blue;

  /* Individual sides */
  border-top: 3px solid red;
  border-right: 2px dashed green;
  border-bottom: 1px dotted blue;
  border-left: 4px double orange;
}

/* Border radius (rounded corners) */
.rounded {
  border-radius: 8px;
  border-radius: 50%; /* circle */
  border-radius: 10px 20px 30px 40px; /* top-left, top-right, bottom-right, bottom-left */
  border-top-left-radius: 15px;
}

/* Outline (doesn't affect layout) */
.outline {
  outline: 2px solid red;
  outline-offset: 5px;
}`,
        },
      ],
    },
    typography: {
      title: "Typography & Text Styling",
      description: "Style text content with fonts, sizes, spacing, and text properties.",
      sections: [
        {
          heading: "Font Properties",
          code: `/* Font family */
.text {
  font-family: 'Arial', 'Helvetica', sans-serif;
  font-family: 'Georgia', serif;
  font-family: 'Courier New', monospace;
}

/* Font size */
.sizes {
  font-size: 16px;
  font-size: 1.5rem;
  font-size: 120%;
}

/* Font weight */
.weight {
  font-weight: normal; /* 400 */
  font-weight: bold; /* 700 */
  font-weight: 300; /* light */
  font-weight: 600; /* semi-bold */
  font-weight: 900; /* extra-bold */
}

/* Font style */
.style {
  font-style: normal;
  font-style: italic;
  font-style: oblique;
}`,
        },
        {
          heading: "Text Spacing & Height",
          code: `/* Line height */
.spacing {
  line-height: 1.6; /* 1.6 times the font size */
  line-height: 24px;
  line-height: 150%;
}

/* Letter spacing */
.letter {
  letter-spacing: 2px;
  letter-spacing: 0.1em;
  letter-spacing: -1px; /* tighter spacing */
}

/* Word spacing */
.word {
  word-spacing: 5px;
  word-spacing: 0.2em;
}`,
        },
        {
          heading: "Text Decoration & Alignment",
          code: `/* Text decoration */
.decoration {
  text-decoration: underline;
  text-decoration: overline;
  text-decoration: line-through;
  text-decoration: none; /* remove default link underline */
  text-decoration: underline dotted red;
}

/* Text alignment */
.alignment {
  text-align: left;
  text-align: center;
  text-align: right;
  text-align: justify;
}

/* Text capitalization */
.transform {
  text-transform: uppercase;
  text-transform: lowercase;
  text-transform: capitalize; /* First Letter Of Each Word */
}`,
        },
        {
          heading: "Web-Safe Fonts & Google Fonts",
          code: `/* Web-safe font stack */
.web-safe {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI',
               Roboto, 'Helvetica Neue', Arial, sans-serif;
}

/* Import Google Fonts in HTML */
<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap" rel="stylesheet">

/* Or in CSS */
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap');

/* Use Google Font */
.google-font {
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
}`,
        },
      ],
    },
    units: {
      title: "CSS Units",
      description: "Learn about absolute and relative units for sizing elements and text.",
      sections: [
        {
          heading: "Absolute Units",
          text: "Fixed units that don't change based on other elements.",
          code: `/* Pixels (most common absolute unit) */
.absolute {
  width: 300px;
  height: 200px;
  font-size: 16px;
  margin: 10px;
}

/* Other absolute units (rarely used) */
.other {
  width: 2in; /* inches */
  height: 5cm; /* centimeters */
  font-size: 12pt; /* points (1/72 of an inch) */
}`,
        },
        {
          heading: "Relative Units",
          text: "Units that scale relative to other values, making designs more flexible and responsive.",
          code: `/* em - relative to parent element font-size */
.parent {
  font-size: 16px;
}
.em-child {
  font-size: 2em; /* 32px (2 × 16px) */
  padding: 1em; /* 32px (relative to own font-size) */
}

/* rem - relative to root element font-size */
html {
  font-size: 16px;
}
.rem-element {
  font-size: 1.5rem; /* 24px (1.5 × 16px) */
  margin: 2rem; /* 32px */
}

/* Percentage - relative to parent */
.parent-container {
  width: 1000px;
}
.percent-child {
  width: 50%; /* 500px */
}

/* Viewport units */
.viewport {
  width: 100vw; /* 100% of viewport width */
  height: 100vh; /* 100% of viewport height */
  font-size: 5vw; /* 5% of viewport width */
  padding: 2vh; /* 2% of viewport height */
}

/* vmin and vmax */
.responsive {
  font-size: 3vmin; /* 3% of smaller viewport dimension */
  width: 50vmax; /* 50% of larger viewport dimension */
}`,
        },
      ],
    },
    display: {
      title: "Display & Visibility",
      description: "Control how elements are displayed and their visibility on the page.",
      sections: [
        {
          heading: "Display Property",
          text: "Controls how an element is displayed in the document flow.",
          code: `/* Block - takes full width, starts on new line */
.block {
  display: block;
  /* Examples: div, p, h1-h6, section, header */
}

/* Inline - only takes necessary width, no line break */
.inline {
  display: inline;
  /* Examples: span, a, strong, em */
  /* Cannot set width/height on inline elements */
}

/* Inline-block - inline but can set width/height */
.inline-block {
  display: inline-block;
  width: 200px;
  height: 100px;
  /* Best of both worlds */
}

/* None - removes element from document flow */
.none {
  display: none;
  /* Element is completely hidden and takes no space */
}`,
        },
        {
          heading: "Visibility & Opacity",
          code: `/* Visibility - hides element but keeps space */
.hidden {
  visibility: hidden;
  /* Element invisible but still takes up space */
}

.visible {
  visibility: visible;
}

/* Opacity - transparency level */
.transparent {
  opacity: 0; /* completely transparent */
  opacity: 0.5; /* 50% transparent */
  opacity: 1; /* fully opaque */
}

/* Difference between display: none and visibility: hidden */
.removed {
  display: none; /* Removes from layout, no space taken */
}

.invisible {
  visibility: hidden; /* Hidden but space is preserved */
}`,
        },
        {
          heading: "Overflow",
          text: "Controls what happens when content overflows its container.",
          code: `/* Overflow options */
.overflow {
  width: 300px;
  height: 200px;

  overflow: visible; /* default - content shows outside */
  overflow: hidden; /* clips content */
  overflow: scroll; /* always shows scrollbars */
  overflow: auto; /* shows scrollbars only when needed */
}

/* Control x and y separately */
.overflow-xy {
  overflow-x: hidden; /* horizontal */
  overflow-y: scroll; /* vertical */
}

/* Text overflow with ellipsis */
.text-overflow {
  width: 200px;
  white-space: nowrap; /* prevent wrapping */
  overflow: hidden;
  text-overflow: ellipsis; /* show ... for clipped text */
}`,
        },
      ],
    },
    positioning: {
      title: "CSS Positioning",
      description: "Position elements precisely using different positioning schemes.",
      sections: [
        {
          heading: "Position Types",
          text: "CSS provides five positioning schemes to control element placement.",
          code: `/* Static (default) - normal document flow */
.static {
  position: static;
  /* top, right, bottom, left have no effect */
}

/* Relative - positioned relative to normal position */
.relative {
  position: relative;
  top: 20px; /* moves down 20px from normal position */
  left: 10px; /* moves right 10px from normal position */
}

/* Absolute - positioned relative to nearest positioned ancestor */
.parent {
  position: relative; /* becomes positioning context */
}
.absolute {
  position: absolute;
  top: 0;
  right: 0;
  /* Removed from normal document flow */
}

/* Fixed - positioned relative to viewport */
.fixed {
  position: fixed;
  bottom: 20px;
  right: 20px;
  /* Stays in place when scrolling */
}

/* Sticky - switches between relative and fixed */
.sticky {
  position: sticky;
  top: 0;
  /* Sticks when scrolling past threshold */
}`,
        },
        {
          heading: "Position Properties",
          code: `/* Top, Right, Bottom, Left */
.positioned {
  position: absolute;
  top: 10px; /* distance from top */
  right: 20px; /* distance from right */
  bottom: 30px; /* distance from bottom */
  left: 40px; /* distance from left */
}

/* Centering with absolute positioning */
.center-absolute {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

/* Full coverage */
.full-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  /* Covers entire viewport */
}`,
        },
        {
          heading: "Z-Index",
          text: "Controls stacking order of positioned elements (higher values appear on top).",
          code: `/* Z-index only works on positioned elements */
.layer-1 {
  position: relative;
  z-index: 1;
}

.layer-2 {
  position: absolute;
  z-index: 2; /* appears above layer-1 */
}

.layer-3 {
  position: fixed;
  z-index: 999; /* very high - appears on top */
}

/* Negative z-index */
.background {
  position: relative;
  z-index: -1; /* appears behind parent */
}`,
        },
      ],
    },
    flexbox: {
      title: "Flexbox Layout",
      description: "Create flexible, one-dimensional layouts with powerful alignment and distribution controls.",
      sections: [
        {
          heading: "Flexbox Container",
          text: "Enable flexbox by setting display: flex on the container. This creates a flex formatting context.",
          code: `/* Basic flex container */
.container {
  display: flex;
}

/* Flex direction */
.flex-row {
  flex-direction: row; /* default - horizontal left to right */
}
.flex-column {
  flex-direction: column; /* vertical top to bottom */
}
.flex-row-reverse {
  flex-direction: row-reverse; /* horizontal right to left */
}
.flex-column-reverse {
  flex-direction: column-reverse; /* vertical bottom to top */
}`,
        },
        {
          heading: "Main Axis vs Cross Axis",
          text: "Understanding axes is crucial for flexbox. Main axis follows flex-direction, cross axis is perpendicular.",
          code: `/* Main axis alignment (justify-content) */
.justify {
  display: flex;
  justify-content: flex-start; /* default - start of main axis */
  justify-content: flex-end; /* end of main axis */
  justify-content: center; /* center of main axis */
  justify-content: space-between; /* equal space between items */
  justify-content: space-around; /* equal space around items */
  justify-content: space-evenly; /* equal space all around */
}

/* Cross axis alignment (align-items) */
.align {
  display: flex;
  align-items: stretch; /* default - stretch to container height */
  align-items: flex-start; /* start of cross axis */
  align-items: flex-end; /* end of cross axis */
  align-items: center; /* center of cross axis */
  align-items: baseline; /* align text baselines */
}`,
        },
        {
          heading: "Flex Wrap & Gap",
          code: `/* Flex wrap */
.wrap {
  display: flex;
  flex-wrap: nowrap; /* default - single line */
  flex-wrap: wrap; /* wrap to multiple lines */
  flex-wrap: wrap-reverse; /* wrap in reverse order */
}

/* Gap between items */
.gap {
  display: flex;
  gap: 20px; /* gap between all items */
  row-gap: 10px; /* gap between rows */
  column-gap: 15px; /* gap between columns */
}

/* Align multiple lines (align-content) */
.multi-line {
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  align-content: center;
  align-content: space-between;
}`,
        },
        {
          heading: "Flex Items (flex-grow, flex-shrink, flex-basis)",
          code: `/* Flex-grow - how much item grows relative to others */
.grow {
  flex-grow: 1; /* grows to fill available space */
  flex-grow: 2; /* grows twice as much as flex-grow: 1 */
}

/* Flex-shrink - how much item shrinks */
.shrink {
  flex-shrink: 1; /* default - can shrink */
  flex-shrink: 0; /* won't shrink */
}

/* Flex-basis - initial size before growing/shrinking */
.basis {
  flex-basis: 200px; /* start at 200px */
  flex-basis: auto; /* based on content */
  flex-basis: 0; /* start at 0 */
}

/* Flex shorthand: flex-grow flex-shrink flex-basis */
.item-1 {
  flex: 1; /* flex: 1 1 0% */
}
.item-2 {
  flex: 0 0 200px; /* fixed width, no grow/shrink */
}
.item-3 {
  flex: 2 1 300px; /* grows 2x, shrinks, starts at 300px */
}`,
        },
      ],
    },
    grid: {
      title: "CSS Grid Layout",
      description: "Master CSS Grid for creating complex, two-dimensional layouts with rows and columns.",
      sections: [
        {
          heading: "Grid Container Basics",
          code: `/* Create a grid container */
.grid {
  display: grid;
}

/* Define columns */
.grid-cols {
  display: grid;
  grid-template-columns: 200px 300px 200px; /* 3 fixed columns */
  grid-template-columns: 1fr 2fr 1fr; /* fractional units */
  grid-template-columns: repeat(3, 1fr); /* 3 equal columns */
  grid-template-columns: repeat(auto-fill, 200px); /* auto fill */
}

/* Define rows */
.grid-rows {
  display: grid;
  grid-template-rows: 100px 200px; /* 2 fixed rows */
  grid-template-rows: auto 1fr auto; /* header/content/footer */
}

/* Gap between grid items */
.grid-gap {
  display: grid;
  gap: 20px; /* row and column gap */
  row-gap: 10px; /* gap between rows */
  column-gap: 15px; /* gap between columns */
}`,
        },
        {
          heading: "Grid Template Areas",
          text: "Name areas of your grid for intuitive layout creation.",
          code: `/* Define grid areas */
.grid-layout {
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  grid-template-rows: auto 1fr auto;
  grid-template-areas:
    "header header header"
    "sidebar content ads"
    "footer footer footer";
  gap: 20px;
}

/* Assign items to areas */
.header { grid-area: header; }
.sidebar { grid-area: sidebar; }
.content { grid-area: content; }
.ads { grid-area: ads; }
.footer { grid-area: footer; }`,
        },
        {
          heading: "Grid Item Placement",
          code: `/* Place items using line numbers */
.item {
  grid-column-start: 1;
  grid-column-end: 3; /* spans columns 1-2 */
  grid-row-start: 2;
  grid-row-end: 4; /* spans rows 2-3 */
}

/* Shorthand */
.item-short {
  grid-column: 1 / 3; /* start / end */
  grid-row: 2 / 4;
}

/* Span syntax */
.span {
  grid-column: span 2; /* span 2 columns */
  grid-row: span 3; /* span 3 rows */
}

/* Grid area shorthand: row-start / col-start / row-end / col-end */
.area {
  grid-area: 1 / 1 / 3 / 4;
}`,
        },
        {
          heading: "fr Units & Responsive Grids",
          code: `/* Fractional (fr) units - distribute available space */
.fr-grid {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr; /* 25% 50% 25% */
  grid-template-columns: 200px 1fr; /* fixed + flexible */
}

/* Auto-fit and minmax for responsive grids */
.responsive-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  /* Creates as many columns as fit, min 250px, max 1fr */
  gap: 20px;
}

/* Auto-fill vs auto-fit */
.auto-fill {
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  /* Fills row with columns, even if empty */
}

.auto-fit {
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  /* Expands columns to fill space */
}`,
        },
      ],
    },
    responsive: {
      title: "Responsive Design",
      description: "Create websites that adapt beautifully to all screen sizes and devices.",
      sections: [
        {
          heading: "Meta Viewport Tag",
          text: "Essential for responsive design - tells browsers how to control page dimensions and scaling.",
          code: `<!-- Add to <head> of HTML -->
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<!-- Attributes -->
<!-- width=device-width: use device width -->
<!-- initial-scale=1.0: initial zoom level -->
<!-- maximum-scale: max zoom level -->
<!-- minimum-scale: min zoom level -->
<!-- user-scalable: allow user zoom -->`,
        },
        {
          heading: "Media Queries",
          text: "Apply different styles based on device characteristics like screen width, height, orientation, etc.",
          code: `/* Basic media query syntax */
@media (max-width: 768px) {
  /* Styles for screens up to 768px */
  .container {
    width: 100%;
  }
}

/* Min-width (mobile-first approach) */
@media (min-width: 768px) {
  /* Styles for screens 768px and larger */
  .container {
    width: 750px;
  }
}

/* Range queries */
@media (min-width: 768px) and (max-width: 1024px) {
  /* Styles for tablet screens */
}

/* Multiple conditions */
@media (min-width: 768px) and (orientation: landscape) {
  /* Tablet landscape */
}`,
        },
        {
          heading: "Responsive Units (%, rem, vw)",
          code: `/* Percentage - relative to parent */
.percent {
  width: 80%; /* 80% of parent width */
  padding: 5%; /* 5% of parent width */
}

/* rem - relative to root font-size */
html {
  font-size: 16px;
}
.rem-element {
  font-size: 1.5rem; /* 24px */
  margin: 2rem; /* 32px */
}

/* Viewport units */
.viewport {
  width: 100vw; /* 100% of viewport width */
  height: 100vh; /* 100% of viewport height */
  font-size: 4vw; /* responsive font size */
}

/* Responsive typography */
.responsive-text {
  font-size: clamp(16px, 4vw, 32px);
  /* min: 16px, preferred: 4vw, max: 32px */
}`,
        },
        {
          heading: "Mobile-First vs Desktop-First",
          code: `/* Mobile-First (recommended) - start with mobile styles */
.element {
  width: 100%;
  padding: 10px;
}

/* Tablet */
@media (min-width: 768px) {
  .element {
    width: 750px;
    padding: 20px;
  }
}

/* Desktop */
@media (min-width: 1024px) {
  .element {
    width: 1000px;
  }
}

/* Desktop-First - start with desktop styles */
.element {
  width: 1000px;
  padding: 30px;
}

/* Tablet */
@media (max-width: 1024px) {
  .element {
    width: 750px;
  }
}

/* Mobile */
@media (max-width: 768px) {
  .element {
    width: 100%;
    padding: 10px;
  }
}`,
        },
      ],
    },
    styling: {
      title: "CSS Styling Techniques",
      description: "Advanced styling techniques including shadows, transforms, transitions, and animations.",
      sections: [
        {
          heading: "Shadows (text-shadow, box-shadow)",
          code: `/* Text shadow: x y blur color */
.text-shadow {
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  text-shadow: 0 0 10px #fff, 0 0 20px #fff; /* glow effect */
}

/* Multiple text shadows */
.multi-text-shadow {
  text-shadow:
    1px 1px 2px black,
    0 0 1em blue,
    0 0 0.2em blue;
}

/* Box shadow: x y blur spread color */
.box-shadow {
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2); /* depth */
}

/* Inset shadow */
.inset-shadow {
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.2);
}

/* Multiple box shadows */
.multi-shadow {
  box-shadow:
    0 1px 3px rgba(0,0,0,0.12),
    0 1px 2px rgba(0,0,0,0.24);
}`,
        },
        {
          heading: "Rounded Corners (border-radius)",
          code: `/* Equal radius on all corners */
.rounded {
  border-radius: 8px;
}

/* Circle */
.circle {
  width: 100px;
  height: 100px;
  border-radius: 50%;
}

/* Individual corners */
.custom-radius {
  border-radius: 10px 20px 30px 40px;
  /* top-left, top-right, bottom-right, bottom-left */
}

/* Elliptical corners */
.ellipse {
  border-radius: 50px / 25px; /* horizontal / vertical */
}

/* Specific corners */
.corners {
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}`,
        },
        {
          heading: "Transitions",
          code: `/* Basic transition: property duration timing-function delay */
.button {
  background-color: blue;
  transition: background-color 0.3s ease;
}
.button:hover {
  background-color: darkblue;
}

/* Multiple properties */
.box {
  transition: width 0.3s ease, height 0.3s ease, background-color 0.5s;
}

/* All properties */
.all {
  transition: all 0.3s ease-in-out;
}

/* Timing functions */
.timing {
  transition-timing-function: linear;
  transition-timing-function: ease; /* default */
  transition-timing-function: ease-in;
  transition-timing-function: ease-out;
  transition-timing-function: ease-in-out;
  transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);
}`,
        },
        {
          heading: "Transforms (translate, scale, rotate)",
          code: `/* Translate (move) */
.translate {
  transform: translate(50px, 100px); /* x, y */
  transform: translateX(50px);
  transform: translateY(100px);
}

/* Scale */
.scale {
  transform: scale(1.5); /* 150% size */
  transform: scale(0.5); /* 50% size */
  transform: scale(2, 0.5); /* x, y separately */
}

/* Rotate */
.rotate {
  transform: rotate(45deg);
  transform: rotate(-90deg);
  transform: rotateX(45deg); /* 3D rotation */
  transform: rotateY(45deg);
}

/* Skew */
.skew {
  transform: skew(20deg, 10deg);
}

/* Multiple transforms */
.multi-transform {
  transform: translate(50px, 50px) rotate(45deg) scale(1.2);
}

/* Transform origin */
.origin {
  transform-origin: top left; /* rotation/scale origin */
  transform-origin: 50% 50%; /* center (default) */
}`,
        },
        {
          heading: "Animations (@keyframes)",
          code: `/* Define animation with @keyframes */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Using percentages */
@keyframes bounce {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
}

/* Apply animation */
.animated {
  animation-name: fadeIn;
  animation-duration: 1s;
  animation-timing-function: ease-out;
  animation-delay: 0.5s;
  animation-iteration-count: 1; /* or infinite */
  animation-direction: normal; /* normal, reverse, alternate */
  animation-fill-mode: forwards; /* keeps final state */
}

/* Shorthand */
.animated-short {
  animation: fadeIn 1s ease-out 0.5s forwards;
}`,
        },
      ],
    },
    pseudo: {
      title: "Pseudo Classes & Elements",
      description: "Style elements based on their state or create virtual elements with pseudo-selectors.",
      sections: [
        {
          heading: "Pseudo Classes (:hover, :active, :focus)",
          code: `/* Hover - when mouse is over element */
a:hover {
  color: blue;
  text-decoration: underline;
}

/* Active - when element is being clicked */
button:active {
  transform: scale(0.95);
}

/* Focus - when element has keyboard focus */
input:focus {
  outline: 2px solid blue;
  border-color: blue;
}

/* Visited - for visited links */
a:visited {
  color: purple;
}

/* Disabled and enabled */
input:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

input:enabled {
  background-color: white;
}

/* Checked (for checkboxes/radio buttons) */
input:checked {
  accent-color: blue;
}`,
        },
        {
          heading: "Structural Pseudo Classes",
          code: `/* First and last child */
li:first-child {
  font-weight: bold;
}

li:last-child {
  border-bottom: none;
}

/* nth-child */
li:nth-child(odd) {
  background-color: #f0f0f0;
}

li:nth-child(even) {
  background-color: white;
}

li:nth-child(3) {
  color: red; /* 3rd child */
}

li:nth-child(3n) {
  color: blue; /* every 3rd child */
}

li:nth-child(3n+1) {
  color: green; /* 1st, 4th, 7th... */
}

/* First/last of type */
p:first-of-type {
  margin-top: 0;
}

p:last-of-type {
  margin-bottom: 0;
}

/* Only child */
p:only-child {
  text-align: center;
}`,
        },
        {
          heading: "Pseudo Elements (::before, ::after)",
          text: "Create virtual elements before or after element content. Requires 'content' property.",
          code: `/* ::before - insert content before element */
.label::before {
  content: "★ ";
  color: gold;
}

/* ::after - insert content after element */
.required::after {
  content: " *";
  color: red;
}

/* Decorative elements */
.quote::before {
  content: """;
  font-size: 3em;
  color: #ccc;
}

.quote::after {
  content: """;
  font-size: 3em;
  color: #ccc;
}

/* Empty content for shapes */
.icon::before {
  content: "";
  display: inline-block;
  width: 20px;
  height: 20px;
  background-color: blue;
  border-radius: 50%;
  margin-right: 10px;
}`,
        },
        {
          heading: "Other Useful Pseudo Elements",
          code: `/* ::placeholder - style input placeholders */
input::placeholder {
  color: #999;
  font-style: italic;
  opacity: 1;
}

/* ::selection - style selected text */
::selection {
  background-color: #3b82f6;
  color: white;
}

/* ::first-letter - style first letter */
p::first-letter {
  font-size: 2em;
  font-weight: bold;
  color: #3b82f6;
}

/* ::first-line - style first line */
p::first-line {
  font-weight: bold;
  color: #333;
}`,
        },
      ],
    },
    variables: {
      title: "CSS Variables (Custom Properties)",
      description: "Use CSS variables to create maintainable, reusable, and dynamic stylesheets.",
      sections: [
        {
          heading: "Declaring and Using Custom Properties",
          text: "CSS variables are defined with -- prefix and accessed with var() function.",
          code: `/* Declare variables in :root for global scope */
:root {
  --primary-color: #3b82f6;
  --secondary-color: #8b5cf6;
  --text-color: #1f2937;
  --bg-color: #ffffff;
  --spacing-sm: 8px;
  --spacing-md: 16px;
  --spacing-lg: 32px;
  --font-size-base: 16px;
  --border-radius: 8px;
}

/* Use variables */
.button {
  background-color: var(--primary-color);
  color: var(--bg-color);
  padding: var(--spacing-md);
  border-radius: var(--border-radius);
  font-size: var(--font-size-base);
}

/* Fallback value */
.element {
  color: var(--text-color, #000000);
  /* Uses #000000 if --text-color is not defined */
}`,
        },
        {
          heading: "Scoped Variables",
          text: "Variables can be scoped to specific elements and cascade to their children.",
          code: `/* Global variables */
:root {
  --button-bg: blue;
  --button-text: white;
}

/* Scoped override */
.dark-theme {
  --button-bg: #1f2937;
  --button-text: #f9fafb;
}

.light-theme {
  --button-bg: #f9fafb;
  --button-text: #1f2937;
}

/* Use the variable */
.button {
  background-color: var(--button-bg);
  color: var(--button-text);
}

/* Scoped to specific component */
.card {
  --card-padding: 20px;
  --card-bg: white;

  padding: var(--card-padding);
  background-color: var(--card-bg);
}`,
        },
        {
          heading: "Dynamic Variables with JavaScript",
          text: "Change CSS variables dynamically using JavaScript for themes, animations, etc.",
          code: `/* Change CSS variable value */
document.documentElement.style.setProperty(
  '--primary-color',
  '#ff0000'
);

/* Get CSS variable value */
const primaryColor = getComputedStyle(document.documentElement)
  .getPropertyValue('--primary-color');

console.log(primaryColor); // '#3b82f6'

/* Dark mode toggle example */
function toggleDarkMode() {
  const root = document.documentElement;
  root.style.setProperty('--bg-color', '#1f2937');
  root.style.setProperty('--text-color', '#f9fafb');
  root.style.setProperty('--primary-color', '#60a5fa');
}

/* Theme switcher */
function setTheme(theme) {
  const themes = {
    blue: { primary: '#3b82f6', secondary: '#8b5cf6' },
    red: { primary: '#ef4444', secondary: '#f97316' },
    green: { primary: '#10b981', secondary: '#06b6d4' }
  };

  document.documentElement.style.setProperty(
    '--primary-color',
    themes[theme].primary
  );
}`,
        },
      ],
    },
    functions: {
      title: "CSS Functions",
      description: "Use CSS functions for dynamic calculations and responsive sizing.",
      sections: [
        {
          heading: "calc() Function",
          text: "Perform calculations to determine CSS property values. Supports +, -, *, /",
          code: `/* Basic calculations */
.element {
  width: calc(100% - 50px);
  height: calc(100vh - 100px);
  padding: calc(1rem + 5px);
  margin: calc(10px * 2);
}

/* Responsive layouts */
.sidebar {
  width: calc(25% - 20px);
}

.content {
  width: calc(75% - 20px);
}

/* Mixing units */
.box {
  width: calc(100vw - 2rem);
  font-size: calc(16px + 0.5vw);
}

/* Nested calculations */
.complex {
  width: calc(100% - calc(2rem + 10px));
  padding: calc(calc(100% / 12) - 20px);
}`,
        },
        {
          heading: "min() Function",
          text: "Returns the smallest value from a list of comma-separated values.",
          code: `/* Responsive width with maximum */
.container {
  width: min(100%, 1200px);
  /* Never wider than 100% or 1200px */
}

/* Responsive padding */
.box {
  padding: min(5vw, 3rem);
  /* Uses smaller value: 5% of viewport or 3rem */
}

/* Font size with maximum */
.title {
  font-size: min(10vw, 48px);
  /* Responsive but never larger than 48px */
}`,
        },
        {
          heading: "max() Function",
          text: "Returns the largest value from a list of comma-separated values.",
          code: `/* Responsive width with minimum */
.container {
  width: max(50%, 300px);
  /* Never narrower than 50% or 300px */
}

/* Minimum font size */
.text {
  font-size: max(16px, 1vw);
  /* At least 16px, grows with viewport */
}

/* Grid with minimum column size */
.grid {
  grid-template-columns: repeat(auto-fit, max(200px, 20%));
}`,
        },
        {
          heading: "clamp() Function",
          text: "Clamps a value between minimum and maximum bounds. Syntax: clamp(min, preferred, max)",
          code: `/* Responsive font size with min and max */
.title {
  font-size: clamp(1.5rem, 5vw, 3rem);
  /* Min: 1.5rem, Preferred: 5vw, Max: 3rem */
}

/* Responsive width */
.container {
  width: clamp(300px, 80%, 1200px);
  /* Min: 300px, Preferred: 80%, Max: 1200px */
}

/* Responsive padding */
.section {
  padding: clamp(1rem, 5%, 5rem);
}

/* Responsive line height */
p {
  line-height: clamp(1.4, 1.2 + 0.5vw, 2);
}

/* Fluid typography */
h1 {
  font-size: clamp(2rem, 1rem + 3vw, 5rem);
  /* Smoothly scales between 2rem and 5rem */
}`,
        },
      ],
    },
    sass: {
      title: "SCSS / SASS (Preprocessors)",
      description: "Supercharge your CSS with Sass features like variables, nesting, mixins, and functions.",
      sections: [
        {
          heading: "SCSS vs SASS Syntax",
          text: "SCSS uses CSS-like syntax with braces {}. SASS uses indentation (older syntax).",
          code: `/* SCSS Syntax (recommended - .scss files) */
.button {
  background-color: blue;
  &:hover {
    background-color: darkblue;
  }
}

/* SASS Syntax (.sass files) - no braces/semicolons */
.button
  background-color: blue
  &:hover
    background-color: darkblue

/* We'll use SCSS syntax in examples */`,
        },
        {
          heading: "Variables in SCSS",
          text: "SCSS variables use $ prefix and are more powerful than CSS variables.",
          code: `/* Define variables */
$primary-color: #3b82f6;
$secondary-color: #8b5cf6;
$font-stack: 'Helvetica', sans-serif;
$spacing: 16px;
$border-radius: 8px;

/* Use variables */
.button {
  background-color: $primary-color;
  font-family: $font-stack;
  padding: $spacing;
  border-radius: $border-radius;
}

/* Variables in calculations */
.box {
  padding: $spacing * 2; // 32px
  margin: $spacing / 2; // 8px
}

/* Default values */
$base-color: #333 !default;
/* Won't override if already defined */`,
        },
        {
          heading: "Nesting",
          text: "Nest selectors to mirror HTML structure. Makes code more organized and readable.",
          code: `/* Without nesting (CSS) */
.nav { background-color: #333; }
.nav ul { list-style: none; }
.nav ul li { display: inline-block; }
.nav ul li a { color: white; }
.nav ul li a:hover { color: blue; }

/* With nesting (SCSS) */
.nav {
  background-color: #333;

  ul {
    list-style: none;

    li {
      display: inline-block;

      a {
        color: white;

        &:hover {
          color: blue;
        }
      }
    }
  }
}

/* & parent selector */
.button {
  background-color: blue;

  &:hover { background-color: darkblue; }
  &:active { transform: scale(0.95); }
  &.primary { background-color: green; }
  &-icon { margin-right: 8px; } // .button-icon
}`,
        },
        {
          heading: "Mixins",
          text: "Reusable blocks of code that can accept parameters. Like functions for styles.",
          code: `/* Define mixin */
@mixin flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}

/* Use mixin */
.container {
  @include flex-center;
}

/* Mixin with parameters */
@mixin button-style($bg-color, $text-color, $padding: 12px) {
  background-color: $bg-color;
  color: $text-color;
  padding: $padding 24px;
  border-radius: 4px;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: darken($bg-color, 10%);
  }
}

/* Use with arguments */
.primary-btn {
  @include button-style(#3b82f6, white);
}

.secondary-btn {
  @include button-style(#8b5cf6, white, 16px);
}

/* Mixin for responsive breakpoints */
@mixin respond-to($breakpoint) {
  @if $breakpoint == mobile {
    @media (max-width: 767px) { @content; }
  } @else if $breakpoint == tablet {
    @media (min-width: 768px) and (max-width: 1023px) { @content; }
  } @else if $breakpoint == desktop {
    @media (min-width: 1024px) { @content; }
  }
}

.element {
  width: 100%;

  @include respond-to(tablet) {
    width: 750px;
  }

  @include respond-to(desktop) {
    width: 1200px;
  }
}`,
        },
        {
          heading: "Functions & Operations",
          code: `/* Built-in functions */
$base-color: #3b82f6;

.box {
  background-color: lighten($base-color, 20%); // lighter
  border-color: darken($base-color, 10%); // darker
  color: mix($base-color, white, 50%); // blend colors
  opacity: opacity($base-color); // get opacity
}

/* Custom functions */
@function calculate-rem($px) {
  @return $px / 16px * 1rem;
}

.element {
  font-size: calculate-rem(24px); // 1.5rem
  padding: calculate-rem(32px); // 2rem
}

/* Math operations */
$base-size: 16px;

.title {
  font-size: $base-size * 2; // 32px
  margin: $base-size / 2; // 8px
  padding: $base-size + 4px; // 20px
}

/* Color manipulation */
.theme {
  background: complement($base-color); // opposite color
  border: 1px solid saturate($base-color, 20%); // more saturated
  box-shadow: 0 4px 8px fade-out($base-color, 0.5); // semi-transparent
}`,
        },
        {
          heading: "Partials & Imports",
          text: "Organize code into multiple files. Partials start with _ and won't compile separately.",
          code: `/* _variables.scss */
$primary-color: #3b82f6;
$secondary-color: #8b5cf6;
$spacing: 16px;

/* _mixins.scss */
@mixin flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}

@mixin button($bg) {
  background-color: $bg;
  padding: 12px 24px;
  border-radius: 4px;
}

/* _base.scss */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* main.scss - imports all partials */
@import 'variables';
@import 'mixins';
@import 'base';

.container {
  background-color: $primary-color;
  @include flex-center;
}

.button {
  @include button($secondary-color);
}

/* Modern @use (replaces @import) */
@use 'variables' as vars;
@use 'mixins';

.element {
  color: vars.$primary-color;
  @include mixins.flex-center;
}`,
        },
      ],
    },
  };

  const currentContent = content[activeTab];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-pink-600 to-purple-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-4">🎨 CSS Course</h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Master CSS to design beautiful, responsive, and modern websites. From basics to advanced animations and preprocessors.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Topic Tabs */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {topics.map((topic) => (
              <button
                key={topic.id}
                onClick={() => setActiveTab(topic.id)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all flex items-center gap-2 ${activeTab === topic.id
                    ? "bg-gradient-to-r from-pink-600 to-purple-600 text-white shadow-md"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
              >
                <span className="text-xl">{topic.icon}</span>
                <span className="text-sm">{topic.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Content Area */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="mb-8">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {currentContent.title}
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              {currentContent.description}
            </p>
          </div>

          {/* Content Sections */}
          <div className="space-y-8">
            {currentContent.sections.map((section, index) => (
              <div key={index} className="border-l-4 border-pink-500 pl-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {section.heading}
                </h3>
                {section.text && (
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    {section.text}
                  </p>
                )}
                {section.points && (
                  <ul className="space-y-2 mb-4">
                    {section.points.map((point, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="text-pink-600 mt-1">▸</span>
                        <span className="text-gray-700">{point}</span>
                      </li>
                    ))}
                  </ul>
                )}
                {section.code && (
                  <div className="bg-gray-900 text-gray-100 rounded-lg p-4 overflow-x-auto">
                    <pre className="text-sm">
                      <code>{section.code}</code>
                    </pre>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="mt-12 bg-gradient-to-r from-pink-50 to-purple-50 rounded-xl p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Style the Web? 🚀
            </h3>
            <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
              Practice these CSS concepts and create beautiful, responsive designs that bring your web pages to life!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Css;
