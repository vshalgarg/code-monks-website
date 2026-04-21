import { useState } from 'react'

function MessageInput({ onSend }) {
  const [text, setText] = useState('')

  const handleSend = () => {
    if (!text) return
    onSend(text)
    setText('')
  }

  return (
    <div style={{ display: 'flex' }}>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type a message..."
        style={{
          flex: 1,
          padding: '10px',
          borderRadius: '20px',
          border: '1px solid #ccc',
          outline: 'none'
        }}
        onKeyDown={(e) => e.key === 'Enter' && handleSend()}
      />

      <button
        onClick={handleSend}
        style={{
          marginLeft: '10px',
          padding: '10px 15px',
          borderRadius: '50%',
          border: 'none',
          backgroundColor: '#25d366',
          color: 'white',
          cursor: 'pointer'
        }}
      >
        ➤
      </button>
    </div>
  )
}

export default MessageInput
