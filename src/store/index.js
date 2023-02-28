import { configureStore } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
// import { combineReducers } from 'redux';
import { useDispatch, useSelector } from 'react-redux';

// method using createslice from redux toolkit
const counterSlice = createSlice({
  name: "counter",
  initialState: { count: 0, showCounter: true },
  reducers: {
    increment(state) { state.count++; },
    decrement(state) { state.count--; },
    increase(state, action) { state.count = state.count + action.payload; },
    decrease(state, action) { state.count = state.count - action.payload; },
    toggle(state) { state.showCounter = !state.showCounter }
  }
})

const authSlice = createSlice({
  name: "authentication",
  initialState: { isAuthenticated: false },
  reducers: {
    login(state) { state.isAuthenticated = true },
    logout(state) { state.isAuthenticated = false }
  }
})

// method when redux toolkit isnt used
// const counterReducer = (state = { count: 0, showCounter: true }, action) => {
//   switch (action.type) {
//     case 'INCREMENT':
//       return { ...state, count: state.count + 1 };
//     case 'DECREMENT':
//       return { ...state, count: state.count - 1 };
//     case 'INCREASE':
//       return { ...state, count: state.count + action.payload };
//     case 'DECREASE':
//       return { ...state, count: state.count - action.payload };
//     case 'TOGGLE':
//       return { ...state, showCounter: action.showCounter };
//     default:
//       return state;
//   }
// };

// const rootReducer = combineReducers({
//   counter: counterReducer,
// });

// Create the store
const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    auth: authSlice.reducer
  }
});

// Export the store and dispatch/useSelector hooks
export default store;
export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;
export const useAppDispatch = () => useDispatch();
export const useAppSelector = useSelector;