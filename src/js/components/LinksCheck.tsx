import * as React from 'react';
import { Panel, PanelBody, PanelRow } from '@wordpress/components';
import { hasElement } from '../helpers/hasElement';
import { insertElementStyles } from '../helpers/insertElementStyles';
import FoundPanel from './FoundPanel';
import HowToPass from './HowToPass';

const hasLinks = hasElement(`.editor-styles-wrapper a[href]`);

const LinksCheck = () => {
	const ol = [
		'Link text is unique, describes the link context and where it leads to.',
		'Duplicate links to the same location are hidden from screen readers.',
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
		insertElementStyles(`.editor-styles-wrapper a[href]`, showLinks);
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
