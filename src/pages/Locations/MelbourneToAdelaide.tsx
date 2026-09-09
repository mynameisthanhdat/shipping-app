import React from 'react';
import InterstateRoutePage from '../../components/Locations/InterstateRoutePage';
import { MELBOURNE_TO_ADELAIDE_DATA } from '../../mocks/locations/melbourneToAdelaide';
import { PATHS } from '../../routes/paths';

const MelbourneToAdelaide: React.FC = () => (
  <InterstateRoutePage
    fromPath={PATHS.locationsMelbourne}
    data={MELBOURNE_TO_ADELAIDE_DATA}
  />
);

export default MelbourneToAdelaide;
