import { } from 'react-aria-components';

import { Card } from 'compositions';
import { Tag } from 'primitives';
import { Flex } from 'layout';
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
        asset={<IconSettings size="32" />}
        direction="horizontal"
        padding="600"
        variant="stroke"
      >
        <div
          style={{
            padding: 'var(--sds-size-space-400)'
          }}
        >
          Preferences
        </div>
        <div
          style={{
            padding: 'var(--sds-size-space-800)'
          }}
        >
          <div
            style={{
              marginBottom: 'var(--sds-size-space-800)'
            }}
          >
            <Flex
            gap="300"
            wrap
          >
              <Tag
                onRemove={function Hi() { }}
                scheme="brand"
                variant="secondary"
              >
                Notification
              </Tag>

              <Tag
                onRemove={function Hi() { }}
                scheme="brand"
                variant="secondary"
              >
                Dark mode
              </Tag>
            </Flex>
          </div>
        </div>
      </Card>
    </div>
);

}

export default Baseline;