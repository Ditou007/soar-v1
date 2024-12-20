import React from 'react'

interface SoarCustomTextFieldProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string
  placeholder?: string
  error?: string
}

const SoarCustomTextField: React.FC<SoarCustomTextFieldProps> = ({
  label,
  placeholder,
  error,
  ...props
}) => {
  const hasError = Boolean(error)

  return (
    <div className='flex flex-col w-full'>
      {/* Label */}
      <label
        className={`font-inter text-normal text-base mb-2 ${
          hasError ? 'text-red-500' : 'text-menu'
        }`}
      >
        {label}
      </label>

      {/* Input field */}
      <input
        placeholder={placeholder}
        className={`placeholder:text-lightblue font-inter text-lightblue text-normal text-base px-3 py-2 rounded-[15px] outline-none w-full border-[1px] 
          ${hasError ? 'border-red-500' : ''}`}
        style={{
          borderWidth: '1px',
          borderColor: hasError ? '#FF0000' : '#DFEAF2',
        }}
        {...props}
      />

      {/* Error Message */}
      {error && (
        <span className='text-sm text-red-500 font-inter text-normal mt-1'>
          {error}
        </span>
      )}
    </div>
  )
}

export default SoarCustomTextField
