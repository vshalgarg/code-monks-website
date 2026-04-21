import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://lmjhxwoelljmdjkbcdkp.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imxtamh4d29lbGxqbWRqa2JjZGtwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzU1NDAzNzIsImV4cCI6MjA5MTExNjM3Mn0.W4A57w9PqJHXq6TyMakV7sWi5ZH5EYHSlFCWCvpr5XY'

export const supabase = createClient(supabaseUrl, supabaseKey, {
  realtime: {
    params: {
      eventsPerSecond: 10
    }
  }
})