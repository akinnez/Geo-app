import React from 'react';
import Spinner from './Spinner';
import Overlay from './overlay';

function Loading() {
	return (
		<>
			<Overlay>
				<div className="">
					<Spinner styles="h-20 w-20 mx-auto my-10" />
					<span className="text-xl">Please wait ...</span>
				</div>
			</Overlay>
		</>
	);
}

export default Loading;
