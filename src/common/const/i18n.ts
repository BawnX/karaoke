import { createContext } from "react";
import { I18nContextType } from '@/common/interface/i18n'

export const supportedLocales = ['en', 'es'];
export const defaultLocale = 'es';
export const I18nContext = createContext<I18nContextType | undefined>(undefined);