import { } from 'react-aria-components';

import { Card } from 'compositions';
import { Text, TextHeading, Button, ButtonGroup, /* assuming a generic separator not existing */ } from 'primitives';
import { Tag } from 'primitives';
import { Flex } from 'layout';
import { IconEdit } from 'icons';

import './FigmaMCP.css';

const FigmaMCP = () => {
  return (
    <div>
      <Card
        asset={<IconEdit size="24" />}
        direction="horizontal"
        padding="600"
        variant="stroke"
        align="start"
      >
        <TextHeading>New Feature Deployed</TextHeading>
        <Text lineHeight="body">The latest feature rollout has been successfully deployed to all environments. Users can now explore the new functionality without data loss.</Text>
        {/* Divider */}
        <div className="card-divider" aria-hidden="true" />
        {/* Tag after divider per Figma */}
        <div>
          <Flex><Tag scheme="positive" variant="secondary">Deployed</Tag> <Tag variant="secondary">Deployed</Tag><Tag variant="secondary">Deployed</Tag></Flex>
        </div>
        <ButtonGroup align="end">
          <Button onPress={() => { }} variant="primary">
            Open Details
          </Button>
        </ButtonGroup>
      </Card>
    </div>
  );
}

export default FigmaMCP;