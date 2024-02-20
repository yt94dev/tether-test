import BookAsks from "./bookAsks/BookAsks";
import BookBids from "./bookBids/BookBids";
import useWebSocket, { ReadyState } from "react-use-websocket";
import { useEffect } from "react";
import { useDispatch } from 'react-redux'
import { setBids } from '../store/orderBookReducer';

import styles from './OrderTable.module.css'

const BITFINEX_API = 'wss://api.bitfinex.com/ws/2';

const OrderTable = () => {
    const dispatch = useDispatch()

    const { sendJsonMessage, lastJsonMessage, readyState, getWebSocket, lastMessage } = useWebSocket(
        BITFINEX_API,
        {
            shouldReconnect: () => true,
            onMessage: (event) =>  {
                console.log(event)
                // dispatch event to store
                // dispatch(setBids(event.data))
                // console.log(JSON.stringify(event))
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
    // useEffect(() => {
    //     console.log(`Got a new message: ${JSON.stringify(lastJsonMessage)}`)
    //     // const apiMsg = JSON.parse(lastJsonMessage);
    //     console.log(typeof lastJsonMessage)
    //     if(lastJsonMessage?.event === 'subscribed'){

    //     }
    // }, [lastJsonMessage, lastMessage])

    
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
