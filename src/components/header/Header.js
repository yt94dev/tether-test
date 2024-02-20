import styles from './Header.module.css'

const Header = () => {
    return(
        <div className={styles.header}>
            <div className={styles.titleContainer}>
                <div className={styles.title}>Order Book</div>
                <div className={styles.currencyPair}>BTC/USD</div>
            </div>
            <div>
                <button className={styles.button}>Precision -</button>
                <button className={styles.button}>Precision +</button>
            </div>
        </div>
    )
}

export default Header;
