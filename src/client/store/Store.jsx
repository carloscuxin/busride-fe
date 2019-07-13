import React, { useReducer } from "react"
import Context from './Context';
import { combineReducers } from 'redux';
// Own components
import * as reducers from './reducers';


export const rootReducer = combineReducers({
  vehicle: reducers.vehicle,
  company: reducers.company,
  locale: reducers.locale
});

const Store= (props) => {
  const initialState = rootReducer(props.initialValue, { type: '__INIT__' });
  const [state, dispatch] = useReducer(rootReducer, initialState);
  
  return (
    <Context.Provider value={[state, dispatch]}>
      {props.children}
    </Context.Provider>
  )
};

export default Store;


