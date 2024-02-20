import OrderTable from '../orderTable/OrderTable'

import styles from './OrderBook.module.css'

const OrderBook = () => {
    return(
        <div className={styles.wrapper}>
            <OrderTable />
        </div>
    )
}

export default OrderBook;
