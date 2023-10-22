import './App.css'
import TextField from './components/TextField'
import { useState } from 'react'

function App() {
  const [value, setValue] = useState('')

  return (
    <TextField value={value} onChange={setValue}
      validators={[
        {
          check: (value) => value?.length < 5,
          message: 'Must be at least 5 characters',
        },
        {
          check: (value) => !value?.includes('@'),
          message: 'Must be a valid email',

        }
      ]}

    />
  )
}

export default App
