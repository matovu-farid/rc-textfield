import { useRef } from 'react'
import ErrorText from './ErrorText'
import styles from "./TextField.module.css"
interface Props {
  value: string
  onChange: (value: string) => void
  className?: string
  validations?: {
    check: () => boolean
    message: string
  }[],
  prefix?: string,
}

export function TextField({
  value, onChange, className,  validations, prefix = '',
}:Props) {
  const customRef = useRef(null)
  return (
    <div className="flex flex-col">
      <div className={`${styles.textfieldprefix} ${className || styles.textfield}`} data-prefix={prefix}>
        

        <input
          ref={customRef}
          value={value}
          onChange={(e)=>onChange(e.target.value)}
          className={styles.input}
        />
      </div>
      <ErrorText
        ref={customRef}
        validations={validations}
      />
    </div>
  )
}
export default TextField
