import React from 'react';
import styles from './HeaderButton.module.css';

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    children: React.ReactNode;
    variant?: 'green' | 'red';
};

export const HeaderButton = ({
    children,
    variant = 'green',
    className = '',
    ...props
}: Props) => {
    return (
        <button
            className={`
        ${styles.button} 
        ${variant === 'green' ? styles.green : styles.red} 
        ${className}
      `}
            {...props}
        >
            {children}
        </button>
    );
};
