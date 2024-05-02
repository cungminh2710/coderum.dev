import type { Metadata } from 'next';
import { LoginForm } from './LoginForm';

export const metadata: Metadata = {
	title: 'Log In - Coderum',
};

export default function LoginPage() {
	return (
		<div className='min-h-screen w-full lg:grid lg:grid-cols-2'>
			<div className='flex items-center justify-center py-12'>
				<LoginForm />
			</div>
			<div className='bg-muted hidden lg:block'>
				<img
					src='/placeholder.svg'
					alt='Image'
					width='1920'
					height='1080'
					className='h-full w-full object-cover dark:brightness-[0.2] dark:grayscale'
				/>
			</div>
		</div>
	);
}
