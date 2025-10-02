import React from 'react';
import styles from './PrivacyPolicy.module.css'; // <-- Importing CSS Module

// NOTE: In a real Next.js application, you would host this image locally
// or use the Next.js Image component for optimization. We use a placeholder here.
const BANNER_IMAGE_URL = "/coffee-hero.jpg";

const policySections = [
    {
        title: "1. Information We Collect",
        content: (
            <ul className="list-disc list-inside space-y-2">
                <li>
                    <strong>Account Data:</strong> Your name, email address, password (hashed), and optional profile picture. We use this to secure your account and personalize your experience.
                </li>
                <li>
                    <strong>Location Data:</strong> We request access to your device&apos; precise location (GPS) to show you nearby specialty coffee shops and to personalize your discovery feed. You can disable this at any time in your device settings.
                </li>
                <li>
                    <strong>User Content:</strong> This includes ratings, written reviews, photos of coffee shops, and any other data you voluntarily submit to the platform. This content is public and visible to all other users.
                </li>
                <li>
                    <strong>Usage Data:</strong> Information on how you access and use the app, such as pages viewed, time spent, search queries, and crash reports. We use this to optimize performance and improve the app&apos; features.
                </li>
            </ul>
        ),
    },
    {
        title: "2. How We Use Your Information",
        content: (
            <ul className="list-disc list-inside space-y-2">
                <li>
                    <strong>Service Provision:</strong> To display relevant coffee shops based on your current location and preferences.
                </li>
                <li>
                    <strong>Personalization:</strong> To suggest roasts, cafes, and features tailored to your usage patterns and saved data.
                </li>
                <li>
                    <strong>Communication:</strong> To send you service updates, security alerts, and promotional messages (if you opt-in).
                </li>
                <li>
                    <strong>Security & Compliance:</strong> To monitor for fraudulent activity, enforce our Terms of Service, and comply with legal obligations.
                </li>
            </ul>
        ),
    },
    {
        title: "3. Sharing Your Information",
        content: (
            <ul className="list-disc list-inside space-y-2">
                <li>
                    <strong>Public Content:</strong> Your username, reviews, photos, and ratings are <strong>public</strong> and shared with the community within the app and potentially on external search engines.
                </li>
                <li>
                    <strong>Service Providers:</strong> We share necessary data with third-party vendors who perform services for us (e.g., hosting, analytics, database management). These vendors are required to protect your information.
                </li>
                <li>
                    <strong>Business Transfers:</strong> If &quot;Roast Atlas&quot; is involved in a merger, acquisition, or asset sale, your data may be transferred as a business asset.
                </li>
                <li>
                    <strong>Legal Requirements:</strong> If required by law or subpoena to protect the rights, property, or safety of &quot;Roast Atlas&quot; our users, or the public.
                </li>
            </ul>
        ),
    },
    {
        title: "4. Data Security and Retention",
        content: (
            <>
                <p>
                    We use commercially acceptable means to protect your Personal Data, but no method of transmission over the Internet or electronic storage is 100% secure. While we strive to use high-level security measures, we cannot guarantee its absolute security.
                </p>
                <p>
                    We retain your Personal Data only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law.
                </p>
            </>
        ),
    },
    {
        title: "5. Your Data Rights",
        content: (
            <p>
                Depending on your location, you may have the right to access, update, or request deletion of the personal data we hold about you. You can typically manage and delete your user-generated content (reviews, photos) directly within the app. For all other requests, please contact us using the details below.
            </p>
        ),
    },
    {
        title: "6. Contact Us",
        content: (
            <ul className="list-disc list-inside space-y-2">
                <li>
                    <strong>Email:</strong> team.roast.atlas@gmail.com
                </li>
            </ul>
        ),
    },
];


export default function PrivacyPolicy() {
    return (
        <div className={styles.container}>
            {/* Coffee-Themed Banner Section */}
            <div
                className={styles.banner}
                style={{
                    backgroundImage: `url(${BANNER_IMAGE_URL})`,
                }}
            >
                {/* Dark Overlay for text legibility */}
                <div className={styles.bannerOverlay}></div>
                <div className={styles.bannerContent}>
                    <h1 className={styles.bannerTitle}>
                        Privacy Policy
                    </h1>
                    <p className={styles.bannerSubtitle}>
                        Roast Atlas – Discover the Art of Specialty Coffee
                    </p>
                </div>
            </div>

            {/* Policy Content Section */}
            <div className={styles.contentArea}>
                <div className={styles.policyCard}>
                    <p className={styles.lastUpdated}>
                        <strong>Last updated: October 2, 2025</strong>
                    </p>

                    <p className={styles.introText}>
                        Welcome to <strong>Roast Atlas</strong>! We value your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile application and services (collectively, the &quot;Service&quot;).
                    </p>

                    {policySections.map((section, index) => (
                        <div key={index} className={styles.policySection}>
                            <h2 className={styles.sectionTitle}>{section.title}</h2>
                            <div className={styles.sectionContent}>
                                {section.content}
                            </div>
                        </div>
                    ))}

                </div>
            </div>

            {/* Footer space for visual separation */}
            <div style={{ height: '2.5rem' }}></div>
        </div>
    );
}
