import { } from 'react-aria-components';

import { Card } from 'compositions';
import { TextSubheading, Tag, CheckboxGroup, CheckboxField} from 'primitives';
import {IconStar, IconSettings } from 'icons';

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
    <div style={{display: 'flex', flexDirection: 'row', gap: '16px', alignItems: 'center'}}>
      <div>
        <IconSettings size="32" />
      </div>

       <div>
        <div style={{display: 'flex', flexDirection: 'column',}} >
            
           <TextSubheading>Preferences</TextSubheading>
           <div style={{display: 'flex', flexDirection: 'row', gap: '16px', alignItems: 'center'}}>
             
             <div >
              <Tag
              onRemove={function Hi(){}}
              scheme="neutral"
              variant="primary"
            >
              Notification
            </Tag>
            <Tag
              onRemove={function Hi(){}}
              scheme="neutral"
              variant="primary"
            >
              Dark Mode
            </Tag>

<hr></hr>

                   <div>
            <CheckboxGroup
                  onChange={function Hi(){}}
                >
                  <CheckboxField value="one">
                   Enable Notifications
                  </CheckboxField>
                  <CheckboxField value="two">
                    Value two
                  </CheckboxField>
                  <CheckboxField value="three">
                    Value three
                  </CheckboxField>
                </CheckboxGroup>
          </div>
              </div>
          


   
    
           </div>

       </div>

       </div>
    </div>
  </Card>
</div>
  );
}

export default Baseline;