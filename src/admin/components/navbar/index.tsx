import Icon from "@/common/components/icon";
import styles from './navbar.module.css';
import { Button } from "@/common/components/button";
import HomeIcon from "@/common/icons/home";

export function Navbar() {
    return (
        <nav>
            <section className={styles.navRow}>
                <header>
                    <Icon height={64} width={54} />
                    <strong className={styles.logoText}>Allian</strong>
                </header>
                <main>
                    <Button color="background-200" hover="background-300">
                        <div className={styles.buttonContent}><HomeIcon /><strong>Inicio</strong></div>
                    </Button>
                </main>
                <footer>
                    <p>footer</p>
                </footer>
            </section>
        </nav >
    )
}