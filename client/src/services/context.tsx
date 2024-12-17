import type { ReactNode } from "react";
import { useState, createContext } from "react";

interface ContextProps {
    navStyle: string;
    setNavStyle: React.Dispatch<React.SetStateAction<string>>;
}

const Context = createContext<ContextProps | undefined>(undefined);

interface ProviderProps {
    children: ReactNode;
}

export const Provider = ({ children }: ProviderProps) => {
  const [navStyle, setNavStyle] = useState("navbar");

  return (
    <Context.Provider
      value={{
        navStyle,
        setNavStyle,
      }}
    >
      {children}
    </Context.Provider>
  );
}
export default Context;
   