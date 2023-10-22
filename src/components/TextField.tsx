import { useRef } from 'react'
import ErrorText from './ErrorText'
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
    <div className="flex flex-col ">
      <div className={`relative before:content-['${prefix}'] p-2  before:p-2 bg-gray-200 rounded-lg outline-black ${className}`}>
        

        <input
          ref={customRef}
          value={value}
          onChange={(e)=>onChange(e.target.value)}
          className={`outline-none p-2 bg-transparent ${className}`}        />
      </div>
      <ErrorText
        ref={customRef}
        validations={validations}
      />
    </div>
  )
}
export default TextField
