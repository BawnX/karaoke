export interface I18nContextType {
    locale: string;
    setLocale: (locale: string) => void;
    t: (key: string) => Record<string, string>;
}