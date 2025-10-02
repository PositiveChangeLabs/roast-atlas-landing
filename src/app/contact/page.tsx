import React from 'react';
import styles from './Contact.module.css'; // <-- create a Page.module.css similar to PrivacyPolicy.module.css

const BANNER_IMAGE_URL = "/coffee-hero.jpg";

export default function Page() {
    return (
        <div className={styles.container}>
            {/* Coffee-Themed Banner Section */}
            <div
                className={styles.banner}
                style={{
                    backgroundImage: `url(${BANNER_IMAGE_URL})`,
                }}
            >
                <div className={styles.bannerOverlay}></div>
                <div className={styles.bannerContent}>
                    <h1 className={styles.bannerTitle}>Contact Us</h1>
                    <p className={styles.bannerSubtitle}>
                        We’d love to hear from you
                    </p>
                </div>
            </div>

            {/* Page Content Section */}
            <div className={styles.contentArea}>
                <div className={styles.contactCard}>
                    {/* Intro */}
                    <p className={styles.introText}>
                        We welcome your questions, feedback, and partnership inquiries.
                        Please use the contact information below to reach out to our team.
                    </p>

                    {/* Email */}
                    <div className={styles.contactSection}>
                        <h2 className={styles.sectionTitle}>Email</h2>
                        <p>
                            <a
                                href="mailto:team.roast.atlas@gmail.com"
                                style={{ color: '#3e2723', textDecoration: 'underline' }}
                            >
                                team@roast-atlas.com
                            </a>
                        </p>
                    </div>
                    <br/><br/>

                    {/* Partnerships */}
                    <div className={styles.contactSection}>
                        <h2 className={styles.sectionTitle}>Partnerships</h2>
                        <p>
                            Are you a coffee roaster, cafe serving specialty coffee, or a specialty brand? We are open to meaningful collaborations.
                            Please email us at <a href="mailto:team.roast.atlas@gmail.com">team.roast.atlas@gmail.com</a> with the subject line <strong>“Partnership”</strong> and we will respond promptly.
                        </p>
                    </div>
                </div>
            </div>
s


            {/* Footer space for visual separation */}
            <div style={{ height: '2.5rem' }}></div>
        </div>
    );
}
