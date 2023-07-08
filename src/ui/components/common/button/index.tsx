import classNames from 'classnames';

import { ButtonProps } from '@mui/material';
import { Button as MaterialButton } from '@mui/material';

import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

interface ButtonStyle {
  outlineGreen?: boolean;
  isActive?: boolean;
}

interface Props extends ButtonProps, ButtonStyle {
  text: string;
  checkIcon?: true;
}

const Button: React.FC<Props> = ({
  text,
  variant = 'outlined',
  outlineGreen,
  checkIcon,
  isActive,
  ...rest
}) => (
  <MaterialButton
    {...rest}
    variant={variant}
    className={classNames({
      active: isActive,
      outlineGreen: outlineGreen,
    })}
  >
    {checkIcon && <CheckCircleOutlineIcon />}
    {text}
  </MaterialButton>
);

export default Button;

