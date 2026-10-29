 React Practice Notes

 1. What is React?
- React is a JavaScript library used to build user interfaces.
- It is component-based.
- React supports reusable UI components.

 2. JSX
- JSX stands for JavaScript XML.
- It allows us to write HTML-like syntax inside JavaScript.
- A component must return one parent element or a Fragment.

 3. Components
- Components are reusable building blocks of a React application.
- Component names should start with a capital letter.
- Functional components are commonly used.

 4. Props
- Props pass data from a parent component to a child component.
- Props are read-only.

 5. useState Hook
- useState manages state in a functional component.
- Updating state can trigger a re-render.

Example:
```jsx
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}

export default Counter;
```

 6. React Fragment
- Fragments group multiple elements without adding an extra DOM element.
- Syntax: `<>...</>`

 7. Event Handling
- React events use camelCase, such as `onClick`.
- Event handlers can be passed as functions.
