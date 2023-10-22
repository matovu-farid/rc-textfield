import './App.css'
import TextField from './components/TextField'
import { useState } from 'react'
import { ValidateState } from './types'

function App() {
  const [value, setValue] = useState('')

  return (
    <TextField 
      value={value} 
      onChange={setValue}
      validators={[
        
        {
          check: (value) => value?.includes('@'),
          message: 'Must be a valid email',
        }
      ]}
      label="Email"
      validateOn={ValidateState.Initial}

    />
  )
}

export default App
