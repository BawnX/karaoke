import Card from "@/common/components/card";
import styles from "./main.module.css";
import { ReactNode } from "react";

interface MainContentProps {
    children: ReactNode
}

export default function MainContent({ children }: Readonly<MainContentProps>) {
    return (
        <main className={styles.main}>
            <Card color="background-300" radius="20px 0px 0px 20px">
                <article className={styles.content}>
                    {children}
                </article>
            </Card>
        </main>
    )
}