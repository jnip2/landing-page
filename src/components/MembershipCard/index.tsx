import styles from './MembershipCard.module.css'
import Spline from '@splinetool/react-spline';

export default function MembershipCard({
    header = 'header',
    desc = ['feature1', 'feature2', 'feature3'],
    price = '12.99',
    type = 'primary'
}) {

    return (
        <>
            <div className={type === 'primary' ? `${styles.container} ${styles.primaryContainer}` : type === 'secondary' ? `${styles.container} ${styles.secondaryContainer}` : `${styles.container} ${styles.tertiaryContainer}`}>
                <h1 className={styles.header}>{header}</h1>
                <div className={styles.splineContainer}>
                    {type && type === 'primary'
                        ? <Spline scene="https://prod.spline.design/DaJ11zffp6uV9kfK/scene.splinecode" />
                        : type === 'secondary'
                            ? <Spline scene="https://prod.spline.design/qielQ-vgpDRD-v3Z/scene.splinecode" />
                            : <Spline scene="https://prod.spline.design/0NYN6JkPUz0eW7k7/scene.splinecode" />

                    }
                </div>
                <ul>
                    {
                        desc && desc.map((i, index) => {
                            return (
                                <li key={index} className={styles.feature}>{i}</li>
                            )
                        })
                    }
                </ul>
                <p className={styles.price}>${price}<span className={styles.perMonth}>/month</span></p>
                <button
                    className={type === 'primary' ? `${styles.button} ${styles.primary}`
                        : type == 'secondary' ? `${styles.button} ${styles.secondary}`
                            : `${styles.button} ${styles.tertiary}`}>Sign up now!</button>
            </div>
        </>
    )
}