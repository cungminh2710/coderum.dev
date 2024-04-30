import { Terminal } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '../alert';
import { Meta, StoryObj } from '@storybook/react';

function AlertPreview() {
	return (
		<Alert>
			<Terminal className='h-4 w-4' />
			<AlertTitle>Heads up!</AlertTitle>
			<AlertDescription>You can add components to your app using the cli.</AlertDescription>
		</Alert>
	);
}

const meta = {
	title: 'Coderum/Alert',
	component: AlertPreview,
	parameters: {
		layout: 'centered',
	},
} satisfies Meta<typeof AlertPreview>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AlertStory: Story = {};
