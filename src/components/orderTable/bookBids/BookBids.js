import styles from './BookBids.module.css'

const BookBids = () => {
    return(
        <div>
            <div className={styles.tableHeader}>
                <div>count</div>
                <div>amount</div>
                <div>total</div>
                <div>price</div>
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

export default BookBids;
