const redux = require("redux");

// creating our 'reducer' that handles our counter/state change
const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type === "increment") {
    return {
      counter: state.counter + 1,
    };
  }

  if (action.type === "decrement") {
    return {
      counter: state.counter - 1,
    };
  }

  return state;
};

// creates our redux 'store'
const store = redux.createStore(counterReducer);

// creates our 'useEffect' which does stuff whenever there is a change
const counterSubscriber = () => {
  const latestState = store.getState();
  console.log(latestState);
};

// actually calls the 'useEffect' to do the code whenever change is made
store.subscribe(counterSubscriber);

// actions that are changing our state
store.dispatch({ type: "increment" });
store.dispatch({ type: "decrement" });
