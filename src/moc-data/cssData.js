const CSSData = [
  {
    id: 1,
    question: "What is CSS?",
    answer:
      "CSS stands for Cascading Style Sheets. It is used to style and lay out HTML elements, such as changing colors, fonts, spacing, and positioning.",
  },
  {
    id: 2,
    question: "What are the different types of CSS?",
    answer:
      "The three types of CSS are: Inline CSS (styles applied directly within HTML elements), Internal CSS (styles written within a <style> tag in the HTML document), and External CSS (styles written in a separate .css file).",
  },
  {
    id: 3,
    question: "What is the difference between class and ID selectors in CSS?",
    answer:
      "A class selector (.) is used to style multiple elements, while an ID selector (#) is used to style a unique element.",
  },
  {
    id: 4,
    question: "What is the Box Model in CSS?",
    answer:
      "The Box Model in CSS consists of four areas: content, padding, border, and margin, which together define the space an element occupies.",
  },
  {
    id: 5,
    question: "What are pseudo-classes in CSS?",
    answer:
      "Pseudo-classes are keywords added to selectors to style elements in specific states, such as :hover, :focus, or :nth-child().",
  },
  {
    id: 6,
    question: "What are pseudo-elements in CSS?",
    answer:
      "Pseudo-elements allow you to style specific parts of elements, such as ::before or ::after, to insert content or apply styles.",
  },
  {
    id: 7,
    question:
      "What is the difference between relative, absolute, fixed, and sticky positioning?",
    answer:
      "Relative: Positioned relative to its normal position. Absolute: Positioned relative to its nearest positioned ancestor. Fixed: Positioned relative to the viewport. Sticky: Switches between relative and fixed based on scroll.",
  },
  {
    id: 8,
    question: "What is a CSS Grid?",
    answer:
      "CSS Grid is a layout system designed for creating two-dimensional layouts using rows and columns.",
  },
  {
    id: 9,
    question: "What is Flexbox in CSS?",
    answer:
      "Flexbox is a layout system that arranges elements in a one-dimensional layout, either horizontally or vertically, with powerful alignment and spacing options.",
  },
  {
    id: 10,
    question: "What are media queries in CSS?",
    answer:
      "Media queries allow you to apply styles based on device properties, such as screen width or orientation, enabling responsive design.",
  },
  {
    id: 11,
    question:
      "What is the difference between 'em', 'rem', 'px', and '%' in CSS?",
    answer:
      "'em': Relative to the font size of the parent. 'rem': Relative to the root font size. 'px': Absolute pixel size. '%': Relative to the parent element's size.",
  },
  {
    id: 12,
    question: "What is the z-index in CSS?",
    answer:
      "The z-index property specifies the stack order of elements. Higher values appear in front of lower values.",
  },
  {
    id: 13,
    question:
      "What is the difference between inline, block, and inline-block elements in CSS?",
    answer:
      "Inline: Does not start on a new line and only takes as much width as necessary. Block: Starts on a new line and takes up full width. Inline-block: Behaves like inline but allows setting width and height.",
  },
  {
    id: 14,
    question: "What is the difference between padding and margin in CSS?",
    answer:
      "Padding is the space between content and the element's border, while margin is the space between the element's border and its surroundings.",
  },
  {
    id: 15,
    question: "What are keyframes in CSS animations?",
    answer:
      "Keyframes define the intermediate steps in a CSS animation. They specify how an element's style should change at different stages.",
  },
  {
    id: 16,
    question:
      "What is the difference between 'relative' and 'absolute' units in CSS?",
    answer:
      "Relative units (e.g., %, em, rem) are based on other values like parent or root elements. Absolute units (e.g., px, cm, in) have fixed sizes.",
  },
  {
    id: 17,
    question:
      "What is the difference between 'visibility: hidden' and 'display: none'?",
    answer:
      "'visibility: hidden' hides the element but it still takes up space. 'display: none' removes the element from the layout.",
  },
  {
    id: 18,
    question: "What is the difference between RGB, HEX, and HSL color formats?",
    answer:
      "RGB specifies colors using Red, Green, and Blue values. HEX uses hexadecimal notation. HSL uses Hue, Saturation, and Lightness.",
  },
  {
    id: 19,
    question: "What is a CSS transition?",
    answer:
      "A CSS transition allows smooth changes between property values over a specified duration.",
  },
  {
    id: 20,
    question: "What is the difference between max-width and min-width in CSS?",
    answer:
      "'max-width' sets the maximum width an element can have, while 'min-width' sets the minimum width.",
  },
  {
    id: 21,
    question: "What is a CSS variable?",
    answer:
      "CSS variables are custom properties defined using the '--' syntax, reusable throughout a stylesheet.",
  },
  {
    id: 22,
    question:
      "What is the difference between a 'relative' and 'static' positioned element?",
    answer:
      "A 'relative' element is positioned relative to its normal position. A 'static' element follows the default document flow.",
  },
  {
    id: 23,
    question: "What is the overflow property in CSS?",
    answer:
      "The overflow property controls what happens when content overflows an element's box. Options include visible, hidden, scroll, and auto.",
  },
  {
    id: 24,
    question: "What are CSS combinators?",
    answer:
      "CSS combinators describe the relationship between selectors, such as descendant (space), child (>), adjacent sibling (+), and general sibling (~).",
  },
  {
    id: 25,
    question: "What is the difference between :nth-child() and :nth-of-type()?",
    answer:
      ":nth-child() matches based on the element's position among all siblings, while :nth-of-type() matches based on its position among siblings of the same type.",
  },
  {
    id: 26,
    question: "What is the difference between absolute and fixed positioning?",
    answer:
      "Absolute positioning is relative to the nearest positioned ancestor, while fixed positioning is relative to the viewport and does not move when scrolling.",
  },
  {
    id: 27,
    question: "What is the content property in CSS?",
    answer:
      "The content property is used with pseudo-elements like ::before and ::after to insert content into the page.",
  },
  {
    id: 28,
    question: "What are CSS shorthand properties?",
    answer:
      "CSS shorthand properties allow setting multiple related properties in a single line, such as margin, padding, and font.",
  },
  {
    id: 29,
    question: "What is the difference between transition and animation in CSS?",
    answer:
      "Transition defines a change between two states, while animation allows more complex sequences of styles using keyframes.",
  },
  {
    id: 30,
    question: "What is a responsive design in CSS?",
    answer:
      "Responsive design ensures that web content adapts to different screen sizes and devices using techniques like media queries and flexible layouts.",
  },
];

export default CSSData;
