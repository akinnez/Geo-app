import React, {ReactNode} from 'react';

function Overlay({children, styles}: {children: ReactNode; styles?: string}) {
	return (
		<>
			<div
				className={`w-full h-screen fixed z-50 inset-0 bg-gray-500/20 flex justify-center items-center ${styles}`}
			>
				{children}
			</div>
		</>
	);
}

export default Overlay;
