// import './App.css';

import { useReducer } from 'react';

const initialState: IState = {
  count: 0,
};

interface IState {
  count: number;
}

interface IAction {
  type: 'increment' | 'decrement' | 'reset';
  payload: number;
}

const reducer = (state: IState, action: IAction) => {
  const _state = { ...state };

  if (action.type === 'increment') {
    _state.count++;
  } else if (action.type === 'decrement') {
    _state.count--;
  } else if (action.type === 'reset') {
    // _state.count = 0;
    _state.count = action.payload;
  }

  return _state;
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleIncreaseCount = () => {
    dispatch({ type: 'increment', payload: 0 });
  };

  const handleDecreaseCount = () => {
    dispatch({ type: 'decrement', payload: 0 });
  };

  const handleResetButton = () => {
    // dispatch({ type: 'reset'});
    dispatch({ type: 'reset', payload: 100 });
  };

  return (
    <div className="App">
      <h1>useReducer-Basics-React-Vite-Typescript</h1>
      <h3>Welcome to this Site!</h3>
      <p className="count">Count: {state.count}</p>

      <div className="buttonArea">
        <button className="increaseBtn" onClick={handleIncreaseCount}>
          +
        </button>

        <button onClick={handleDecreaseCount}>-</button>

        <div className="btnReset">
          <button onClick={handleResetButton}>Reset</button>
        </div>
      </div>
    </div>
  );
}

export default App;
