import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

const rooms = ['general', 'friends', 'office']

function Sidebar({ userId, currentRoom }) {
  const navigate = useNavigate()
  const [newRoom, setNewRoom] = useState('')

  const createRoom = () => {
    if (!newRoom) return
    navigate(`/chat/${userId}/${newRoom}`)
  }

  return (
    <div style={{ width: '250px', background: '#111', color: '#fff', padding: '10px' }}>
      
      <h3>Rooms</h3>

      {rooms.map((room) => (
        <div
          key={room}
          onClick={() => navigate(`/chat/${userId}/${room}`)}
          style={{
            padding: '10px',
            cursor: 'pointer',
            background: room === currentRoom ? '#333' : 'transparent'
          }}
        >
          {room}
        </div>
      ))}

      <hr />

      <input
        placeholder="New room"
        value={newRoom}
        onChange={(e) => setNewRoom(e.target.value)}
      />

      <button onClick={createRoom}>Create</button>
    </div>
  )
}

export default Sidebar