import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { useDispatch, useSelector } from 'react-redux';

// Define your reducers
const counterReducer = (state = { count: 0, showCounter: true }, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, count: state.count + 1 };
    case 'DECREMENT':
      return { ...state, count: state.count - 1 };
    case 'INCREASE':
      return { ...state, count: state.count + action.payload };
    case 'DECREASE':
      return { ...state, count: state.count - action.payload };
    case 'TOGGLE':
      return { ...state, showCounter: action.showCounter };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  counter: counterReducer,
});

// Create the store
const store = configureStore({
  reducer: rootReducer,
});

// Export the store and dispatch/useSelector hooks
export default store;
export const useAppDispatch = () => useDispatch();
export const useAppSelector = useSelector;