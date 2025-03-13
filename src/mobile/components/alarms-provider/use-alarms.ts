import { useContext } from 'react';
import { AlarmsContext } from './alarms.context';

export const useAlarms = () => useContext(AlarmsContext);
