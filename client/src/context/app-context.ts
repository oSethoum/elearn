import { User } from "@/graphql";
import { createContext, useContext } from "react";

export type ILanguage = "en" | "fr" | "ar";

export interface IAppContext {
  user: User | null;
  setUser: (user: User | null) => void;
  language: ILanguage;
  setLanguage: (language: ILanguage) => void;
  header: string;
  setHeader: (header: string) => void;
  featuresRef: React.MutableRefObject<HTMLElement> | null;
  scrollToFeatures: () => void;
  departmentsRef: React.MutableRefObject<HTMLElement> | null;
  scrollToDepartments: () => void;
}

const AppContext = createContext<IAppContext>({
  user: null,
  setUser: () => {},
  language: "en",
  setLanguage: () => {},
  header: "",
  setHeader: () => {},
  featuresRef: null,
  departmentsRef: null,
  scrollToFeatures: () => {},
  scrollToDepartments: () => {},
});

export const AppContextProvider = AppContext.Provider;
export const useAppContext = () => useContext(AppContext);
