export const PasswordCheckItem = (props: { isPassed: boolean; message: string }) => {
	if (props.isPassed) {
		return (
			<li className='text-green-700 space-x-2'>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					width={12}
					height={12}
					viewBox='0 0 24 24'
					fill='none'
					stroke='currentColor'
					strokeWidth={3}
					strokeLinecap='round'
					strokeLinejoin='round'
					className='-ml-1 inline-block mr-2'
				>
					<polyline points='20 6 9 17 4 12' />
				</svg>
				{props.message}
			</li>
		);
	}
	return (
		<li className='text-muted-foreground flex items-center'>
			<div className='bg-muted-foreground inline-block h-1 w-1 rounded-full mr-3'></div>
			{props.message}
		</li>
	);
};
