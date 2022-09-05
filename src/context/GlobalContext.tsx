import { createContext, useContext, useReducer, ReactNode } from "react";

type GlobalContextProviderProps = {
  //type for child elements
  children: ReactNode;
};

//Context created
export const GlobalContext = createContext({});

//Custom hook to call context values
export function useGlobalContext() {
  return useContext(GlobalContext);
}

//Provider to wrap around parent, so that global state can be accessed anywhere inside its children
//State Manipulation functions are also here
export default function GlobalProvider({
  children,
  reducer,
  initialState,
}: GlobalContextProviderProps) {
  return (
    <GlobalContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </GlobalContext.Provider>
  );
}
