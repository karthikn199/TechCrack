const reactData = [
  {
    id: 1,
    question: "What are React lifecycle methods?",
    answer:
      "Class components have lifecycle methods like `componentDidMount`, `componentDidUpdate`, and `componentWillUnmount`. Functional components use the `useEffect` hook.",
  },
  {
    id: 2,
    question: "What is the difference between class and functional components?",
    answer:
      "Class components use `this.state` and lifecycle methods. Functional components use hooks like `useState` and `useEffect`.",
  },
  {
    id: 3,
    question: "What are keys in React?",
    answer:
      "Keys help React identify which items have changed in a list. Example: `<li key={item.id}>{item.name}</li>`.",
  },
  {
    id: 4,
    question: "What is lifting state up?",
    answer:
      "Sharing state between components by moving it to their closest common ancestor.",
  },
  {
    id: 5,
    question: "What are React hooks?",
    answer:
      "Hooks like `useState`, `useEffect`, and `useContext` allow functional components to manage state and side effects.",
  },
  {
    id: 6,
    question: "How do you optimize performance in React?",
    answer:
      "Use `React.memo`, `useMemo`, and `useCallback` to prevent unnecessary re-renders. Implement code-splitting with `React.lazy`.",
  },
  {
    id: 7,
    question: "What is the purpose of `useEffect`?",
    answer:
      "`useEffect` is used to perform side effects in functional components, such as fetching data or subscribing to events.",
  },
  {
    id: 8,
    question: "What are custom hooks?",
    answer:
      "Custom hooks are reusable functions that encapsulate logic. Example: `useFetch` for fetching data.",
  },
  {
    id: 9,
    question: "What is the difference between `useMemo` and `useCallback`?",
    answer:
      "`useMemo` memoizes a value, while `useCallback` memoizes a function.",
  },
  {
    id: 10,
    question: "What are the rules of hooks?",
    answer:
      "Hooks must be called at the top level of a React function, not inside loops, conditions, or nested functions.",
  },
  {
    id: 11,
    question: "What is Redux?",
    answer:
      "Redux is a state management library for managing global state in React applications.",
  },
  {
    id: 12,
    question: "What is the difference between Redux and Context API?",
    answer:
      "Redux is better for large apps with complex state, while Context API is simpler and lightweight for small apps.",
  },
  {
    id: 13,
    question: "How do you handle asynchronous actions in Redux?",
    answer:
      "Use middleware like Redux Thunk or Redux Saga to handle async actions.",
  },
  {
    id: 14,
    question: "What is React.memo?",
    answer:
      "`React.memo` is a higher-order component that memoizes a component to prevent unnecessary re-renders.",
  },
  {
    id: 15,
    question: "What is code-splitting in React?",
    answer:
      "Code-splitting is a technique to split your code into smaller bundles that can be loaded on demand. Use `React.lazy` and `Suspense`.",
  },
  {
    id: 16,
    question: "What are higher-order components (HOCs)?",
    answer:
      "HOCs are functions that take a component and return a new component with additional props or functionality.",
  },
  {
    id: 17,
    question: "What is the render props pattern?",
    answer:
      "Render props is a pattern where a component's prop is a function used to share logic. Example: `<DataProvider render={(data) => <Child data={data} />} />`.",
  },
  {
    id: 18,
    question: "What are error boundaries in React?",
    answer:
      "Error boundaries are React components that catch JavaScript errors in their child component tree and display a fallback UI.",
  },
  {
    id: 19,
    question: "What are React Portals?",
    answer:
      "Portals allow rendering a child component outside its parent DOM hierarchy. Example: Modals or tooltips.",
  },
  {
    id: 20,
    question: "What is server-side rendering (SSR) in React?",
    answer:
      "SSR is the process of rendering React components on the server and sending the HTML to the client for faster initial load times.",
  },
  {
    id: 21,
    question: "How do you handle routing in React?",
    answer:
      "Use `react-router-dom` for client-side routing. Example: `<BrowserRouter>`, `<Routes>`, and `<Route>`.",
  },
  {
    id: 22,
    question: "What are protected routes in React?",
    answer:
      "Protected routes restrict access to certain routes based on user authentication. Example: Redirect to login if not authenticated.",
  },
  {
    id: 23,
    question: "How do you test React components?",
    answer:
      "Use Jest for unit testing and React Testing Library for component testing.",
  },
  {
    id: 24,
    question: "What is snapshot testing?",
    answer:
      "Snapshot testing captures the rendered output of a component and compares it to a saved snapshot to detect changes.",
  },
  {
    id: 25,
    question: "How do you handle authentication in React?",
    answer:
      "Use JWT tokens stored in localStorage or cookies. Implement login/logout flows with protected routes.",
  },
  {
    id: 26,
    question: "What is Webpack?",
    answer:
      "Webpack is a module bundler that bundles JavaScript, CSS, and assets for production.",
  },
  {
    id: 27,
    question: "What is Babel?",
    answer:
      "Babel is a JavaScript compiler that converts modern JavaScript (ES6+) into backward-compatible code.",
  },
  {
    id: 28,
    question: "What is ESLint?",
    answer:
      "ESLint is a tool for identifying and fixing problems in JavaScript code.",
  },
  {
    id: 29,
    question: "What is Prettier?",
    answer:
      "Prettier is a code formatter that ensures consistent code style across your project.",
  },
  {
    id: 30,
    question: "How do you debug React applications?",
    answer:
      "Use React DevTools and browser console to inspect components, props, and state.",
  },
];

export default reactData;
