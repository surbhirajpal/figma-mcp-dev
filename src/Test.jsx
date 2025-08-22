import React from 'react';
import { Notification } from './ui/primitives/Notification/Notification';
import { ButtonDanger } from './ui/primitives/Button/Button';
import { TextStrong } from './ui/primitives/Text/Text';
import { Text } from './ui/primitives/Text/Text';
import { IconInfo } from './ui/icons/IconInfo';

export default function Test() {
  return (
    <Notification icon={<IconInfo size="20" />} isDismissible variant="alert">
      <TextStrong>Components are low in stock</TextStrong>
      <Text>
        Hurry! Stock is running low on our website for Figma components. Don't
        miss out on getting your hands on these popular items before they sell
        out. Shop now to secure your favorite Figma components before they're
        gone. Grab them while you still can!
      </Text>
      <ButtonDanger onPress={() => {}} size="small">
        Browse components
      </ButtonDanger>
    </Notification>
  );
}
