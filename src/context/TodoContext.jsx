import React, { createContext, useReducer } from 'react'
import reducer, { initialState } from '../reducer/Reducer'

// Todo Context Provider

export let todoContext = createContext({});

export default function Provider({ children }) {

  const [state, dispatch] = useReducer(reducer, initialState);

  const values = {
    state,
    dispatch
  };

  return (
    <>
      <todoContext.Provider value={values}>{children}</todoContext.Provider>
    </>
  );

}