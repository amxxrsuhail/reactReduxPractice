import { configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';

import authReducer  from './authSlice';
import countReducer from './counterSlice'
// import { combineReducers } from 'redux';


// Create the store
const store = configureStore({
  reducer: {
    counter: countReducer,
    auth: authReducer
  }
});

// Export the store and dispatch/useSelector hooks
export default store;
export const useAppDispatch = () => useDispatch();
export const useAppSelector = useSelector;












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