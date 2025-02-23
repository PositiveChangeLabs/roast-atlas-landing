'use client';
import Image from 'next/image';
import styles from './page.module.css';

export default function Home() {
  const handleLikeClick = async () => {
    try {
      const response = await fetch('/api/like', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ liked: true }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      console.log('Subscription successful:', data);
    } catch (error) {
      console.error(
        'There was a problem with the subscription request:',
        error
      );
    }
  };

  const handleSubscribeClick = async () => {
    const emailInput = document.getElementById(
      'email-input'
    ) as HTMLInputElement;
    const email = emailInput.value;

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      console.log('Subscription successful:', data);
      emailInput.value = '';
    } catch (error) {
      console.error(
        'There was a problem with the subscription request:',
        error
      );
    }
  };

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <span className={styles.headerText}>Roast Atlas</span>

        <h4>Are you passionate about great coffee?</h4>
        <span className={styles.text}>
          Something big is brewing! A platform designed to make discovering and
          enjoying specialty coffee easier than ever. Whether you&apos;re a
          coffee enthusiast or a business in the industry, we&apos;re creating a
          seamless way to connect, explore, and experience the best coffee
          offerings.
        </span>
        <span className={styles.text}>
          We guarantee a groundbreaking way for coffee enthusiasts and
          businesses to connect like never before. Stay ahead of the curve and
          be the first to know when we launch.
        </span>
        <span className={styles.text}>
          Be the first to join a coffee revolution!
        </span>
        <span className={styles.text}> Love the idea? Sign up now!</span>

        <div className={styles.likeContainer}>
          <div className={styles.likeArrowContainer}>
            <Image
              style={{ position: 'relative', left: '13px', top: '-3px' }}
              src="/arrow.png"
              alt="arrow"
              width={50}
              height={20}
            ></Image>
            <span
              style={{
                width: '60px',
                fontSize: '12px',
                transform: 'rotate(-20deg)',
                position: 'relative',
                left: '-15px',
              }}
            >
              Hit if you like the idea
            </span>
          </div>
          <button
            onClick={() => handleLikeClick()}
            id="like"
            className={styles.like}
          ></button>
        </div>

        <form
          className={styles.ctas}
          onSubmit={(e) => {
            e.preventDefault();
            handleSubscribeClick();
          }}
        >
          <input
            type="email"
            className={`${styles.email} ${styles.inputField}`}
            placeholder="E-mail"
            id="email-input"
            required
          />
          <button type="submit" className={styles.primary}>
            Sign Up
          </button>
        </form>
      </main>
    </div>
  );
}
