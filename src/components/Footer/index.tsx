import styles from './Footer.module.css'
import Link from 'next/link'

export default function Footer() {
    return (
        <>
            <footer className={styles.container}>
                <span className={styles.span}>&copy; Joey Nip</span>
                <span className={styles.span}><Link href='https://github.com/jnip2/mdia-3109-final-project' target='_blank'> GitHub Repo</Link></span>
            </footer>
        </>
    )
}