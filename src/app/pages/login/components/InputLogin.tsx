interface IInputLoginProps {
    label: string;
    value: string;
    type?: string

    onChange: (newValue: string) => void
}

export const InputLogin: React.FC<IInputLoginProps> = (props) => {
  return (
    <label htmlFor="email">
        <span>{props.label}</span>
        <input type={props.type}
            value={props.value}
            onChange={(e) => props.onChange(e.target.value)} />
    </label>
  )
}
