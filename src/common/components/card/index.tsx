import { CSSProperties, ReactNode } from "react"
import styles from './card.module.css'

interface CardProps {
    children: ReactNode,
    color: string,
    isRounded?: boolean
}

interface CustomCSSProperties extends CSSProperties {
    '--card'?: string;
}

export default function Card({ children, color, isRounded }: Readonly<CardProps>) {
    const style: CustomCSSProperties = {
        '--card': `var(${color})`,
        borderRadius: isRounded ? '20px' : '0px'
    }

    return (
        <section className={styles.card} style={style}>
            {children}
        </section >
    )
}