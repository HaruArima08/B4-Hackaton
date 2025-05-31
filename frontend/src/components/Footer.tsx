// components/Footer.tsx
import React from 'react';
import styles from './Footer.module.css';

const Footer: React.FC = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.links}>
                <a href="#">宮崎大学</a>
                <a href="#">Katlab</a>
            </div>
        </footer>
    );
};

export default Footer;
