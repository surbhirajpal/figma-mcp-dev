import React from 'react';
import { IconStar } from './ui/icons';
import { TagToggle, ButtonGroup, Button, TagToggleGroup, TagToggleList } from './ui/primitives';
import { Card } from './ui/compositions';
import './CardScreen.css';

export default function CardScreen() {
  return (
    <div className="card-root">
      <Card>
        <div className="card-inner">
          <h2 className="card-title">Title</h2>
          <div className="card-section">
            <div className="card-rating-row">
              <div className="card-stars">
                <IconStar size="24" className="card-star" />
                <IconStar size="24" className="card-star" />
                <IconStar size="24" className="card-star" />
                <IconStar size="24" className="card-star" />
                <IconStar size="24" className="card-star" />
              </div>
              <span className="card-rating-count">4.5 (413)</span>
            </div>
            <p className="card-desc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </p>
          </div>
          <p className="card-subtitle">Subtitle</p>
          <TagToggleGroup className="card-tags">
            <TagToggleList>
              <TagToggle>Item 1</TagToggle>
              <TagToggle>Item 2</TagToggle>
              <TagToggle>Item 3</TagToggle>
            </TagToggleList>
          </TagToggleGroup>
          <div className="card-actions">
            <ButtonGroup align="end">
              <Button onPress={() => {}} variant="primary">
                Button
              </Button>
            </ButtonGroup>
          </div>
        </div>
      </Card>
    </div>
  );
}
