const redux = require ('redux');

const initialState = {
  counter: 0
};

// constants
const INCREASE_COUNTER = 'INCREASE_COUNTER';
const ADD_COUNTER = 'ADD_COUNTER';

// Reducer
const rootReducer = (state = initialState, action) => {
  switch(action.type) {
    case INCREASE_COUNTER:
      return {
        ...state,
        counter: state.counter + 1,
      };
    case ADD_COUNTER:
      return {
        ...state,
        counter: state.counter + action.value,
      };
    default:
      return state
  }
};

// Store
const store = redux.createStore(rootReducer);
console.log(store.getState());

// Subscription
store.subscribe(() => {
  console.log('[Subscription]', store.getState());
});

// Action
store.dispatch({ type: INCREASE_COUNTER });
console.log(store.getState());
store.dispatch({ type: ADD_COUNTER, value: 5 });
console.log(store.getState());