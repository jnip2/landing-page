import MembershipCard from '../MembershipCard'
import styles from './MembershipContainer.module.css'

export default function MembershipContainer() {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.content}>
                    <h1 className={styles.headerText}>Membership Options</h1>
                    <p className={styles.text}>We've got a plan for everyone!</p>
                    <div className={styles.cardsContainer}>
                        <MembershipCard price='0' header='Essentials' type='primary' desc={['Create posts', 'Connect with others']} />
                        <MembershipCard price='2.99' header='Webby Plus' type='secondary' desc={['Join communities', 'Promote posts']} />
                        <MembershipCard price='10.99' header='Webby Gold' type='tertiary' desc={['Create communities', 'Schedule events']} />
                    </div>
                </div>
            </div>
        </>
    )
}