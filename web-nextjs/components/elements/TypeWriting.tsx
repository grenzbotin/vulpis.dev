import React, { useEffect, useState } from 'react';
import { Box } from 'theme-ui';
import Typewriter from 'typewriter-effect';
import useTranslation from 'next-translate/useTranslation';
import { useFirstRender } from '../helpers';

const TypeWriting: React.FC = () => {
	const { lang, t } = useTranslation('common');
	const firstRender = useFirstRender();
	const [show, setShow] = useState(true);

	// Used to re-init the Typewriter component on language change
	useEffect(() => {
		if (!firstRender) {
			setShow(false);
			const timer = setTimeout(() => {
				setShow(true);
			}, 10);
			return () => clearTimeout(timer);
		}
	}, [firstRender, lang]);

	return (
		<Box
			title="Visually sliding text"
			sx={{
				marginTop: '1.2rem',
				fontSize: '.9rem',
				color: 'primary',
				fontWeight: 300,
				zIndex: 1,
				'& > .Typewriter > .Typewriter__cursor': {
					color: 'secondary',
				},
				'& > .placeholder_type': {
					color: 'secondary',
				}
			}}
		>
			{show
				? (
					<Typewriter
						onInit={(tp) => tp
							.pauseFor(1500)
							.typeString(t('heading.type_writer_1'))
							.pauseFor(2500)
							.deleteAll()
							.pauseFor(500)
							.typeString(t('heading.type_writer_2'))
							.pauseFor(2500)
							.deleteAll()
							.pauseFor(500)
							.typeString(t('heading.type_writer_3'))
							.pauseFor(2500)
							.deleteAll()
							.start()
						}
						options={{ cursor: '_', loop: true, delay: 35, deleteSpeed: 35 }}
					/>
				) : <span className="placeholder_type">_</span>}
		</Box>
	);
}

export default TypeWriting;
