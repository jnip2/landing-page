import styles from './Testimonial.module.css'

export default function Testimonial<ITestimonial>(props: { testimonial: string, username: string, hobby: string }) {
    return (
        <>
            <div className={styles.container}>
                <p className={styles.headerText}>{props.testimonial}</p>
                <p className={styles.userText}>– {props.username}, {props.hobby}</p>
            </div>
        </>
    )
}