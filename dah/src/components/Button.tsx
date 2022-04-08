import { DetailedHTMLProps, ButtonHTMLAttributes } from 'react';

export type Colors =
  | 'primary'
  | 'secondary'
  | 'tertiary'
  | 'accent'
  | 'violator';
export type Weights = 'bold' | 'light';

type ButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  color?: Colors;
  weight?: Weights;
};

export default function Button({
  className,
  color = 'primary',
  weight = 'bold',
  ...rest
}: ButtonProps) {
  const isBold = weight === 'bold';
  return (
    <button
      className={`
        btn
        ${
          color === 'primary'
            ? isBold
              ? 'btn-primary'
              : 'btn-primary-light'
            : ''
        }
        ${
          color === 'secondary'
            ? isBold
              ? 'btn-secondary'
              : 'btn-secondary-light'
            : ''
        }
        ${
          color === 'tertiary'
            ? isBold
              ? 'btn-tertiary'
              : 'btn-tertiary-light'
            : ''
        }
        ${
          color === 'accent' ? (isBold ? 'btn-accent' : 'btn-accent-light') : ''
        }
        ${
          color === 'violator'
            ? isBold
              ? 'btn-violator'
              : 'btn-violator-light'
            : ''
        }
        ${className || ''}
      `}
      {...rest}
    />
  );
}
