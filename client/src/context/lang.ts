import { createContext } from "react";

export type TLang = "fr" | "en" | "ar" | "devfault";
export interface ILangContext {
  lang: TLang;
  setLang: (val: TLang | ((prevState: TLang) => TLang)) => void;
}

export const LangContext = createContext<ILangContext>({
  lang: "devfault",
  setLang: () => {},
});
