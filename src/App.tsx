import './App.css'
import TextField from './components/TextField'
import { useState } from 'react'

function App() {
  const [value, setValue] = useState('')

  return (
    <TextField value={value} onChange={setValue}  />
  )
}

export default App
