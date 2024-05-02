import { Metadata } from 'next';
import { SignUpForm } from './SignUpForm';

export const metadata: Metadata = {
	title: 'Sign Up - Coderum',
};

export default function LoginPage() {
	return (
		<div className='min-h-screen w-full lg:grid lg:grid-cols-2'>
			<SignUpForm />
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
