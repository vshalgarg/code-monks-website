import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Home() {
  const [name, setName] = useState('')
  const [room, setRoom] = useState('')
  const navigate = useNavigate()

  const handleEnter = () => {
    if (!name || !room) return
    navigate(`/chat/${name}/${room}`)
  }

  return (
    <div style={styles.container}>
      <h2>Join Chat</h2>

      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
        style={styles.input}
      />

      <input
        value={room}
        onChange={(e) => setRoom(e.target.value)}
        placeholder="Enter room name"
        style={styles.input}
      />

      <button onClick={handleEnter} style={styles.button}>
        Enter Chat
      </button>
    </div>
  )
}

const styles = {
  container: {
    textAlign: 'center',
    marginTop: '100px'
  },
  input: {
    display: 'block',
    margin: '10px auto',
    padding: '10px',
    width: '200px'
  },
  button: {
    padding: '10px 20px',
    background: '#25d366',
    border: 'none',
    color: 'white',
    cursor: 'pointer'
  }
}

export default Home