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

  const handleIncreaseCount = () => {
    dispatch({ type: 'increment' });
  };

  const handleDecreaseCount = () => {
    dispatch({ type: 'decrement' });
  };

  return (
    <div className="App">
      <h1>useReducer-Basics-React-Vite-Typescript</h1>
      <h3>Welcome to this Site!</h3>
      <div className="buttonArea">
        <button className='increaseBtn' onClick={handleIncreaseCount}>+</button>

        <button onClick={handleDecreaseCount}>-</button>
      </div>
      <p className="count">Count: {state.count}</p>
    </div>
  );
}

export default App;
