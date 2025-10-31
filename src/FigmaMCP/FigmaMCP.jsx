import { } from 'react-aria-components';

import { Card } from 'compositions';
import { Text, TextHeading, Button, ButtonGroup, Tag } from 'primitives';
import { IconEdit } from 'icons';

import './FigmaMCP.css';

const FigmaMCP = () => {
  return (
    <div>  
      <Card asset={<IconEdit size="24" />} direction="horizontal">
        <TextHeading>New Feature Deployed</TextHeading>
        <div className="card-section">
          <Text>
            The latest feature rollout has been successfully deployed to all environments. Users can now explore the new functionality without data loss.
          </Text>
        </div>
        <div className="card-section">
          <Text>Release by Dev Team</Text>
          <div className="card-tags">
            <Tag variant="secondary" scheme="positive">
              Live
            </Tag>
            <Tag variant="secondary">Update</Tag>
            <Tag variant="secondary">Release</Tag>
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