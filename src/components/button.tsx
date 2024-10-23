import React, {ReactNode} from 'react';

function Button({
	children,
	styles,
	click,
}: {
	children: ReactNode;
	styles?: string;
	click?: any;
}) {
	return (
		<>
			<button className={`${styles}`} onClick={click}>
				{children}
			</button>
		</>
	);
}

export default Button;
