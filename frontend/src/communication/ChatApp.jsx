import React, { use, useEffect, useState } from 'react'
import io from 'socket.io-client'

const socket = io('http://localhost:3000')
const ChatApp = () => {
    const[message,setMessage] = useState('')
    const[messages,setMessages] = useState([])
    const[username,setUsername] = useState('Aman')

    useEffect(()=>{
        const handleRecieveMessage = (data)=>{
            setMessages(prev=>[...prev,data])
        }
        socket.on('recieved-message',handleRecieveMessage)

        return ()=>socket.off('recieved-message',handleRecieveMessage)
    },[])
    
    const sendMessageHandler = ()=>{
        socket.emit('send-message',message.trim())
    }

    const joinChatHandler = ()=>{
        socket.emit('join-chat',username.trim())
    }
  return (
    <div>
      <input type="text" onChange={(e)=>setMessage(e.target.value)}/>
      <button onClick={sendMessageHandler}>Send</button>
      <select onChange={(e)=>setUsername(e.target.value)}>
        <option value="Aman">Aman</option>
        <option value="Adil">Adil</option>
      </select>
      <button onClick = {joinChatHandler}>Join Chat</button>
      <div>
        {
            messages?.map(message=>(
                <p>{message.username}:{message.message}</p>
            ))
        }
      </div>
    </div>
  )
}

export default ChatApp
