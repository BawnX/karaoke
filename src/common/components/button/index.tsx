import { ReactNode } from "react"

interface ButtonProps {
    children: ReactNode,
}

export function Button({ children }: ButtonProps) {
    return (
        <button style={{ borderRadius: '20px', padding: '0.5rem' }}>
            {children}
        </button>
    )
}