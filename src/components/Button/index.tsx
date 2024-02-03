interface Props {
  text: string;
  className: string;
  disabled?: boolean;
}

const Button = ({ text, className, disabled = false }: Props) => {
  return (
    <button className={className} disabled={disabled}>{text}</button>
  )
}

export default Button

