import { useSelector } from 'react-redux';
import { bidsSelector } from '../../store/orderBookReducer';

import styles from './BookBids.module.css'

const BookBids = () => {
    const bids = useSelector(bidsSelector);
    console.log(bids);

    return(
        <div>
            <div className={styles.tableHeader}>
                <div>count</div>
                <div>amount</div>
                <div>total</div>
                <div>price</div>
            </div>
            <div className={styles.tableBody}>
                    {bids && bids.map((bidRow) => {
                        return (
                            <div className={styles.row}>
                                <div>{bidRow[1]}</div>
                                <div>{bidRow[2]}</div>
                                <div>{bidRow[2]}</div>
                                <div>{bidRow[0]}</div>
                            </div>
                        )
                    })}
                
            </div>
        </div>
    )
}

export default BookBids;
