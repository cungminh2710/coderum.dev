import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Badge } from '../badge';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
	title: 'Coderum/Badge',
	component: Badge,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	argTypes: {},
	// Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
	args: { onClick: fn() },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
	args: {
		variant: 'default',
		children: <>Badge</>,
	},
};

export const Secondary: Story = {
	args: {
		variant: 'secondary',
		children: <>Badge</>,
	},
};

export const Destructive: Story = {
	args: {
		variant: 'destructive',
		children: <>Badge</>,
	},
};

export const Outline: Story = {
	args: {
		variant: 'outline',
		children: <>Badge</>,
	},
};
