import { MdError } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

import { Modal } from '../../components/modal/modal';
import { Button } from '../../components/button/button';

type Props = {
  title?: string;
  description?: string;
  cancelText?: string;
  confirmText?: string;
};

export function PreventNavigateModal({
  title = '¿Desea salir?',
  description = 'Perderá su progreso.',
  cancelText = 'Cancelar',
  confirmText = 'Salir',
}: Props) {
  const navigate = useNavigate();
  return (
    <Modal
      title={title}
      description={description}
      icon={MdError}
      buttons={[
        close => <Button onPress={close} text={cancelText} variant="inline" />,
        close => (
          <Button
            text={confirmText}
            onPress={() => {
              close();
              navigate(-1);
            }}
          />
        ),
      ]}
    />
  );
}
