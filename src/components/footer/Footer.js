import { useState } from 'react';

import styles from './Footer.module.css'

const Footer = () => {
    const [connection, toggleConnection] = useState(false);

    return(
        <div className={styles.footer}>
            <button className={styles.button} onClick={() => toggleConnection(!connection)}>
                {connection ? 'Connected' : 'Disconnected'}
            </button>
        </div>
    )
}

export default Footer;
