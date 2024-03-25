import * as React from 'react';
import { Panel, PanelBody, PanelRow, Icon } from '@wordpress/components';
import { warning } from '@wordpress/icons';
import HowToPass from './HowToPass';

const ImagesCheck = () => {
	const ol = [
		' Include meaningful information describing each image in the alt text. ',
		' Don’t start the alt text with Image of or Photo of – the screen reader already announces that images are images. ',
		"Don't add an alt description if text describing the image is already on the page, or if the image is decorative. (Mark image as as decorative).",
	];
	const ul = [
		{
			text: '1.1 Text Alternatives (Guideline)',
			href: 'https://www.w3.org/WAI/WCAG20/quickref/?showtechniques=14%2C128&currentsidebar=%23col_overview&tags=images%2Cimages-of-text%2Ctext-alternatives#text-equiv',
		},
		{
			text: '1.1.1 Non-text Content',
			href: 'https://www.w3.org/WAI/WCAG20/quickref/?showtechniques=14%2C128&currentsidebar=%23col_overview#text-equiv-all',
		},
		{
			text: '1.4.5 Images of Text',
			href: 'https://www.w3.org/WAI/WCAG20/quickref/#qr-visual-audio-contrast-text-presentation',
		},
	];
	return (
		<Panel className="ally-check-panel">
			<PanelBody title="Images Without Text Alternative">
				<PanelRow>
					<HowToPass olItems={ol} ulItems={ul} />
				</PanelRow>
				<PanelRow>
					<h3>
						<Icon icon={warning} />
						The following images have no text alternative
					</h3>
					<p>Mark images that are decorative</p>
				</PanelRow>
				<PanelRow>
					<h3>
						<Icon icon={warning} />
						Images marked as decorative
					</h3>
				</PanelRow>
			</PanelBody>
		</Panel>
	);
};
export default ImagesCheck;
