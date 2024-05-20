import { Meta, StoryObj } from '@storybook/react';
import { Button } from '../button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../card';
import { Input } from '../input';
import { Label } from '../label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../tabs';
function TabsDemo() {
	return (
		<Tabs
			defaultValue='account'
			className='w-[400px]'
		>
			<TabsList className='grid w-full grid-cols-2'>
				<TabsTrigger value='account'>Account</TabsTrigger>
				<TabsTrigger value='password'>Password</TabsTrigger>
			</TabsList>
			<TabsContent value='account'>
				<Card>
					<CardHeader>
						<CardTitle>Account</CardTitle>
						<CardDescription>Make changes to your account here. Click save when you're done.</CardDescription>
					</CardHeader>
					<CardContent className='space-y-2'>
						<div className='space-y-1'>
							<Label htmlFor='name'>Name</Label>
							<Input
								id='name'
								defaultValue='Pedro Duarte'
							/>
						</div>
						<div className='space-y-1'>
							<Label htmlFor='username'>Username</Label>
							<Input
								id='username'
								defaultValue='@peduarte'
							/>
						</div>
					</CardContent>
					<CardFooter>
						<Button>Save changes</Button>
					</CardFooter>
				</Card>
			</TabsContent>
			<TabsContent value='password'>
				<Card>
					<CardHeader>
						<CardTitle>Password</CardTitle>
						<CardDescription>Change your password here. After saving, you'll be logged out.</CardDescription>
					</CardHeader>
					<CardContent className='space-y-2'>
						<div className='space-y-1'>
							<Label htmlFor='current'>Current password</Label>
							<Input
								id='current'
								type='password'
							/>
						</div>
						<div className='space-y-1'>
							<Label htmlFor='new'>New password</Label>
							<Input
								id='new'
								type='password'
							/>
						</div>
					</CardContent>
					<CardFooter>
						<Button>Save password</Button>
					</CardFooter>
				</Card>
			</TabsContent>
		</Tabs>
	);
}
const meta = {
	title: 'CODERUM/Tabs',
	component: TabsDemo,

	parameters: {
		// Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
		layout: 'centered',
	},
} satisfies Meta<typeof TabsDemo>;
export default meta;
type Story = StoryObj<typeof meta>;
export const TabsExample: Story = {};
