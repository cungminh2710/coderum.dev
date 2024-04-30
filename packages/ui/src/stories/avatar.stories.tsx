import { Avatar, AvatarImage, AvatarFallback } from '../avatar';
import { Meta, StoryObj } from '@storybook/react';

function AvatarDemo() {
	return (
		<Avatar>
			<AvatarImage
				src='https://avatars.githubusercontent.com/u/8063319?v=4'
				alt='@cungminh2710'
			/>
			<AvatarFallback>MC</AvatarFallback>
		</Avatar>
	);
}
const meta = {
	title: 'Coderum/Avatar',
	component: AvatarDemo,
	parameters: {
		layout: 'centered',
	},
} satisfies Meta<typeof AvatarDemo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AvatarStory: Story = {};
