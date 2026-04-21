import { useEffect, useState } from 'react'
import { supabase } from '../services/supabaseClient'
import { sendMessageApi } from '../services/chatApi'

export const useChat = (userId, roomId) => {
  const [messages, setMessages] = useState([])

  const fetchMessages = async () => {
    const { data } = await supabase
      .from('messages')
      .select('*')
      .eq('room_id', roomId)
      .order('created_at', { ascending: true })

    setMessages(data || [])
  }

  const sendMessage = async (content) => {
    await sendMessageApi({ content, userId, roomId })
  }

  useEffect(() => {
    fetchMessages()

    // WebSocket channel
    const channel = supabase
      .channel(`chat-${roomId}`)
      .on(   // Listener attach
        'postgres_changes',
        {
          event: 'INSERT',
          schema: 'public',
          table: 'messages',
          filter: `room_id=eq.${roomId}`
        },
        (payload) => {
          setMessages((prev) => [...prev, payload.new])
        }
      )
      .subscribe()

    return () => supabase.removeChannel(channel)
  }, [roomId])

  return { messages, sendMessage }
}