

import { forwardRef } from 'react'
import { ValidateState } from '../types'



interface Props {
  className?: string
  validators?: {
    check: (value: string) => boolean
    message: string
  }[]
  value: string
  validateState?: ValidateState
  isTouched?: boolean
  isSubmitted?: boolean

}
const ErrorText = forwardRef<React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, Props>(({
  className, validators, value, validateState = ValidateState.Touched, isTouched, isSubmitted
}) => {
  function validate() {
    if (!validators) return null
    for (const validator of validators) {
      if (!validator.check(value)) {
        return validator.message
      }
    }
    return null
  }
  const error = validate()


 

  const validateStateMap = {
    [ValidateState.Initial]: true,
    [ValidateState.Touched]: isTouched,
    [ValidateState.Submitted]: isSubmitted,
  }



  if (!error || !validateStateMap[validateState]) return <span />

  return <span className={className}>{error}</span>
})
export default ErrorText
