import { CSSProperties, ReactNode } from "react"
import styles from './card.module.css'

interface CardProps {
    children: ReactNode,
    color: string,
    radius?: string,
    className?: string
}

interface CustomCSSProperties extends CSSProperties {
    '--card'?: string;
}

export default function Card({ children, color, radius, className }: Readonly<CardProps>) {
    const style: CustomCSSProperties = {
        '--card': `var(--${color})`,
        borderRadius: radius ?? '0px'
    }

    return (
        <section className={styles.card.concat(" " + className)} style={style}>
            {children}
        </section >
    )
}