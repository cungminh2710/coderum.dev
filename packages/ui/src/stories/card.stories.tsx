import { Meta, StoryObj } from '@storybook/react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../card';
import { Label } from '../label';
import { Input } from '../input';
import { Button } from '../button';

function CardDemo() {
	return (
		<Card className='w-[360px]'>
			<CardHeader className='text-center'>
				<CardTitle className='text-3xl font-bold'>Login</CardTitle>
				<CardDescription>Enter credentials to access your account.</CardDescription>
			</CardHeader>
			<CardContent>
				<form>
					<div className='mb-2 flex flex-col gap-2'>
						<Label>Username or email</Label>
						<Input className='rounded shadow-sm focus-visible:ring-0 focus-visible:ring-offset-0' />
					</div>
					<div className='mb-2 flex flex-col gap-2'>
						<Label>Password</Label>
						<Input className='rounded shadow-sm focus-visible:ring-0 focus-visible:ring-offset-0' />
					</div>
					<a
						href='/'
						className='text-muted-foreground text-sm'
					>
						Forgot password?
					</a>
				</form>
			</CardContent>
			<CardFooter className='flex-col gap-2'>
				<Button className='w-full'>Submit</Button>
				<Button
					className='w-full'
					variant='secondary'
				>
					Sign Up
				</Button>
			</CardFooter>
		</Card>
	);
}

const meta = {
	title: 'Coderum/Card',
	component: CardDemo,
	parameters: {
		layout: 'centered',
	},
} satisfies Meta<typeof CardDemo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CardExample: Story = {};
