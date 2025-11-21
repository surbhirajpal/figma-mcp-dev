import { } from 'react-aria-components';

import { Card } from 'compositions';
import { Text, TextHeading, Button, ButtonGroup, Tag } from 'primitives';
import { IconEdit } from 'icons';

import './FigmaMCP.css';

const FigmaMCP = () => {
  return (
    <div>  
        {/* FigmaMCP Component */}
        <Card asset={<IconEdit size="24" />} direction="horizontal" padding="600">
          <TextHeading>New Feature Deployed</TextHeading>
          
          <div className="section1">
            <Text className="text-secondary">
              The latest feature rollout has been successfully deployed to all environments. Users can now explore the new functionality without data loss.
            </Text>
          </div>
          
          <div className="section2">
            <Text>Release by Dev Team</Text>
            <div className="tags">
              <Tag variant="secondary" scheme="positive">
                Live
              </Tag>
              <Tag variant="secondary" scheme="neutral">
                Update
              </Tag>
              <Tag variant="secondary" scheme="neutral">
                Release
              </Tag>
            </div>
          </div>
          
          <ButtonGroup align="end">
            <Button onPress={() => {}} variant="primary">
              Open Details
            </Button>
          </ButtonGroup>
        </Card>
    </div>
  );
}

export default FigmaMCP;