type Props = {
  className?: string;
};

export function Divider({ className }: Props) {
  return (
    <div
      role="separator"
      aria-orientation="horizontal"
      className={className}
      style={{
        background: 'var(--outline-variant)',
        display: 'block',
        height: 1,
        flexShrink: 0,
      }}
    />
  );
}
