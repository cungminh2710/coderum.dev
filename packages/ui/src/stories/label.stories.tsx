import { fn } from '@storybook/test';

import { Label } from '../label';
import { Checkbox } from '../checkbox';
import { Meta, StoryObj } from '@storybook/react';
function LabelDemo() {
	return (
		<div>
			<div className='flex items-center space-x-2'>
				<Checkbox id='terms' />
				<Label htmlFor='terms'>Accept terms and conditions</Label>
			</div>
		</div>
	);
}

const meta = {
	title: 'CODERUM/Label',
	component: LabelDemo,
	parameters: {
		// Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
		layout: 'centered',
	},
	// This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
	tags: ['autodocs'],

	// Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
	args: { onClick: fn() },
} satisfies Meta<typeof LabelDemo>;
export default meta;
type Story = StoryObj<typeof meta>;

export const LabelExample: Story = {
	args: {
		htmlFor: 'terms',
	},
};
