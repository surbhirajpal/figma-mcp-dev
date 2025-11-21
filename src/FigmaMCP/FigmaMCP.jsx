import { useState } from 'react';

import { Card } from 'compositions';
import { CheckboxField, CheckboxGroup, Tag, TextHeading, Text, MenuHeader } from 'primitives';
import { IconSettings } from 'icons';

import './FigmaMCP.css';

const FigmaMCP = () => {
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(true);
  const [autoSave, setAutoSave] = useState(false);

  return (
    <div className="figma-mcp-container">
      <Card 
        padding="600"
        variant="stroke"
      >
        <div className="preferences-content">
          <div className="preferences-header">
            <IconSettings size="32" />
            <TextHeading>Preferences</TextHeading>
          </div>
          
          <div className="preferences-menu">
            <MenuHeader>
              <div className="tag-group">
                <Tag scheme="neutral" variant="secondary" onRemove={() => console.log('Notification removed')}>
                  Notification
                </Tag>
                <Tag scheme="neutral" variant="secondary" onRemove={() => console.log('Dark Mode removed')}>
                  Dark Mode
                </Tag>
              </div>
            </MenuHeader>
            
            <div className="menu-separator">
              <div className="rule" />
            </div>
            
            <div className="checkbox-group-container">
              <CheckboxGroup>
                <CheckboxField 
                  isSelected={notifications}
                  onChange={setNotifications}
                  label="Enable Notifications"
                  description="Receive alerts and updates in real time."
                />
                <CheckboxField 
                  isSelected={darkMode}
                  onChange={setDarkMode}
                  label="Dark Mode"
                  description="Switch to a dark color theme for better focus."
                />
                <CheckboxField 
                  isSelected={autoSave}
                  onChange={setAutoSave}
                  label="Auto Save"
                  description="Automatically save your work every 10 minutes."
                />
              </CheckboxGroup>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default FigmaMCP;