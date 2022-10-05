import React from 'react';

type ButtonProps = {
  onPressed: () => void;
  text: string;
};
const Button: React.FC<ButtonProps> = (props) => {
  return <button onClick={props.onPressed}>{props.text}</button>;
};

export default Button;
