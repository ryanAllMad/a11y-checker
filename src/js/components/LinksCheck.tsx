import * as React from 'react';
import { Panel, PanelBody, PanelRow, Icon } from '@wordpress/components';
import { warning } from '@wordpress/icons';
import HowToPass from './HowToPass';

const LinksCheck = () => {
	const ol = [
		' Link text that’s as specific as possible. ',
		'Include information about what a link leads to.',
		'If you have an image and text linked to the same location, mark one of them as hidden below.',
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
	return (
		<Panel className="ally-check-panel">
			<PanelBody title="Links are descriptive and not redundant.">
				<PanelRow>
					<HowToPass olItems={ol} ulItems={ul} />
				</PanelRow>
				<PanelRow>
					<h3>
						<Icon icon={warning} />
						Links are descriptive
					</h3>
					<p>Mark as done.</p>
				</PanelRow>
				<PanelRow>
					<h3>
						<Icon icon={warning} />
						Redundant links found, hide duplicate links
					</h3>
					<p>Mark text links as hidden from screen readers.</p>
				</PanelRow>
			</PanelBody>
		</Panel>
	);
};
export default LinksCheck;
