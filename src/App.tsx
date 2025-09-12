// import './App.css';

import { useReducer } from 'react';

const initialState = {
  count: 0,
};

const reducer = (state, action) => {};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="App">
      <h1>useReducer-Basics-React-Vite-Typescript</h1>
      <h3>Welcome to this Site!</h3>
    </div>
  );
}

export default App;
