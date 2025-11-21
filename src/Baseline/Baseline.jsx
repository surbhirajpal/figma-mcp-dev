import { } from 'react-aria-components';

import { Card } from 'compositions';
import { TextHeading, Button, Tag, TextCode } from 'primitives';
import { IconEdit } from 'icons';

import './Baseline.css';

const Baseline = () => {
  return (
    <div>  
        {/* Baseline Component */}
          <Card
    align="start"
    asset={<IconEdit size="32" />}
    direction="horizontal"
    padding="600"
    variant="stroke"
  >
          <TextHeading>Text Heading</TextHeading>
          <div class="content">
            <div class="sections1">
              <TextCode>Test COde Test COde Test COdeTest COde est COde Test COde Test COdeTest COde est COde Test COde Test COdeTest COdeest COde Test COde Test COdeTest COdeest COde Test COde Test COdeTest COde</TextCode>
            </div>
            <div class="sections2">
                    <Tag
        scheme="neutral"
        variant="primary"
      >
        Neutral
      </Tag>
            <Tag
        scheme="neutral"
        variant="primary"
      >
        Test Tag
      </Tag>
            <Tag
        scheme="neutral"
        variant="primary"
      >
        Test Figma
      </Tag>
            </div>
            <Button variant="primary">
            Primary Button
</Button>
          </div>

  </Card>
    </div>
  );
}

export default Baseline;