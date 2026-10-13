import React, { useEffect, useState } from 'react'

const ServerSentEvent = () => {
const[notifications,setNotifications] = useState([])

useEffect(()=>{
    const eventSource = new EventSource('http://localhost:3000/notification')
    console.log(eventSource,'event')

    // eventSource.onopen = ()=>console.log('connection established')

    eventSource.onmessage = (notification)=>console.log(notification.data)

    eventSource.onerror = ()=>console.log('error')
    return ()=>eventSource.onclose = ()=>console.log('connected terminated')
},[])

  return (
    <div>
      
    </div>
  )
}

export default ServerSentEvent
