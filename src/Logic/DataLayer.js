import React from "react";
import { createContext, useContext, useReducer } from "react";

// Preparing the datalayer
export const DataLayerContext = createContext();

// The children is what is wrapped inside (APP)
export const DataLayer = ({ initialState, reducer, children}) => (
    <DataLayerContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </DataLayerContext.Provider>
);

export const useDataLayerValue = () => useContext(DataLayerContext);