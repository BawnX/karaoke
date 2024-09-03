import { useContext } from "react";
import { ThemeContextType } from "../interface/theme";
import { ThemeContext } from "../const/theme";

export const useTheme = (): ThemeContextType => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};