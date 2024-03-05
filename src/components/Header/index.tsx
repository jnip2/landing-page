import styles from './Header.module.css'
import Image from 'next/image'
import Spline from '@splinetool/react-spline'

export default function Header() {
    return (
        <>
            <header className={styles.container}>
                {/* <Image src='/logo-163.png' height={163} width={166} alt='logo' /> */}
                <div>
                    <Spline scene="https://prod.spline.design/2LcsCvB74GG-aPnH/scene.splinecode" />
                </div>
                <h1 className={styles.headerText}>webby</h1>
                <p className={styles.sloganText}>Share, Engage, Thrive!</p>
                <button className={styles.button}>Sign up today!</button>
            </header>
        </>
    )
}