import { createContext, ReactNode } from "react";

import { GlobalState } from "./GlobalState";

type GlobalContextProviderProps = {
  //type for child elements
  children: ReactNode;
};

//Context created
export const GlobalContext = createContext(GlobalState);

//Provider to wrap around parent, so that global state can be accessed anywhere inside its children
export function GlobalProvider({ children }: GlobalContextProviderProps) {
  return (
    <GlobalContext.Provider value={GlobalState}>
      {children}
    </GlobalContext.Provider>
  );
}
