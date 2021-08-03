// set data layer

// we need this to track the basket
import React, { createContext, useContext, useReducer } from "react";

// THIS IS DATA LAYER
export const StateContext = createContext();

// Build  A PEOVIDER
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);
// This is how we use it inside of  a component
export const useStatevlaue = () => useContext(StateContext);
