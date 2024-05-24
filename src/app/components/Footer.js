"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import styles from './Footer.module.css';

const Footer = () => {
    const [isMettaOpen, setIsMettaOpen] = useState(false);
    const [isQuickLinksOpen, setIsQuickLinksOpen] = useState(false);
    const [isFollowUsOpen, setIsFollowUsOpen] = useState(false);

    const toggleMetta = () => {
        setIsMettaOpen(!isMettaOpen);
        console.log('Metta toggle', isMettaOpen);
    };
    const toggleQuickLinks = () => {
        setIsQuickLinksOpen(!isQuickLinksOpen);
        console.log('QuickLinks toggle', isQuickLinksOpen);
    };
    const toggleFollowUs = () => {
        setIsFollowUsOpen(!isFollowUsOpen);
        console.log('FollowUs toggle', isFollowUsOpen);
    };

    return (
        <footer className={styles.footer}>
            <div className={styles.footerContent}>
                <div className={styles.topSection}>
                    <div className={styles.newsletter}>
                        <h2>BE THE FIRST TO KNOW</h2>
                        <p>Sign up for updates from mettà muse.</p>
                        <form action="#">
                            <input type="email" placeholder="Enter your email..." />
                            <button type="submit">SUBSCRIBE</button>
                        </form>
                    </div>
                    <div className={styles.contact}>
                        <h2>CONTACT US</h2>
                        <p>+44 221 133 5960</p>
                        <p><a href="mailto:customercare@mettamuse.com">customercare@mettamuse.com</a></p>
                        <h2 className={styles.currency}>CURRENCY</h2>
                        <div className={styles.flag}>
                            <Image src="/flag.png" alt="Flag" width={20} height={20} />
                            <p>• USD</p>
                        </div>
                        <p>Transactions will be completed in Euros and the currency reference is available on hover.</p>
                    </div>
                </div>

                <hr className={styles.horizontalLine} />

                <div className={styles.bottomSection}>
                    <div className={styles.metta}>
                        <h2 className={styles.secondHeading}>metta muse</h2>
                        <button onClick={toggleMetta} className={`${styles.dropdownButton} ${isMettaOpen ? styles.active : ''}`}>
                            <h2>metta muse <span className={styles.arrow}>{isMettaOpen ? '▲' : '▼'}</span></h2>
                        </button>
                        <ul className={`${styles.dropdownContent} ${isMettaOpen ? styles.show : ''}`}>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Stories</a></li>
                            <li><a href="#">Artisans</a></li>
                            <li><a href="#">Boutiques</a></li>
                            <li><a href="#">Contact Us</a></li>
                            <li><a href="#">EU Compliances Docs</a></li>
                        </ul>
                    </div>
                    <div className={styles.quickLinks}>
                        <h2 className={styles.secondHeading}>QUICK LINKS</h2>
                        <button onClick={toggleQuickLinks} className={`${styles.dropdownButton} ${isQuickLinksOpen ? styles.active : ''}`}>
                            <h2>QUICK LINKS <span className={styles.arrow}>{isQuickLinksOpen ? '▲' : '▼'}</span></h2>
                        </button>
                        <ul className={`${styles.dropdownContent} ${isQuickLinksOpen ? styles.show : ''}`}>
                            <li><a href="#">Search</a></li>
                            <li><a href="#">Terms of Service</a></li>
                            <li><a href="#">Refund policy</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">Shipping</a></li>
                            <li><a href="#">Legal Notice</a></li>
                        </ul>
                    </div>
                    <div className={styles.followUs}>
                        <h2 className={styles.secondHeading}>FOLLOW US</h2>
                        <button onClick={toggleFollowUs} className={`${styles.dropdownButton} ${isFollowUsOpen ? styles.active : ''}`}>
                            <h2>FOLLOW US <span className={styles.arrow}>{isFollowUsOpen ? '▲' : '▼'}</span></h2>
                        </button>
                        <div className={styles.dropdownContent + ' ' + (isFollowUsOpen ? styles.show : '')}>
                            <div className={styles.media}>
                                <a href="#" aria-label="Instagram"><img src="/instagram.png" alt="Instagram" width={24} height={24} /></a>
                                <a href="#" aria-label="LinkedIn"><img src="/linkedin.png" alt="LinkedIn" width={24} height={24} /></a>
                            </div>
                            <h2 className={styles.accepts}>mettà muse ACCEPTS</h2>
                            <div className={styles.paymentIcons}>
                                <Image src="/google-pay.png" alt="Google Pay" width={50} height={20} />
                                <Image src="/master-card.png" alt="MasterCard" width={50} height={20} />
                                <Image src="/pay-pal.png" alt="PayPal" width={50} height={20} />
                                <Image src="/amex.png" alt="American Express" width={50} height={20} />
                                <Image src="/i-pay.png" alt="Apple Pay" width={50} height={20} />
                                <Image src="/o-pay.png" alt="O-Pay" width={50} height={20} />
                            </div>
                            </div>
                        </div>
                    </div>
                </div>

                <hr className={styles.horizontalLine} />

                <div className={styles.footerBottom}>
                    <p>© 2023 mettà muse. All rights reserved.</p>
                </div>
            {/* </div> */}
        </footer>
    );
};

export default Footer;
