// import './App.css';

import { useReducer } from 'react';

const initialState: IState = {
  count: 0,
  value: 0,
};

interface IState {
  count: number;
  value: number;
}

interface IAction {
  type: 'increment' | 'decrement' | 'reset' | 'save' | 'input';
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
  } else if (action.type === 'input') {
    _state.value = action.payload;
  } else if (action.type === 'save') {
    _state.count = action.payload;
    // _state.count = _state.value;
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

  const handleResetButton = (num: number) => {
    // dispatch({ type: 'reset'});
    switch (num) {
      case 0:
        dispatch({ type: 'reset', payload: 0 });
        break;

      case 100:
        dispatch({ type: 'reset', payload: 100 });
        break;

      case -100:
        dispatch({ type: 'reset', payload: -100 });
        break;
    }
  };

  const handleSaveButton = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    // dispatch({ type: 'save', payload: Number(e.target.value) });
    dispatch({ type: 'save', payload: state.value });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // console.log(e.target.value);
    // value = e.target.value;
    dispatch({ type: 'input', payload: Number(e.target.value) });
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
          <button onClick={() => handleResetButton(0)}>Reset to 0</button>
          <button onClick={() => handleResetButton(100)}>Reset to 100</button>
          <button onClick={() => handleResetButton(-100)}>Reset to -100</button>
        </div>
      </div>

      <div className="inputSave">
        <input
          className="input"
          type="text"
          onChange={(e) => handleInputChange(e)}
        />
        <button className="btnSave" onClick={(e) => handleSaveButton(e)}>
          Save
        </button>
      </div>
    </div>
  );
}

export default App;
