import { AlarmPictogram } from './alarm-pictogram';

export function AlarmCard() {
  return (
    <section
      className="flex justify-between items-center rounded-3xl pl-6 pr-3"
      style={{
        height: '10.4375rem',
        background: 'var(--surface-container-low)',
      }}
    >
      <div style={{ color: 'var(--on-surface)' }}>
        <h2 className="text--body-large mb-1">
          <span className="text--headline-large">30 </span>{' '}
          <span className="text--title-large">minutos</span>
        </h2>
        <p className="text--body-large mt-1">Antes de iniciar</p>
      </div>
      <AlarmPictogram />
    </section>
  );
}
