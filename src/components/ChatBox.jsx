import { useChat } from '../hooks/useChat'
import MessageList from './MessageList'
import MessageInput from './MessageInput'

function ChatBox({ userId, roomId }) {
  const { messages, sendMessage } = useChat(userId, roomId)

  return (
    <div style={styles.container}>
      
      {/* Header */}
      <div style={styles.header}>
        <div style={styles.avatar}>{roomId[0]?.toUpperCase()}</div>
        <div>
          <h3 style={{ margin: 0 }}>{roomId}</h3>
          <small>{userId}</small>
        </div>
      </div>

      {/* Messages */}
      <div style={styles.messages}>
        <MessageList messages={messages} currentUser={userId} />
      </div>

      {/* Input */}
      <div style={styles.input}>
        <MessageInput onSend={sendMessage} />
      </div>

    </div>
  )
}
export default ChatBox

const styles = {
  container: {
    width: '400px',
    height: '600px',
    margin: '40px auto',
    display: 'flex',
    flexDirection: 'column',
    borderRadius: '12px',
    overflow: 'hidden',
    boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
    background: '#f0f2f5'
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    padding: '10px',
    background: '#075e54',
    color: 'white'
  },
  avatar: {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    background: '#25d366',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: '10px'
  },
  messages: {
    flex: 1,
    padding: '10px',
    overflowY: 'auto'
  },
  input: {
    padding: '10px',
    background: '#fff'
  }
}

// 1. Component mounts
// ↓
// 2. fetchMessages() → loads old messages from database
// ↓
// 3. Realtime subscription starts
// ↓
// 4. User sends a message
// ↓
// 5. Message is inserted into the database
// ↓
// 6. Realtime event is triggered
// ↓
// 7. All clients receive the event
// ↓
// 8. UI updates (setMessages)

// Publisher → Supabase DB
// Broker  -> Supabase Realtime Server
// Subscriber → ChatBox (React clients)
// loosely coupled 