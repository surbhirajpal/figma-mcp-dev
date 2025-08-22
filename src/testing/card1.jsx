import React from "react";
import { Card, ReviewCard, ProductInfoCard, StatsCard, TestimonialCard } from "../ui/compositions";
import { IconStar } from "../ui/icons/IconStar";
import { Button, ButtonGroup, Tag, TextHeading, TextSubheading, Text, TextSmall } from "../ui/primitives";

export default function Card1() {
	return (
		<Card variant="stroke" padding="600" direction="vertical">
			<TextHeading>Card Title</TextHeading>
			<TextSubheading>Subheading</TextSubheading>
			<Text lineHeight="body">This is a card body text. It uses the Inter font and follows the Figma design variables for color, size, and spacing.</Text>
			<div style={{ marginTop: 16 }}>
				<ButtonGroup align="end">
					<Button variant="primary">Primary Action</Button>
					<Button variant="neutral">Secondary Action</Button>
				</ButtonGroup>
			</div>
			<div style={{ marginTop: 16 }}>
				<Tag>Tag 1</Tag>
				<Tag>Tag 2</Tag>
			</div>
			<div style={{ marginTop: 16, display: "flex", alignItems: "center" }}>
				{[...Array(5)].map((_, i) => (
					<IconStar key={i} size="24" className="card-star" />
				))}
				<TextSmall style={{ marginLeft: 8 }}>4.5 (413)</TextSmall>
			</div>
		</Card>
	);
}
