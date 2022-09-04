import { createContext, ReactNode, useContext, useReducer } from "react";

type GlobalContextProviderProps = {
  //type for child elements
  children: ReactNode;
  initialState: object;
  reducer: void;
};

//Context created
const GlobalContext = createContext({});

//Custom hook to use created context to access global state values
export function useGlobalState() {
  return useContext(GlobalContext);
}

//Provider to wrap around parent, so that global state can be accessed anywhere inside its children
export function GlobalProvider(props: GlobalContextProviderProps) {
  const { children, initialState, reducer } = props;

  return (
    <GlobalContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </GlobalContext.Provider>
  );
}
