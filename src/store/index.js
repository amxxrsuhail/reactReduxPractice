import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { useDispatch, useSelector } from 'react-redux';

// Define your reducers
const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
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