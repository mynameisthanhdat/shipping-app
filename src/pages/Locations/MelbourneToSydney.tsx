import React from 'react';
import InterstateRoutePage from '../../components/Locations/InterstateRoutePage';
import { MELBOURNE_TO_SYDNEY_DATA } from '../../mocks/locations/melbourneToSydney';
import { PATHS } from '../../routes/paths';

const MelbourneToSydney: React.FC = () => (
  <InterstateRoutePage
    fromPath={PATHS.locationsMelbourne}
    data={MELBOURNE_TO_SYDNEY_DATA}
  />
);

export default MelbourneToSydney;
