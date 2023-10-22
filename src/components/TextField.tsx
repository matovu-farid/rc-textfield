import {  useRef, useState } from 'react'
import ErrorText from './ErrorText'
import { ValidateState } from '../types'
interface Props {
  value?: string
  onChange?: (value: string) => void
  onSubmit?: (value: string) => void
  validators?: {
    check: (value: string) => boolean
    message: string
  }[],
  prefix?: string,
  placeholder?: string
  label?: string
  styles?: {
    label?: string
    input?: string
    container?: string
    error?: string
  }
  lazy?: boolean
  validateOn?: ValidateState
}

export function TextField({
  value = '',
  onChange = () =>{},
  onSubmit = () =>{},
  validators,
  placeholder, 
  label,
  styles: argStyles, 
  prefix = '', 
 validateOn = ValidateState.Touched,
}: Props) {
  const customRef = useRef(null)
  const id = "input_" + Math.random().toString(36).substring(2)
  const defaultStyles = {
    label: 'text-start',
    input: ' outline-none p-2 bg-transparent',
    container: `relative before:content-['${prefix}'] p-2  before:p-2 border border-gray-200  rounded-lg outline-black`,
    error: 'w-full text-red-400',
  }

  const [isTouched, setIsTouched] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const styles = { ...defaultStyles, ...argStyles }
  return (
    <div className="flex flex-col ">
      {
        label && <label htmlFor={id} className={styles.label}>{label}</label>
      }

      <div className={styles.container}>


        <input
          id={id}

          placeholder={placeholder}
          ref={customRef}
          value={value}
          onChange={
            (e) => {
              onChange(e.target.value)
            }
          }
          onBlur={() => {
            setIsTouched(true)
          }}
          onSubmit={() => {
            onSubmit(value)
            setIsSubmitted(true)

          }}
          className={styles.input}
        />
      </div>
      <ErrorText
        ref={customRef}
        validators={validators}
        value={value}
        className={styles.error}
        isTouched={isTouched}
        isSubmitted={isSubmitted}
        validateState={validateOn}
      />
    </div>
  )
}
export default TextField
