import { cn } from '@repo/ui/src/lib/utils';

interface ValidationMessageProps {
	errorMessage?: string;
	className?: string;
	icon?: React.ReactElement;
}

const ValidationMessage = (props: ValidationMessageProps) => {
	return (
		<>
			{props.errorMessage && (
				<div className={cn('text-destructive mt-2 flex items-center gap-x-2 text-sm', props.className)}>
					<div>
						{props.icon ?? (
							<svg
								xmlns='http://www.w3.org/2000/svg'
								width={12}
								height={12}
								viewBox='0 0 24 24'
								fill='none'
								stroke='currentColor'
								strokeWidth={2}
								strokeLinecap='round'
								strokeLinejoin='round'
							>
								<circle
									cx={12}
									cy={12}
									r={10}
								/>
								<path d='M12 16L12 12' />
								<path d='M12 8L12.01 8' />
							</svg>
						)}
					</div>
					<p>{props.errorMessage}</p>
				</div>
			)}
		</>
	);
};

export default ValidationMessage;
