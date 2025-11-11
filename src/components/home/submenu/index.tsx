import Link from 'next/link';
import styles from './styles.module.scss';

import { X, Menu } from "lucide-react"

export function Submenu() {
    return (
        <section className={styles.submenu}>
            <div className={styles.submenuIcon}>
                <Menu size={34} color="#121212" />
                Menu
            </div>


            <ul className={styles.ul}>
                <li>
                    <Link href="#">Carros</Link>
                </li>
                <li>
                    <Link href="#">Motos</Link>
                </li>
                <li>
                    <Link href="#">Caminhões</Link>
                </li>
            </ul>
        </section>
    );
}