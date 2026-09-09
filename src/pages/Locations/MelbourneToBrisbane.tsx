import React from 'react';
import InterstateRoutePage from '../../components/Locations/InterstateRoutePage';
import { MELBOURNE_TO_BRISBANE_DATA } from '../../mocks/locations/melbourneToBrisbane';
import { PATHS } from '../../routes/paths';

const MelbourneToBrisbane: React.FC = () => (
  <InterstateRoutePage
    fromPath={PATHS.locationsMelbourne}
    data={MELBOURNE_TO_BRISBANE_DATA}
  />
);

export default MelbourneToBrisbane;
