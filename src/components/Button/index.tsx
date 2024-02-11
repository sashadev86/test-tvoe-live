import React from 'react';
interface Props {
  className: string;
  text: string;
  disabled?: boolean;
  children?: React.ReactNode;
  onClick?: () => void;
}

const Button = ({ className, text, disabled = false, children, onClick }: Props) => {
  return (
    <button className={className} disabled={disabled} onClick={onClick}>
      {text}
      {children}
    </button>
  );
};

export default Button

