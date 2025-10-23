import { } from 'react-aria-components';

import { Card } from '../ui/compositions';
import { Text, TextHeading, Button, ButtonGroup, Tag } from '../ui/primitives';
import { IconEdit } from '../ui/icons';

const CardBody = ({ className }) => {
  return (
    <div className="card-body" data-node-id="3134:2686">
      <div className="card-section" data-node-id="3134:2656">
        <Text>
          The latest feature rollout has been successfully deployed to all environments. Users can now explore the new functionality without data loss.
        </Text>
      </div>
      <div className="card-info" data-node-id="3134:2666">
        <Text>Release by Dev Team</Text>
        <div className="card-tags" data-node-id="3134:2668">
          <Tag variant="secondary" scheme="positive">Live</Tag>
          <Tag variant="secondary">Update</Tag>
          <Tag variant="secondary">Release</Tag>
        </div>
      </div>
    </div>
  );
};

import './FigmaMCP.css';

const FigmaMCP = () => {
  return (
    <div className="figma-mcp-container">
      <div className="card-wrapper">
        <Card 
          asset={<IconEdit size="24" />} 
          direction="horizontal"
          padding="600"
          variant="stroke"
          data-node-id="3134:2594"
        >
          <TextHeading>New Feature Deployed</TextHeading>
          <CardBody />
          <ButtonGroup align="end">
            <Button onPress={() => {}} variant="primary">
              Open Details
            </Button>
          </ButtonGroup>
        </Card>
      </div>
    </div>
  );
}

export default FigmaMCP;