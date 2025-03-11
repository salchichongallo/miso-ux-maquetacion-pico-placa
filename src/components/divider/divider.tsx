import clsx from 'clsx';

type Props = {
  className?: string;
};

export function Divider({ className }: Props) {
  return (
    <div
      role="separator"
      aria-orientation="horizontal"
      className={clsx('block h-0.25 shrink-0', className)}
      style={{ background: 'var(--outline-variant)' }}
    />
  );
}
