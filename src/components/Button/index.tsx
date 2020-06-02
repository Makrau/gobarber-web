import React, { ButtonHTMLAttributes } from 'react';

import { Container } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonProps> = ({ children, ...remainingProps }) => (
  <Container type="button" {...remainingProps}>
    {children}
  </Container>
);

export default Button;
