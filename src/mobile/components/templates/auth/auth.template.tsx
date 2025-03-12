import './auth.template.css';

type Props = {
  children: React.ReactNode;
};

export function AuthTemplate({ children }: Props) {
  return <div className="auth-template">{children}</div>;
}
