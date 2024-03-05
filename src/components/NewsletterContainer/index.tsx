import styles from './NewsletterContainer.module.css'
import Image from 'next/image'

import { useState } from 'react'

export default function NewsletterContainer() {
    const [showThanks, setShowThanks] = useState<boolean>(false)

    return (
        <>
            <div className={styles.container}>
                <div className={styles.content}>
                    <h1 className={styles.headerText}>Subscribe to our newsletter</h1>
                    {showThanks
                        ? <>
                            <div className={styles.formContainer}>
                                <p className={styles.thanksText}>✅ Thanks for subscribing! Just kidding this isn't a real service!</p>
                            </div>
                        </>
                        :
                        <>
                            <form className={styles.formContainer}>
                                <div className={styles.emailContainer}>
                                    <input className={styles.emailInput} type='text' placeholder='Enter your email...' />
                                    <button className={styles.button} type='button' onClick={() => setShowThanks(true)}>Register Newsletter</button>
                                </div>
                                <div className={styles.agreementContainer}>
                                    <input type="checkbox" />
                                    <label className={styles.agreement}>I agree to receive newsletter emails from Webby about xyz xyz xyz and receive newsletter emails from Webby about xyz xyz xyz</label>
                                </div>
                            </form>
                        </>}
                </div>
            </div>
        </>
    )
}