import styles from './layout.module.css';

export default function DonutLayout({ children }: {
    children: React.ReactNode
}) {
    return (
        <div className={styles.container}>{children}</div>
    )
}
