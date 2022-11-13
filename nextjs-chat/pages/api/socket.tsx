import React from 'react';
import {NextApiRequest, NextApiResponse} from "next";
import {Server} from 'socket.io'

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    // @ts-ignore
    if (res.socket.server.io) {
        console.log('Socket is already running')
    } else {
        console.log('Socket is initializing')
        // @ts-ignore
        const io = new Server(res.socket.server)
        // @ts-ignore
        res.socket.server.io = io
        io.on('connect', socket => {
            socket.on('message', msg => {
                console.log('message received')
                socket.broadcast.emit('message', msg)
            })
        })
        io.on('message',msg=>{
            console.log('message on server')
        })
    }
    res.end()
}
