

import { forwardRef, useEffect, useState } from 'react'

interface Props {
  className?: string
  validators?: {
    check: (value: string) => boolean
    message: string
  }[]
  value: string
}
const ErrorText = forwardRef<HTMLInputElement, Props>(({
  className,  validators,value
}, ref) => {
  const [isTouched, setIsTouched] = useState(false)
  function validate() {
    if (!validators) return null
    for (const validator of validators) {
      if (validator.check(value)) {
        return validator.message
      }
    }
    return null
  }
  const error = validate()
    

  useEffect(() => {
      
    if (ref && 'current' in ref && ref.current && ref.current.value) {
      setIsTouched(true)
    }
  }, [ref, error])

  
  if (!error || !isTouched) return <span />

  return <span className={`w-full text-red-400 ${className}`}>{error}</span>
})
export default ErrorText
