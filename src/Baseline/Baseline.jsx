import { } from 'react-aria-components';

import {Card} from 'compositions';
import {Tag, CheckboxField} from 'primitives';
import {IconSettings} from 'icons';

import './Baseline.css';

const Baseline = () => {
  return (
    <div>  
        <div
  style={{
    maxWidth: '600px',
    padding: 'var(--sds-size-space-800)'
  }}
>
  <Card
    align="start"
    asset={<IconSettings size="32" />}
    direction="vertical"
    padding="600"
    variant="stroke"
  >
    <div>
      This is card content that can be customized using the controls below.
    </div>

    <Tag
      scheme="neutral"
      variant="primary"
    >
      Sample Tag
    </Tag>
      <Tag
      scheme="neutral"
      variant="primary"
    >
      Sample Tag
    </Tag>

    
<CheckboxField
  description="This is a checkbox description"
  isSelected
  label="This is a checkbox"
  onChange={function Hi(){}}
/>
<CheckboxField
  description="This is a checkbox description"
  isSelected
  label="This is a checkbox"
  onChange={function Hi(){}}
/>
  </Card>
</div>
    </div>
  );
}

export default Baseline;