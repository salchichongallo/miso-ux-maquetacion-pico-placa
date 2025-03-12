import { Radio, RadioGroup } from '../../../components/radio';

type Props = {
  value: string;
  onChange: (value: string) => void;
};

export function NotificationTypesSelector({ value, onChange }: Props) {
  return (
    <div className="mt-4">
      <p className="text--label-large mb-1">
        Selecciona el tipo de notificación
      </p>
      <RadioGroup
        value={value}
        onChange={onChange}
        label="Selecciona tu vehículo"
        name="notificationType"
      >
        <Radio value="previous-day">El día anterior</Radio>
        <Radio value="before-begin">Antes de iniciar</Radio>
        <Radio value="start-of-week">Al inicio de la semana</Radio>
      </RadioGroup>
    </div>
  );
}
