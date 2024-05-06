import type { Meta, StoryObj } from '@storybook/react';

import { Input } from '../input';

const meta = {
	title: 'Coderum/Input',
	component: Input,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	argTypes: {},
	args: {},
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		placeholder: 'Type something...',
	},
};

export const Disabled: Story = {
	args: {
		disabled: true,
		placeholder: 'Type something...',
	},
};

export const WithValue: Story = {
	args: {
		value: 'Hello, world!',
	},
};
