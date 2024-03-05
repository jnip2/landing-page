import Testimonial from '../Testimonial'
import styles from './TestimonialContainer.module.css'
import Spline from '@splinetool/react-spline';

export default function TestimonialContainer() {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.content}>
                    <h1 className={styles.headerText}>All-in-one skills showcase and networking!</h1>
                    <div className={styles.testimonialContainer}>
                        <div className={styles.splineContainer}>
                            <Spline scene="https://prod.spline.design/vnNmk2wQJxgoN-0T/scene.splinecode" />
                        </div>
                        <Testimonial testimonial='What a great platform to find others who also crochet!' username='Julia' hobby='Crochet' />
                        <Testimonial testimonial='Super easy to use and network!' username='James' hobby='Woodworking' />
                    </div>
                </div>
            </div >
        </>
    )
}