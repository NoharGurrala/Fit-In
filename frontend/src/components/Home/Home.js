import React from 'react';
import './Home.module.css';
import { Link } from "react-router-dom";
import styles from "./Home.module.css";


const BASE_URL = "http://localhost:3001";
const ABOUT_GYM_API = "/";


function Home() {
    return (
        
        <main>
            <div className={styles.logo}>
                    <Link to="/" className={styles.logoLink}>
                    <img src="/Gym1.png" alt="Gym" className={styles.logoImage} />
                    </Link>
                </div>
            <section className={styles.container}>
                <table className={styles.table}>
                    <tr className={styles.th}>
                    <th>About Us</th>
                    <th>Our Programs</th>
                    <th>Contact Us</th>
                    </tr>
                    
                    <td className={styles.td1}>At our fitness facility, we provide a range of programs suitable for individuals with different fitness levels. Our team of seasoned trainers are available to assist you in accomplishing your fitness objectives, be it weight loss, muscle gain, or maintaining overall fitness.</td>
                    <td className={styles.td2}>
                        <ul>
                            <li>Weight Training</li>
                            <li>Cardiovascular Training</li>
                            <li>Yoga and Pilates</li>
                            <li>Zumba</li>
                            <li>Group Fitness Classes</li>
                        </ul>
                    </td>
        
                    <td className={styles.td3}>
                        <p>Feel free to contact us if you have any questions or would like to sign up for one of our programs:</p>
                        <ul>
                            <li>Phone: 555-1234</li>
                            <li>Email: info@healthclud.com</li>
                            <li>Address: 
                                <li>123 Main Street, San Jose, CA, USA</li>
                                <li>456 N 4th Street, San Francisco, CA, USA</li>
                                <li>789 S 32th Street, Los Angeles, CA, USA</li>
                            </li>
                        </ul>
                    </td>
                </table>
            </section>
        </main>
    );
}

export default Home;
