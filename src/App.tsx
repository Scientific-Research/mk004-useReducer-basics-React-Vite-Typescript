// import './App.css';

import { useReducer } from 'react';

const initialState = {
  count: 0,
};

interface IState {
  count: number;
}

interface IAction {
  type: 'increment' | 'decrement';
}

const reducer = (state: IState, action: IAction) => {
  const _state = { ...state };

  if (action.type === 'increment') {
    _state.count++;
  } else if (action.type === 'decrement') {
    _state.count--;
  }

  return _state;
};

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
