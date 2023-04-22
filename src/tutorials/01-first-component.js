import React from 'react';
import ReactDOM from 'react-dom/client';

function Greeting() {
  return <h1>Hello there, I'm Pradeep, I'm leaning React JS</h1>;
}

export default Greeting;

//  fragment
// function Greeting() {
//   return (
//     <React.Fragment>
//       <h1>Hello World</h1>
//       <p>
//         This is an example of react fragment, Shorthand for this using empty
//         angle bracket "<></>"
//       </p>
//     </React.Fragment>
//   );
// }

// Alternate to create JSX element
// function Greeting() {
//   return React.createElement(
//     'h1',
//     { className: 'heading' },
//     'Child node eg:a or textContent'
//   );
// }
// index.js file is only responsible for rendering component in the index html root

// const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(<Greeting />);
