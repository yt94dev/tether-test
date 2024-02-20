import BookAsks from "./bookAsks/BookAsks";
import BookBids from "./bookBids/BookBids";
import useWebSocket, { ReadyState } from "react-use-websocket";
import { useEffect } from "react";
import styles from './OrderTable.module.css'

const BITFINEX_API = 'wss://api.bitfinex.com/ws/2';

const OrderTable = () => {
    const { sendJsonMessage, lastJsonMessage, readyState, getWebSocket } = useWebSocket(
        BITFINEX_API,
        {
            shouldReconnect: () => true,
            onMessage: (event) =>  {
                // dispatch event to store
                console.log(JSON.stringify(event))
            }
        },
    );
    
    // Run when the connection state (readyState) changes
    useEffect(() => {
        console.log("Connection state changed")
        if (readyState === ReadyState.OPEN) {
            sendJsonMessage({
                event: "subscribe",
                channel: 'book',
                symbol: 'tBTCUSD',
                prec: 'P0',
                freq: 'F1',
                len: 25,
            })
        }
        // getWebSocket()?.close();
    }, [readyState])
    
      // Run when a new WebSocket message is received (lastJsonMessage)
    useEffect(() => {
        console.log(`Got a new message: ${JSON.stringify(lastJsonMessage)}`)
    }, [lastJsonMessage])

    
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
