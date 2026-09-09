import React from 'react';
import InterstateRoutePage from '../../components/Locations/InterstateRoutePage';
import { MELBOURNE_TO_DARWIN_DATA } from '../../mocks/locations/melbourneToDarwin';
import { PATHS } from '../../routes/paths';

const MelbourneToDarwin: React.FC = () => (
  <InterstateRoutePage
    fromPath={PATHS.locationsMelbourne}
    data={MELBOURNE_TO_DARWIN_DATA}
  />
);

export default MelbourneToDarwin;
