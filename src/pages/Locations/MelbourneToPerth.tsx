import React from 'react';
import InterstateRoutePage from '../../components/Locations/InterstateRoutePage';
import { MELBOURNE_TO_PERTH_DATA } from '../../mocks/locations/melbourneToPerth';
import { PATHS } from '../../routes/paths';

const MelbourneToPerth: React.FC = () => (
  <InterstateRoutePage
    fromPath={PATHS.locationsMelbourne}
    data={MELBOURNE_TO_PERTH_DATA}
  />
);

export default MelbourneToPerth;
