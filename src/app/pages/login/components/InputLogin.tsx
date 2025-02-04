import React from 'react'

interface IInputLoginProps {
  label: string;
  value: string;
  type?: string
  onChange: (newValue: string) => void
}

export const InputLogin = React.forwardRef<HTMLInputElement, IInputLoginProps>((props, ref) => {
  return (
    <>
      <label htmlFor="email">
        <span>{props.label}</span>
        <input type={props.type}
          value={props.value}
          ref={ref}
          onChange={(e) => props.onChange(e.target.value)} />
      </label>
      <br />
    </>
  )
}
)