type Props = {
  children: React.ReactNode;
};

export function Chips({ children }: Props) {
  return <div className="chips">{children}</div>;
}
