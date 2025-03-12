type Props = {
  title: string;
  children: React.ReactNode;
};

export function WeekInfo({ title, children }: Props) {
  return (
    <section
      className="rounded-3xl p-6"
      style={{
        background: 'var(--surface-container-low)',
      }}
    >
      <h2 className="text--title-medium mb-4">{title}</h2>
      {children}
    </section>
  );
}

type PlateProps = {
  digit: string;
};

export function Plate({ digit }: PlateProps) {
  return (
    <span
      className="text--display-medium"
      style={{ fontFamily: 'var(--text-plain)' }}
    >
      {digit}
    </span>
  );
}

export function Separator() {
  return (
    <span
      className="text--display-medium"
      style={{
        fontFamily: 'var(--text-plain)',
        color: 'var(--primary-container)',
      }}
    >
      {' • '}
    </span>
  );
}
