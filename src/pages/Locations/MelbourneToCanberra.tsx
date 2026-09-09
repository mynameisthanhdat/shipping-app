import React from 'react';
import InterstateRoutePage from '../../components/Locations/InterstateRoutePage';
import { MELBOURNE_TO_CANBERRA_DATA } from '../../mocks/locations/melbourneToCanberra';
import { PATHS } from '../../routes/paths';

const MelbourneToCanberra: React.FC = () => (
  <InterstateRoutePage
    fromPath={PATHS.locationsMelbourne}
    data={MELBOURNE_TO_CANBERRA_DATA}
  />
);

export default MelbourneToCanberra;
