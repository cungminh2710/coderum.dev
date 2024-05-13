import type { Meta, StoryObj } from '@storybook/react';
import { CalendarDays } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '../avatar';
import { Button } from '../button';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '../hovercard';

function HoverCardDemo() {
	return (
		<HoverCard>
			<HoverCardTrigger asChild>
				<Button
					variant='link'
					className='text-foreground'
				>
					@Coderum.dev
				</Button>
			</HoverCardTrigger>
			<HoverCardContent
				className='w-80'
				align='center'
			>
				<div className='flex justify-between space-x-4'>
					<Avatar>
						<AvatarImage src='https://github.com/vercel.png' />
						<AvatarFallback>VC</AvatarFallback>
					</Avatar>
					<div className='space-y-1'>
						<h4 className='text-sm font-semibold'>@Coderum.dev</h4>
						<p className='text-sm'>A blogging platform for coders – created and maintained by @Coderum.dev.</p>
						<div className='flex items-center pt-2'>
							<CalendarDays className='mr-2 h-4 w-4 opacity-70' />{' '}
							<span className='text-muted-foreground text-xs'>Joined December 2024</span>
						</div>
					</div>
				</div>
			</HoverCardContent>
		</HoverCard>
	);
}

const meta = {
	title: 'Coderum/HoverCard',
	component: HoverCardDemo,
	parameters: {
		layout: 'centered',
	},
} satisfies Meta<typeof HoverCardDemo>;
export default meta;

type Story = StoryObj<typeof meta>;

export const HoverCardExample: Story = {};
