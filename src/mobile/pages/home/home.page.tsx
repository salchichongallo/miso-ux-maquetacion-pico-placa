import { Divider } from '../../../components/divider/divider';
import { LabelField } from '../../../web/pages/detail/label-field';
import { AppHeader } from '../../components/app-header';

import { CarStatusCard } from './car-status-card';
import { Plate, Separator, WeekInfo } from './week-info';

export function HomePage() {
  return (
    <div>
      <AppHeader />
      <div className="flex flex-col gap-6 p-4">
        <CarStatusCard />
        <WeekInfo title="Hoy, martes 17 de enero">
          <div>
            <Plate digit="1" />
            <Separator />
            <Plate digit="2" />
            <Separator />
            <Plate digit="3" />
            <Separator />
            <Plate digit="4" />
          </div>
          <div className="flex items-center gap-2 mt-4">
            <LabelField label="Hora inicio" text="5:00 a. m." />
            <Divider className="w-4" />
            <LabelField label="Hora fin" text="8:00 p. m." />
          </div>
        </WeekInfo>
        <WeekInfo title="Mañana">
          <div>
            <Plate digit="6" />
            <Separator />
            <Plate digit="7" />
            <Separator />
            <Plate digit="8" />
            <Separator />
            <Plate digit="9" />
          </div>
          <div className="flex items-center gap-2 mt-4">
            <LabelField label="Hora inicio" text="5:00 a. m." />
            <Divider className="w-4" />
            <LabelField label="Hora fin" text="8:00 p. m." />
          </div>
        </WeekInfo>
      </div>
    </div>
  );
}
