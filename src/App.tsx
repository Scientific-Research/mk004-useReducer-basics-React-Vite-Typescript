// import './App.css';

import { useReducer } from 'react';

const initialState: IState = {
  count: 0,
  value: '',
  valueNaN: '',
  booleanWert: false,
  emptyInput: '',
};

interface IState {
  count: number;
  value: string;
  valueNaN: string;
  booleanWert: boolean;
  emptyInput: string;
}

interface IAction {
  type: 'increment' | 'decrement' | 'reset' | 'save' | 'input';
  payload: string;
}

const reducer = (state: IState, action: IAction) => {
  const _state = { ...state };

  if (action.type === 'increment') {
    _state.count++;
  } else if (action.type === 'decrement') {
    _state.count--;
  } else if (action.type === 'reset') {
    // _state.count = 0;
    _state.count = Number(action.payload);
  } else if (action.type === 'input') {
    _state.value = action.payload;
  } else if (action.type === 'save') {
    _state.count = Number(action.payload);
    // _state.value = action.payload;
    _state.valueNaN = _state.value;
  }

  return _state;
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleIncreaseCount = () => {
    dispatch({ type: 'increment', payload: '0' });
  };

  const handleDecreaseCount = () => {
    dispatch({ type: 'decrement', payload: '0' });
  };

  const handleResetButton = (num: number) => {
    // dispatch({ type: 'reset'});
    switch (num) {
      case 0:
        dispatch({ type: 'reset', payload: '0' });
        break;

      case 100:
        dispatch({ type: 'reset', payload: '100' });
        break;

      case -100:
        dispatch({ type: 'reset', payload: '-100' });
        break;
    }
  };

  const handleSaveButton = () => {
    // dispatch({ type: 'save', payload: Number(e.target.value) });
    dispatch({ type: 'save', payload: state.value });
    state.booleanWert = true;
    state.emptyInput = '';
    // console.log(typeof state.value);
    // console.log(state.value);

    // state.value === NaN ? <p>{state.value} is not a number!</p> : '';

    // Number.isNaN(state.value) ? <p>{state.value} is not a number!</p> : '';

    // isNaN(Number(state.value)) ? <p>{state.value} is not a number!</p> : '';
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // console.log(e.target.value);
    // value = e.target.value;
    state.emptyInput = e.target.value;
    dispatch({ type: 'input', payload: state.emptyInput });
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
          value={state.emptyInput}
          className="input"
          type="text"
          autoFocus
          placeholder="Enter a number here!"
          onChange={(e) => handleInputChange(e)}
        />
        <button className="btnSave" onClick={() => handleSaveButton()}>
          Save
        </button>
      </div>
      <div className="isNotANumber">
        {state.booleanWert &&
          (isNaN(Number(state.value)) ? (
            <p>
              <span>"{state.valueNaN}"</span> is Not a Number!
            </p>
          ) : (
            ''
          ))}
        {(state.booleanWert = false)}
      </div>
    </div>
  );
}

export default App;
