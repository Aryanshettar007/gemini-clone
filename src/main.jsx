import React, { useEffect, useRef } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

function Main() {
  const bottomRef = useRef(null)
  const chatHistory = [] // Assuming chatHistory is defined here

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatHistory]);

  return (
    <>
      <App />
      <div ref={bottomRef} />
    </>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
)
