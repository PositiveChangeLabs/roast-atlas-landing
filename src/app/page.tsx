'use client';
import Image from 'next/image';
import styles from './page.module.css';
import { useRef, useState } from "react";

export default function Home() {
  const dialogRef = useRef<HTMLDialogElement | null>(null);
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
      
      emailInput.value = '';
      setTimeout(() => {
        if (dialogRef.current) {
          console.log('Opening dialog...');
          dialogRef.current.showModal();
        }
      }, 100);
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
            className={`${styles.email} ${styles.inputFields}`}
            placeholder="E-mail"
            id="email-input"
            required
          />
          <button type="submit" className={styles.primary}>
            Sign Up
          </button>
        </form>
        <p>
          <center>
            ☕ Love discovering new specialty coffee?
            Tell us what you enjoy, and we’ll help make coffee exploration even better!
          </center>
        </p>
        <p>
          🚀 It only takes <strong>4 minutes</strong>.
          <a href="https://form.typeform.com/to/d8NKOojG" target="_blank" rel="noopener noreferrer">
            👉 Click here to share your thoughts!
          </a>
        </p>
        <dialog ref={dialogRef}>
          <p className="text-lg font-semibold">🎉 You have successfully subscribed!</p>
          <button
              onClick={() => dialogRef.current?.close()}
              className="mt-4 bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 transition"
          >
            Close
          </button>
        </dialog>
      </main>
    </div>
  );
}
