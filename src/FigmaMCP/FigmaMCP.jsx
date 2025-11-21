import { Card } from 'compositions';
import { Text, TextHeading, Button, ButtonGroup, Tag } from 'primitives';
import { IconEdit } from 'icons';
import { Flex } from 'layout';

import './FigmaMCP.css';

const FigmaMCP = () => {
  return (
    <Card 
      asset={<IconEdit size="24" />} 
      direction="horizontal"
      className="figma-mcp-card"
    >
      <TextHeading>New Feature Deployed</TextHeading>
      
      <Flex direction="column" gap="400" className="card-body-section-1">
        <Text>
          The latest feature rollout has been successfully deployed to all environments. 
          Users can now explore the new functionality without data loss.
        </Text>
      </Flex>
      
      <Flex direction="column" gap="200">
        <Text>Release by Dev Team</Text>
        <Flex direction="row" gap="200">
          <Tag variant="secondary" scheme="positive">Live</Tag>
          <Tag variant="secondary">Update</Tag>
          <Tag variant="secondary">Release</Tag>
        </Flex>
      </Flex>
      
      <ButtonGroup align="end">
        <Button onPress={() => {}} variant="primary">
          Open Details
        </Button>
      </ButtonGroup>
    </Card>
  );
}

export default FigmaMCP;