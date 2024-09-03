'use client'
import React, { useState, ReactNode, useMemo, useEffect } from 'react';
import { ThemeContext } from '../const/theme';
import Cookies from 'js-cookie';

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [theme, setTheme] = useState<string>('light'); // Default theme
    const [mounted, setMounted] = useState(false)

    const changeTheme = (newTheme: string) => {
        setTheme(newTheme);
        document.documentElement.setAttribute('data-theme', newTheme);
        Cookies.set('theme', newTheme)
    };

    useEffect(() => {
        const theme = Cookies.get('theme');
        if (theme) {
            changeTheme(theme)
        }
    }, []);

    const value = useMemo(() => ({
        theme, setTheme: changeTheme
    }), [theme]);

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return null
    }

    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    );
};
