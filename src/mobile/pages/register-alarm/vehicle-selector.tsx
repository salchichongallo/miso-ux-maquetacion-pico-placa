import { MdDirectionsCarFilled, MdTwoWheeler } from 'react-icons/md';

import { Radio, RadioGroup } from '../../../components/radio';

export function VehicleSelector() {
  return (
    <div>
      <p className="text--label-large mb-1">Selecciona tu vehículo</p>
      <RadioGroup
        label="Selecciona tu vehículo"
        name="vehicle"
        defaultValue="abc123"
      >
        <Radio value="abc123">
          <span
            className="flex items-center gap-2"
            style={{ color: 'var(--secondary)' }}
          >
            <MdDirectionsCarFilled size="1.5rem" color="currentColor" />
            <span>ABC123</span>
          </span>
        </Radio>
        <Radio value="xyz789">
          <span
            className="flex items-center gap-2"
            style={{ color: 'var(--secondary)' }}
          >
            <MdTwoWheeler size="1.5rem" color="currentColor" />
            <span>XYZ789</span>
          </span>
        </Radio>
      </RadioGroup>
    </div>
  );
}
