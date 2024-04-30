import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Button } from '../button';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
	title: 'Coderum/Button',
	component: Button,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	argTypes: {},
	// Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
	args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
	args: {
		variant: 'default',
		children: <>Button</>,
	},
};

export const Secondary: Story = {
	args: {
		variant: 'secondary',
		children: <>Button</>,
	},
};

export const Destructive: Story = {
	args: {
		variant: 'destructive',
		children: <>Button</>,
	},
};

export const Outline: Story = {
	args: {
		variant: 'outline',
		children: <>Button</>,
	},
};

export const Ghost: Story = {
	args: {
		variant: 'ghost',
		children: <>Button</>,
	},
};
