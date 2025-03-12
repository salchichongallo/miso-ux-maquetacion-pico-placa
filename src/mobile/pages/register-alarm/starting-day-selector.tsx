import { useState } from 'react';
import { Radio, RadioGroup } from '../../../components/radio';
import { TimePicker } from '../../../components/time-picker/time-picker';
import { Modal } from '../../../components/modal/modal';
import { Button } from '../../../components/button/button';
import { MdCheck } from 'react-icons/md';

export function StartingDaySelector() {
  const [day, setDay] = useState<string>(null!);
  const [confirming, setConfirming] = useState(false);
  const [succeeded, setSucceeded] = useState(false);

  return (
    <div className="mt-4">
      <p className="text--label-large mb-1">Selecciona el día de inicio</p>
      <RadioGroup
        value={day}
        onChange={setDay}
        label="Selecciona el día de inicio"
        name="startingDay"
      >
        <Radio value="sunday">Domingo</Radio>
        <Radio value="monday">Lunes</Radio>
      </RadioGroup>

      <TimePicker
        title="Indica una hora"
        isOpen={!confirming && day !== null && !succeeded}
        initialTime={null}
        onOpenChange={isOpen => {
          if (!isOpen) {
            setDay(null!);
          }
        }}
        onOk={() => setConfirming(true)}
      />
      <Modal
        isOpen={confirming && !succeeded}
        isDismissable={false}
        title="Confirmar creación de alarma"
        description="Inicio de la semana - 7:00 am"
        style={{ maxWidth: '19.5rem' }}
        buttons={[
          () => (
            <Button
              onPress={() => {
                setDay('sunday');
                setConfirming(false);
              }}
              text="No"
              variant="inline"
            />
          ),
          () => (
            <Button
              onPress={() => {
                setConfirming(false);
                setSucceeded(true);
              }}
              text="Sí"
            />
          ),
        ]}
      />
      <Modal
        isOpen={succeeded}
        isDismissable={false}
        title="Registro Exitoso"
        icon={MdCheck}
        style={{ maxWidth: '19.5rem' }}
        buttons={[
          () => (
            <Button onPress={() => alert('TODO: redirect')} text="Continuar" />
          ),
        ]}
      />
    </div>
  );
}
