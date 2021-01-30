import React from 'react';
import { Box } from 'theme-ui';

import LoadingIcon from './LoadingIcon';

const Loading: React.FC = () => {
	return (
		<Box as="aside"
			sx={{
				position: 'absolute',
				top: '50%',
				left: '50%',
				transform: 'translateX(-50%) translateY(-50%)',
			}}
		>
			<LoadingIcon width={200} height={200} />
		</Box>
	);
}

export default Loading;
