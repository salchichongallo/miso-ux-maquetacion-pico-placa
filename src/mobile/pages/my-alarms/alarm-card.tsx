import { Alarm } from '../../components/alarms-provider';

import { AlarmPictogram } from './alarm-pictogram';

type Props = {
  alarm: Alarm;
};

export function AlarmCard({ alarm: { type } }: Props) {
  return (
    <section
      className="flex justify-between items-center rounded-3xl pl-6 pr-3 gap-4"
      style={{
        minHeight: '10.4375rem',
        color: 'var(--on-surface)',
        background: 'var(--surface-container-low)',
      }}
    >
      {type === 'previous-day' && (
        <div>
          <h2 className="text--body-large mb-1">
            <span className="text--headline-large">7:00 </span>{' '}
            <span className="text--title-large">a. m.</span>
          </h2>
          <p className="text--body-large mt-1">Día anterior</p>
        </div>
      )}

      {type === 'before-begin' && (
        <div>
          <h2 className="text--body-large mb-1">
            <span className="text--headline-large">30 </span>{' '}
            <span className="text--title-large">minutos</span>
          </h2>
          <p className="text--body-large mt-1">Antes de iniciar</p>
        </div>
      )}

      {(type === 'sunday' || type === 'monday') && (
        <div>
          <h2 className="text--body-large mb-1">
            <span className="text--headline-large">7:00 </span>{' '}
            <span className="text--title-large">a. m.</span>
          </h2>
          <p className="text--body-large mt-1">
            Inicio de semana ({type === 'monday' ? 'Lunes' : 'Domingo'})
          </p>
        </div>
      )}

      <AlarmPictogram />
    </section>
  );
}
