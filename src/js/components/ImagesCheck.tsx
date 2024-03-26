import * as React from 'react';
import { Panel, PanelBody, PanelRow, Icon } from '@wordpress/components';
import { warning } from '@wordpress/icons';
import { useSelect } from '@wordpress/data';
import HowToPass from './HowToPass';
import { getFileName } from '../helpers/getFileName';
import CheckBox from './CheckBox';

const ImagesCheck = () => {
	const [decorative, setDecorative] = React.useState([]);
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
	const allBlocks = useSelect(
		(select: any) => select('core/block-editor').getBlocks(),
		[]
	);

	const imageBlocks = allBlocks.filter((b: any) => b.name === 'core/image');
	const imageArray: any = [];

	const getImagesWithoutAlt = (blocks: any) => {
		blocks.forEach((img: any) => {
			if (img.attributes.alt !== '') {
				return 'All images have alt!';
			}
			imageArray.push(img);
		});
		return imageArray;
	};

	const imagesWithoutAlt = getImagesWithoutAlt(imageBlocks);

	const handleCheck = (e: any, dec: string) => {
		if (e) {
			setDecorative((oldArray) => [...oldArray, dec]);
		}
		if (!e) {
			const newList = decorative.filter((i) => i !== dec);
			setDecorative(newList);
		}
	};

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
					{imagesWithoutAlt.map((img: any) => {
						const imageFile = getFileName(img.attributes.url);
						return (
							<React.Fragment key={img.clientId}>
								<CheckBox
									help="Mark done if the image has no purpose, or is already described within the text."
									label={`${imageFile}`}
									onChange={(e) =>
										handleCheck(e, `${imageFile}`)
									}
								/>
							</React.Fragment>
						);
					})}
				</PanelRow>
				<PanelRow>
					<h3>Images marked as decorative</h3>
					<ol>
						{decorative.length > 0 &&
							decorative.map((dec) => {
								return <li key={dec}>{dec}</li>;
							})}
					</ol>
				</PanelRow>
			</PanelBody>
		</Panel>
	);
};
export default ImagesCheck;
