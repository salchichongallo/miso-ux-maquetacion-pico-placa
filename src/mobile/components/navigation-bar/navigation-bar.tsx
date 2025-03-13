type Props = {
  children: React.ReactNode;
};

export function NavigationBar({ children }: Props) {
  return (
    <nav
      className="flex justify-center items-center gap-2"
      style={{
        boxShadow: 'var(--elevation--1)',
        background: 'var(--surface-container)',
        paddingBottom: 'var(--safe-area-inset-bottom)',
      }}
    >
      {children}
    </nav>
  );
}
