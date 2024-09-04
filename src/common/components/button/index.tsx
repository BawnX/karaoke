import { CSSProperties, ReactNode } from "react"
import styles from './button.module.css'

interface ButtonProps {
    children: ReactNode,
    color: string,
    hover: string,
}

interface CustomCSSProperties extends CSSProperties {
    '--color'?: string;
    '--hover'?: string;
}

export function Button({ children, color, hover }: Readonly<ButtonProps>) {
    const customCss: CustomCSSProperties = {
        '--color': `var(--${color})`,
        '--hover': `var(--${hover})`
    }

    return (
        <button className={styles.button} style={customCss}>
            {children}
        </button>
    )
}