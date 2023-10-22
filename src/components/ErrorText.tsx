

import { forwardRef, useEffect, useState } from 'react'

interface Props {
  className?: string
  validations?: {
    check: () => boolean
    message: string
  }[]
}
const ErrorText = forwardRef<HTMLInputElement, Props>(({
  className, validations,
}, ref) => {
  const [isTouched, setIsTouched] = useState(false)
  function validate() {
    if (!validations) return null
    for (const validation of validations) {
      if (validation.check()) {
        return validation.message
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

  return <span className={`error ${className}`}>{error}</span>
})
export default ErrorText
