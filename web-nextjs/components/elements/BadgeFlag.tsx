import React from 'react';
import { Badge } from 'theme-ui';

interface BadgeFlagProps {
	label: string,
	variant?: string,
	ml?: string,
	mr?: string,
}

const BadgeFlag: React.FC<BadgeFlagProps> = ({ label, ...props }) => {
	return (
		<Badge className="badge" sx={{ width: '25px', textAlign: 'center' }} {...props}>{label}</Badge>
	);
}

export default BadgeFlag;