// components/Footer.tsx
import React from 'react';
import styles from './Footer.module.css';

const Footer: React.FC = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.links}>
                <a href="https://www.miyazaki-u.ac.jp/">宮崎大学</a>
                <a href="https://earth.cs.miyazaki-u.ac.jp/index.php">Katlab</a>
            </div>
        </footer>
    );
};

export default Footer;
