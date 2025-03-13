import { createContext } from 'react';

export type Alarm = {
  id: string;
  type: string;
};

type AlarmsState = {
  alarms: Alarm[];
  setAlarms: React.Dispatch<React.SetStateAction<Alarm[]>>;
};

export const AlarmsContext = createContext<AlarmsState>(null!);
