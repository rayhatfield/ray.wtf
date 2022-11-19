import styles from './layout.module.css';

export default function DonutLayout({ children }) {
    return (
        <div className={styles.container}>{children}</div>
    )
}
