import { DetailedHTMLProps, InputHTMLAttributes } from 'react';

type InputProps = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

export default function Input({ className, ...rest }: InputProps) {
  return (
    <input
      className={`
        py-2 px-4
        bg-tertiary-100 placeholder-tertiary-400 text-tertiary-900
        border-secondary border-2
        rounded-md w-full
        ${className}
      `}
      {...rest}
    />
  );
}
