import { } from 'react-aria-components';

import { Card } from 'compositions';
import { TextHeading, Tag } from 'primitives';
import { IconSettings } from 'icons';

import './Baseline.css';

const Baseline = () => {
  return (
    <div
      style={{
        maxWidth: '600px',
        padding: 'var(--sds-size-space-800)'
      }}
    >
      <Card
        align="start"
        direction="vertical"
        padding="600"
        variant="stroke"
      >
        <div>
          <IconSettings size="24" /><TextHeading>Preferences</TextHeading>
          <Tag
            scheme="brand"
            removable="true"
            variant="primary"
          >
            Sample Tag
          </Tag>
          <Tag
            removable="true"
            scheme="brand"
            variant="primary"
          >
            Sample Tag
          </Tag>

        </div>
      </Card>
    </div>
  );
}

export default Baseline;