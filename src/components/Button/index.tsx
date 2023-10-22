import { cn } from 'lib/utils';

import { classes, variants } from './classes';

interface Props extends React.ComponentProps<'button'> {
  variant?: 'primary' | 'secondary';
}

export function Button({ className, variant = 'primary', ...props }: Props) {
  return (
    <button
      className={cn(...classes, className, {
        [variants.primary]: variant === 'primary',
        [variants.default]: variant !== 'primary',
      })}
      {...props}
    />
  );
}
