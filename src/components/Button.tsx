import { ButtonProps } from '../interfaces'
import { ButtonContainer } from './Button.styles'

export const Button = ({ variant = 'primary' }: ButtonProps) => {
  return <ButtonContainer variant={variant}>Enviar</ButtonContainer>
}
