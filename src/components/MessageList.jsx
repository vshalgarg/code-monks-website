
function MessageList({ messages, currentUser }) {
  return (
    <div>
      {messages.map((msg) => {
        const isMe = msg.user_id === currentUser

        return (
          <div
            key={msg.id}
            style={{
              display: 'flex',
              justifyContent: isMe ? 'flex-end' : 'flex-start',
              marginBottom: '8px'
            }}
          >
            <div
              style={{
                padding: '10px',
                borderRadius: '10px',
                backgroundColor: isMe ? '#dcf8c6' : '#fff',
                maxWidth: '60%',
                boxShadow: '0 1px 2px rgba(0,0,0,0.1)'
              }}
            >
              {msg.content}
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default MessageList