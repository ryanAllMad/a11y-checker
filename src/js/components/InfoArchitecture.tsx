import * as React from 'react';
import { Panel, PanelBody, PanelRow, Icon } from '@wordpress/components';
import { warning } from '@wordpress/icons';
import HowToPass from './HowToPass';

const InfoArchitectureCheck = () => {
	const ol = [
		'For Page titles: Users who rely on assistive technologies like screen readers may not be able to use visual cues to determine a page’s purpose. Make sure your page titles concisely convey each page’s focus.',
		'For headings: Use precise and descriptive headings to help readers grasp the main points of a piece without reading it in its entirety.',
	];
	const ul = [
		{
			text: '1.3.1 Info and Relationships',
			href: 'https://www.w3.org/WAI/WCAG20/quickref/?showtechniques=14%2C128&currentsidebar=%23col_overview#content-structure-separation-programmatic',
		},
		{
			text: '2.4.1 Bypass Blocks',
			href: 'https://www.w3.org/WAI/WCAG20/quickref/?showtechniques=14%2C128&currentsidebar=%23col_overview#navigation-mechanisms-skip',
		},
		{
			text: '2.4.6 Headings and Labels',
			href: 'https://www.w3.org/WAI/WCAG20/quickref/?showtechniques=128%2C14&currentsidebar=%23col_overview#navigation-mechanisms-descriptive',
		},
	];
	return (
		<Panel className="ally-check-panel">
			<PanelBody title="InfoArchitecture Without Text Alternative">
				<PanelRow>
					<HowToPass olItems={ol} ulItems={ul} />
				</PanelRow>
				<PanelRow>
					<h3>
						<Icon icon={warning} />
						Page title and headings are descriptive.
					</h3>
					<p>Mark as done.</p>
				</PanelRow>
				<PanelRow>
					<h3>
						<Icon icon={warning} />
						Headings in order.
					</h3>
					<p>Headings that are out of order are highlighted.</p>
				</PanelRow>
			</PanelBody>
		</Panel>
	);
};
export default InfoArchitectureCheck;
