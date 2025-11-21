import { } from 'react-aria-components';

import { Card } from 'compositions';
import { Text, TextHeading, Button, ButtonGroup, Tag } from 'primitives';
import { IconEdit } from 'icons';

import './FigmaMCP.css';

const FigmaMCP = () => {
  return (
    <div>  
      <Card 
        asset={<IconEdit size="24" />} 
        direction="horizontal"
        variant="stroke"
        data-node-id="3134:2594"
      >
        <TextHeading>New Feature Deployed</TextHeading>
        
        <div className="card-body" data-node-id="3134:2686">
          <div className="section1" data-node-id="3134:2656">
            <Text data-node-id="3134:2665">
              The latest feature rollout has been successfully deployed to all environments. Users can now explore the new functionality without data loss.
            </Text>
          </div>
          
          <div className="section2" data-node-id="3134:2666">
            <Text data-node-id="3134:2667">Release by Dev Team</Text>
            <div className="tags" data-node-id="3134:2668">
              <Tag variant="secondary" scheme="positive" data-node-id="3134:2669">
                Live
              </Tag>
              <Tag variant="secondary" data-node-id="3134:2670">
                Update
              </Tag>
              <Tag variant="secondary" data-node-id="3134:2671">
                Release
              </Tag>
            </div>
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