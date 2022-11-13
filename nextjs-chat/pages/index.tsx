import styles from '../styles/Home.module.scss'
import React, {useEffect, useState} from "react";
import io, {Socket} from "socket.io-client";
// @ts-ignore
let socket
export default function Home() {
    useEffect(() => {
        socketInitializer()
    }, []);
    const socketInitializer = async () => {

        await fetch("/api/socket")
        socket = io()
        socket.on('connect', () => {
            console.log('connected')

        })
        socket.on('message', (msg: string) => {
            console.log('receive mesage', msg)
        })

    }
    const [message, setMessage] = useState("");
    const onSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        console.log('send message')
        // @ts-ignore
        socket.emit('message', 'test')
    }
    return (
        <div className={styles.container}>
            Chat using next.js
            <div className={styles.chatWrapperContainer}>
                <div className={styles.chatContainer}>
                    <div className={styles.row} role={"row"}>
                        <div className={`${styles.message}`}>firstMessage</div>
                    </div>
                    <div className={styles.row} role={"row"}>
                        <div className={`${styles.message} ${styles.right}`}>secondMessage</div>
                    </div>
                    <div className={styles.row} role={"row"}>
                        <div className={`${styles.message}`}>thirdMessage</div>
                    </div>
                    <div className={styles.row} role={"row"}>
                        <div className={`${styles.message}`}>thirdMessage Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem
                            Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                            Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem
                            Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                            Lorem Ipsum
                        </div>
                    </div>
                    <div className={styles.row} role={"row"}>
                        <div className={`${styles.message}`}>thirdMessage Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem
                            Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                            Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem
                            Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                            Lorem Ipsum
                        </div>
                    </div>
                    <div className={styles.row} role={"row"}>
                        <div className={`${styles.message}`}>thirdMessage Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem
                            Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                            Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem
                            Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                            Lorem Ipsum
                        </div>
                    </div>
                    <div className={styles.row} role={"row"}>
                        <div className={`${styles.message}`}>thirdMessage Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem
                            Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                            Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem
                            Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                            Lorem Ipsum
                        </div>
                    </div>
                    <div className={styles.row} role={"row"}>
                        <div className={`${styles.message}`}>thirdMessage Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem
                            Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                            Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem
                            Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                            Lorem Ipsum
                        </div>
                    </div>
                </div>
                <form className={styles.messageFormContainer} onSubmit={onSubmit}>
                    <input type="text" placeholder={"Write a message..."}/>
                    <button type={"submit"}>Send</button>
                </form>
            </div>
        </div>
    )
}
