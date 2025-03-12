import { BlockPictogram } from './block-pictogram';

export function CarStatusCard() {
  return (
    <section
      className="flex justify-between items-center rounded-3xl pl-6 pr-3"
      style={{
        background: 'var(--surface-container-low)',
        height: '10.4375rem',
      }}
    >
      <div>
        <h2 className="text--body-large mb-1">Carro</h2>
        <h3 className="text--headline-large mb-2">ABC123</h3>
        <span
          className="rounded-full text--label-medium py-2 px-3"
          style={{
            background: 'var(--error-container)',
            color: 'var(--error)',
          }}
        >
          No puede transitar
        </span>
      </div>
      <BlockPictogram />
    </section>
  );
}
