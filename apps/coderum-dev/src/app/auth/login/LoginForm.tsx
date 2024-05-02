'use client';

import ValidationMessage from '@/components/ValidationMessage';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@repo/ui/src/button';
import { FormControl, FormField, FormItem, Form } from '@repo/ui/src/form';
import { Input } from '@repo/ui/src/input';
import { Label } from '@repo/ui/src/label';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { GithubIcon } from 'lucide-react';

type LoginFormInputs = {
	email: string;
	password: string;
};

const formSchema: z.ZodType<LoginFormInputs> = z.object({
	email: z
		.string({
			required_error: 'Email is required',
			invalid_type_error: 'Email must be a string',
		})
		.email({ message: 'Please enter an email' }),
	password: z
		.string({
			required_error: 'Password is required',
			invalid_type_error: 'Password must be a string',
		})
		.min(1, { message: 'Please enter your password' }),
});

export const LoginForm = () => {
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			email: '',
			password: '',
		},
	});

	const {
		formState: { errors },
	} = form;

	return (
		<div className='mx-auto grid w-80 gap-6 lg:w-96'>
			<div className='grid gap-2 text-center'>
				<h1 className='text-3xl font-bold'>Login</h1>
				<p className='text-muted-foreground text-balance'>Enter your email below to login to your account</p>
			</div>
			<Form {...form}>
				<form className='grid gap-4'>
					<div className='grid gap-2'>
						<Label htmlFor='email'>Email</Label>
						<FormField
							control={form.control}
							name='email'
							render={({ field }) => (
								<FormItem className='w-full'>
									<FormControl>
										<Input
											{...field}
											placeholder='m@example.com'
											required
										/>
									</FormControl>
								</FormItem>
							)}
						/>
						<ValidationMessage errorMessage={errors.email?.message} />
					</div>
					<div className='grid gap-2'>
						<div className='flex items-center'>
							<Label htmlFor='password'>Password</Label>
							<Link
								href='/auth/forgot-password'
								className='ml-auto inline-block text-sm underline'
							>
								Forgot your password?
							</Link>
						</div>
						<FormField
							control={form.control}
							name='password'
							render={({ field }) => (
								<FormItem className='w-full'>
									<FormControl>
										<Input
											{...field}
											required
										/>
									</FormControl>
								</FormItem>
							)}
						/>
						<ValidationMessage errorMessage={errors.password?.message} />
					</div>
					<Button
						type='submit'
						className='w-full'
					>
						Login
					</Button>
					<Button
						variant='outline'
						className='w-full space-x-1'
					>
						<GithubIcon className='h-4 w-4' />
						<span>Login with GitHub</span>
					</Button>
				</form>
			</Form>
			<div className='mt-4 space-x-1 text-center text-sm'>
				<span>Don&apos;t have an account?</span>
				<Link
					href='/auth/signup'
					className='underline'
				>
					Sign up
				</Link>
			</div>
		</div>
	);
};
