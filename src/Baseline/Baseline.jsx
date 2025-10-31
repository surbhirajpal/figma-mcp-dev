import { } from 'react-aria-components';

import { Card } from 'compositions';
import { Tag, CheckboxField } from 'primitives';
import {IconSettings } from 'icons';
import { Grid } from 'layout';

import './Baseline.css';

const Baseline = () => {
  return (
    <div>  
        {/* Baseline Component */}
  <Card
    align="start"
    heading="This design system has transformed our workflow completely. The components are intuitive and well-designed."
    asset={<IconSettings size="32" />}
    direction="vertical"
    padding="600"
    variant="stroke"
  >
    <div
      style={{
        display: 'flex'}}
    >
      <Tag
        onRemove={function Hi(){}}
        id="NotificationID"
      >
        Notification
        </Tag>

          
      <Tag
        onRemove={function Hi(){}}
        id="DarkModeID"
      >
        DarkMode
        </Tag>
    </div>

    <div>
      <CheckboxField
  description="Receive alerts and updates in real time."
  isSelected
  label="Enable notifications"
  onChange={function Hi(){}}
/>

      <CheckboxField
  description="Receive alerts and updates in real time."
  isSelected
  label="Enable notifications"
  onChange={function Hi(){}}
/>

      <CheckboxField
  description="Receive alerts and updates in real time."
  isSelected
  label="Enable notifications"
  onChange={function Hi(){}}
/>
    </div>
  </Card>
    </div>
  );
}

export default Baseline;