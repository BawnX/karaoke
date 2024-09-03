import { createContext } from "react";
import { ThemeContextType } from "../interface/theme";

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);
