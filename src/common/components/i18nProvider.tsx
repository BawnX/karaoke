'use client'

import { ReactNode, useCallback, useEffect, useMemo, useState } from "react";
import { defaultLocale, I18nContext, supportedLocales } from "../const/i18n";
import Cookies from 'js-cookie';
import { translations } from "../const/translation";

export const I18nProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [locale, setLocale] = useState<string>(defaultLocale);

    useEffect(() => {
        const cookieLocale = Cookies.get('locale');
        if (cookieLocale && supportedLocales.includes(cookieLocale)) {
            setLocale(cookieLocale);
        }
    }, []);

    const changeLocale = (newLocale: string) => {
        if (supportedLocales.includes(newLocale)) {
            setLocale(newLocale);
            Cookies.set('locale', newLocale);
        } else {
            console.warn(`Locale ${newLocale} is not supported`);
        }
    };

    const t = useCallback((key: string): Record<string, string> => {
        return translations[locale][key] || key;
    }, [locale])

    const value = useMemo(() => ({
        locale,
        setLocale: changeLocale,
        t
    }), [locale, t]);

    return (
        <I18nContext.Provider value={value}>
            {children}
        </I18nContext.Provider>
    );
};