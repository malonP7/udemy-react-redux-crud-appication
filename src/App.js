import React, { Component } from 'react';

// class App extends Component {
//   render() {
//     return (
//       < React.Fragment >
//         <label htmlFor="bar">bar</label>
//         <input type="text" onChang={() => { console.log("I am clicked!") }} />
//       </React.Fragment >
//     )
//   }
// }

const Cat = () => {
  return <div>でゅふふwww</div>
}

const App = () => {
  return (
    <div>
      <Cat />
      <Cat />
      <Cat />
      <Cat />
    </div>
  )

}

export default App;
