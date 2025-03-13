import { useState } from 'react';
import { Alarm, AlarmsContext } from './alarms.context';

type Props = {
  children: React.ReactNode;
};

export function AlarmsProvider({ children }: Props) {
  const [alarms, setAlarms] = useState<Alarm[]>([]);

  return (
    <AlarmsContext.Provider value={{ alarms, setAlarms }}>
      {children}
    </AlarmsContext.Provider>
  );
}
