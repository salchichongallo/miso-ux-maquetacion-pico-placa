type Props = {
  children: React.ReactNode;
};

export function LeadingAction({ children }: Props) {
  return <div style={{ flex: 1, paddingLeft: '0.25rem' }}>{children}</div>;
}
