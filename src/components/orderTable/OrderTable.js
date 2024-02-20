import BookAsks from "./bookAsks/BookAsks";
import BookBids from "./bookBids/BookBids";

import styles from './OrderTable.module.css'

const OrderTable = () => {
    return(
        <div className={styles.tablesWrapper}>
            <div className={styles.tableW50}>
                <BookBids />
            </div>
            <div className={styles.tableW50}>
                <BookAsks />
            </div>
        </div>
    )
}

export default OrderTable;
