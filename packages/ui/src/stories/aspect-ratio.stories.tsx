import { AspectRatio } from '@radix-ui/react-aspect-ratio';
import { Meta, StoryObj } from '@storybook/react';

function AspectRatioDemo() {
	return (
		<div className='shadow-blackA4 w-[300px] overflow-hidden rounded-md shadow-[0_2px_10px]'>
			<AspectRatio
				ratio={16 / 9}
				className='bg-muted'
			>
				<img
					className='h-full w-full object-cover'
					src='https://images.unsplash.com/photo-1535025183041-0991a977e25b?w=300&dpr=2&q=80'
					alt='Landscape photograph by Tobias Tullius'
				/>
			</AspectRatio>
		</div>
	);
}

const meta = {
	title: 'Coderum/Aspect Ratio',
	component: AspectRatioDemo,
	parameters: {
		layout: 'centered',
	},
} satisfies Meta<typeof AspectRatioDemo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AspectRatioStory: Story = {};
