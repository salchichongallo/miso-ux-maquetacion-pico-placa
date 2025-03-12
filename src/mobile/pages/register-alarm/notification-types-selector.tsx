import { Radio, RadioGroup } from '../../../components/radio';

type Props = {
  onChange: (value: string) => void;
};

export function NotificationTypesSelector({ onChange }: Props) {
  return (
    <div className="mt-4">
      <p className="text--label-large mb-1">
        Selecciona el tipo de notificación
      </p>
      <RadioGroup
        label="Selecciona tu vehículo"
        name="vehicle"
        onChange={onChange}
      >
        <Radio value="previous-day">El día anterior</Radio>
        <Radio value="before-begin">Antes de iniciar</Radio>
        <Radio value="start-of-week">Al inicio de la semana</Radio>
      </RadioGroup>
    </div>
  );
}
