import { } from 'react-aria-components';

import { Card } from 'compositions';
import { Tag, CheckboxField } from 'primitives';
import { IconSettings, IconX } from 'icons';

import './Baseline.css';

const Baseline = () => {
  return (
    <Card
    align="start"
    asset={<IconSettings size="32" />}
    direction="horizontal"
    padding="600"
    variant="stroke"
  >
    <div>
      Preferences
    </div>
    <div>
    <Tag
        scheme="neutral"
        variant="primary"
      >
        Notifications
        <IconX name="IconX"/>
      </Tag>
      <Tag
        scheme="neutral"
        variant="primary"
      >
        Dark Mode
        <IconX name="IconX"/>
      </Tag>
    </div>
    <CheckboxField
      description="Receive alerts and updates in real time."
      isSelected
      label="Enable Notifications"
      onChange={function Hi(){}}
  />
  <CheckboxField
      description="Switch to a dark color theme for better focus."
      isSelected
      label="Dark Mode"
      onChange={function Hi(){}}
  />
  <CheckboxField
      description="Automatically save your work every 10 minutes."
      isSelected
      label="Auto-Save"
      onChange={function Hi(){}}
  />
  </Card>
  );
}

export default Baseline;
 