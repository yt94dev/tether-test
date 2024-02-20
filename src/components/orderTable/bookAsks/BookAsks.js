import styles from './BookAsks.module.css'

const BookAsks = () => {
    return(
        <div>
            <div className={styles.tableHeader}>
                <div>price</div>
                <div>total</div>
                <div>amount</div>
                <div>count</div>
            </div>
            <div className={styles.tableBody}>
                <div className={styles.row}>
                    <div>750</div>
                    <div>492.4</div>
                    <div>492.4</div>
                    <div>50000</div>
                </div>
            </div>
        </div>
    )
}

export default BookAsks;
