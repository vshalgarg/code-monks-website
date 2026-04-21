import { useParams } from 'react-router-dom'
import Sidebar from '../components/Sidebar'
import ChatBox from '../components/ChatBox'

function ChatPage() {
  const { userId, roomId } = useParams()

  return (
    <ChatBox userId={userId} roomId={roomId} />
  )
}

export default ChatPage