import '@/styles/globals.css';

import { Inter } from 'next/font/google';

import { TRPCReactProvider } from '@/trpc/react';

const inter = Inter({
	subsets: ['latin'],
	variable: '--font-sans',
});

export const metadata = {
	title: 'Coderum',
	description: 'A blogging platform for Coder',
	icons: [{ rel: 'icon', url: '/favicon.ico' }],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='en'>
			<body className={`font-sans ${inter.variable}`}>
				<TRPCReactProvider>{children}</TRPCReactProvider>
			</body>
		</html>
	);
}
