import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Switch } from '../switch';
import { Label } from '../label';

const meta = {
	title: 'Coderum/Switch',
	component: Switch,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	argTypes: {},
	args: {
		disabled: false,
		onChange: fn(),
	},
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Checked: Story = {};

export const WithLabel: Story = {
	render: (args) => (
		<div className='flex items-center space-x-2'>
			<Switch
				{...args}
				id='airplane-mode'
			/>
			<Label htmlFor='airplane-mode'>Airplane Mode</Label>
		</div>
	),
};

export const Disabled: Story = {
	args: {
		disabled: true,
	},
};
