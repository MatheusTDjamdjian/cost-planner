import {FaInstagram, FaLinkedin, FaEnvelope} from 'react-icons/fa'

import styles from '../layouts-css/Footer.module.css'

function Footer() {
    return (<footer className={styles.footer}> 
        <ul className={styles.social_list}>
            <li>
                <FaInstagram/>
            </li>
            <li>
                <FaLinkedin/>
            </li>
            <li>
                <FaEnvelope/>
            </li>
        </ul>
        <p className={styles.copy_right}>
            <span>Costs</span> &copy; 2024
        </p>
    </footer>)
}

export default Footer