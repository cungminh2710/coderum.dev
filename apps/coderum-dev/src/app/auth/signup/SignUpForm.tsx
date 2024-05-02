'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@repo/ui/src/button';
import { Form, FormField, FormItem, FormControl } from '@repo/ui/src/form';
import { Input } from '@repo/ui/src/input';
import { Label } from '@repo/ui/src/label';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { PasswordCheckItem } from './PasswordCheckItem';
import ValidationMessage from '@/components/ValidationMessage';
import { GithubIcon } from 'lucide-react';

type RegisterFormInputs = {
	username: string;
	email: string;
	password: string;
};

const passwordMixedUpperLowerCaseValidator = (password: string) => /^(?=.*[a-z])(?=.*[A-Z]).+$/.test(password);
const passwordHasNumberValidator = (password: string) => /.*\d.*/.test(password);

const formSchema: z.ZodType<RegisterFormInputs> = z.object({
	username: z
		.string({
			required_error: 'User name is required',
			invalid_type_error: 'User name must be a string',
		})
		.min(8, { message: 'User name must have at least 8 characters' }),
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
		.min(8, { message: 'Password must have at least 8 characters' })
		.refine(
			(value) => passwordMixedUpperLowerCaseValidator(value),
			'Password should be the mix of uppercase & lowercase letters',
		)
		.refine((value) => passwordHasNumberValidator(value), 'Password should contain at least 1 number'),
});

export const SignUpForm = () => {
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			username: '',
			email: '',
			password: '',
		},
	});

	const {
		formState: { errors },
	} = form;

	return (
		<Form {...form}>
			<form className='flex items-center justify-center py-12'>
				<div className='mx-auto grid w-80 gap-6 lg:w-96'>
					<div className='grid gap-2 text-center'>
						<h1 className='text-3xl font-bold'>Sign Up</h1>
						<p className='text-muted-foreground text-balance'>Create your account and start using Coderum for free</p>
					</div>
					<div className='grid gap-4'>
						<Label htmlFor='username'>Username</Label>
						<div
							dir='ltr'
							className='focus-within:ring-ring group relative mb-1 flex items-center rounded-md focus-within:outline-none focus-within:ring-2'
						>
							<div className='bg-muted h-9 rounded-l-md border border-r-0 px-3'>
								<div className='flex min-h-[2.25rem] flex-col justify-center text-sm leading-7'>
									<span className='flex whitespace-nowrap'>
										<span className='text-muted-foreground inline-flex items-center rounded-none text-sm'>
											coderum.dev/@
										</span>
									</span>
								</div>
							</div>
							<FormField
								control={form.control}
								name='username'
								render={({ field }) => (
									<FormItem className='w-full'>
										<FormControl>
											<Input
												placeholder='username'
												className='focus:ring-ring my-0 block h-9 w-full rounded-md rounded-l-none border border-l-0 ring-0 focus:outline-none focus:ring-2'
												{...field}
											/>
										</FormControl>
									</FormItem>
								)}
							/>
							<ValidationMessage errorMessage={errors.username?.message} />
						</div>
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
							<Label htmlFor='password'>Password</Label>
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

							<div className='text-muted-foreground mt-2 flex items-center text-sm'>
								<ul className='ml-4 list-none'>
									<PasswordCheckItem
										isPassed={passwordMixedUpperLowerCaseValidator(form.watch('password'))}
										message={'Mix of uppercase & lowercase letters'}
									/>
									<PasswordCheckItem
										isPassed={form.watch('password').length >= 8}
										message={'Minimum 8 characters long'}
									/>
									<PasswordCheckItem
										isPassed={passwordHasNumberValidator(form.watch('password'))}
										message={'Contain at least 1 number'}
									/>
								</ul>
							</div>
						</div>
						<Button
							type='submit'
							className='w-full'
						>
							Sign Up
						</Button>
						<Button
							variant='outline'
							className='w-full space-x-1'
						>
							<GithubIcon className='h-4 w-4' />
							<span>Login with GitHub</span>
						</Button>
					</div>
					<div className='mt-4 space-x-1 text-center text-sm'>
						<span>Already have an account?</span>
						<Link
							href='/auth/login'
							className='underline'
						>
							Login
						</Link>
					</div>
				</div>
			</form>
		</Form>
	);
};
