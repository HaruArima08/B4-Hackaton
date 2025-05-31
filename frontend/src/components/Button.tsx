import styles from './Button.module.css';

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    children: React.ReactNode;
    variant: 'green' | 'red';
};

export const Button = ({ children, variant, className = '', ...props }: Props) => {
    return (
        <button
            className={`${styles.button} ${variant === 'green' ? styles.green : styles.red} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
};

