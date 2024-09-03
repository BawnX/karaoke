import Icon from "@/common/components/icon";
import styles from './navbar.module.css';
import { Button } from "@/common/components/button";

export function Navbar() {
    return (
        <nav>
            <section className={styles.navRow}>
                <header style={{ display: 'flex', placeItems: 'center', marginLeft: "1rem" }}>
                    <Icon height={64} width={54} />
                    <strong style={{ fontSize: '2.369rem', marginLeft: '0.5rem' }}>Allian</strong>
                </header>
                <main>
                    <Button>1</Button>
                    <button>2</button>
                    <button>3</button>
                </main>
                <footer>
                    <p>footer</p>
                </footer>
            </section>
        </nav >
    )
}