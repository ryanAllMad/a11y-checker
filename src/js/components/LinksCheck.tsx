import * as React from 'react';
import { Panel, PanelBody, PanelRow } from '@wordpress/components';
import { hasElement } from '../helpers/hasElement';
import { insertElementStyles } from '../helpers/insertElementStyles';
import FoundPanel from './FoundPanel';
import HowToPass from './HowToPass';

const hasLinks = hasElement(`.wp-block-paragraph a[data-type="link"]`);

const LinksCheck = () => {
	const ol = [
		' Link text that’s as specific as possible. ',
		'Include information about where a link leads to.',
	];
	const ul = [
		{
			text: '1.1.1 Non-text Content',
			href: 'https://www.w3.org/WAI/WCAG20/quickref/?showtechniques=14%2C128&currentsidebar=%23col_overview#text-equiv-all',
		},
		{
			text: '2.4.4 Link Purpose (In Context)',
			href: 'https://www.w3.org/WAI/WCAG20/quickref/?showtechniques=14%2C128&currentsidebar=%23col_overview#navigation-mechanisms-refs',
		},
	];
	const [showLinks, setShowLinks] = React.useState(false);

	const handleShow = () => {
		setShowLinks((prev) => (!prev ? true : false));
	};
	React.useEffect(() => {
		insertElementStyles(
			`.wp-block-paragraph a[data-type="link"]`,
			showLinks
		);
	}, [showLinks]);

	return (
		<Panel className="ally-check-panel">
			<PanelBody title="Links are descriptive and not redundant.">
				<PanelRow>
					<HowToPass olItems={ol} ulItems={ul} />
				</PanelRow>
				<FoundPanel
					onClick={handleShow}
					showEl={showLinks}
					setShowEl={setShowLinks}
					el="links"
					found={hasLinks}
				/>
			</PanelBody>
		</Panel>
	);
};
export default LinksCheck;
