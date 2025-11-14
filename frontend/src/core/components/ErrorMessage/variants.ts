import { clsx } from 'clsx';

export interface ErrorMessageVariantProps {
  variant?: 'default' | 'danger';
}

export function getErrorMessageClassName(props: ErrorMessageVariantProps): string {
  const { variant = 'default' } = props;

  return clsx('flex items-center justify-center w-full h-full min-h-[400px] p-8', {
    'bg-gray-50': variant === 'default',
    'bg-red-50': variant === 'danger',
  });
}
