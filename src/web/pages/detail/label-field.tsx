import { Label } from 'react-aria-components';

type Props = {
  label: string;
  children?: React.ReactNode;
  text?: string;
};

export function LabelField({ label, text, children }: Props) {
  return (
    <div>
      <Label
        className="block text--body-small mb-1"
        style={{ color: 'var(--secondary)' }}
      >
        {label}
      </Label>
      {text && (
        <p className="text--body-large" style={{ color: 'var(--on-surface)' }}>
          {text}
        </p>
      )}
      {children}
    </div>
  );
}
