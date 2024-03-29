import * as React from 'react';
import {
	Panel,
	PanelBody,
	PanelRow,
	Icon,
	Button,
} from '@wordpress/components';
import { warning } from '@wordpress/icons';
import { useSelect } from '@wordpress/data';
import { hasElement } from '../helpers/hasElement';
import { insertElementStyles } from '../helpers/insertElementStyles';
import HowToPass from './HowToPass';
import FoundPanel from './FoundPanel';

const hasPostTitle = hasElement(`.wp-block-post-title`);
const hasHeadings = hasElement(`.wp-block-heading`);

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

	const [showHeadings, setShowHeadings] = React.useState(false);
	const [openDoc, setOpenDoc] = React.useState(false);

	const handleShow = () => {
		setShowHeadings((prev) => (!prev ? true : false));
	};

	const allBlocks = useSelect(
		(select: any) => select('core/block-editor').getBlocks(),
		[]
	);
	const computeOutlineHeadings = (blocks: any[] = []): any => {
		return blocks.flatMap((block = {}) => {
			if (block.name === 'core/heading') {
				return {
					...block,
					level: block.attributes.level,
				};
			}
			return computeOutlineHeadings(block.innerBlocks);
		});
	};

	const headings = computeOutlineHeadings(allBlocks);
	const countByLevel = headings.reduce(
		(acc: any[], heading: any) => ({
			...acc,
			[heading.level]: (acc[heading.level] || 0) + 1,
		}),
		{}
	);
	const hasMultipleH1 = hasPostTitle && countByLevel[1] > 1;

	const [hasGoodHeadings, setHasGoodHeadings] = React.useState(false);
	const [loading, setLoading] = React.useState(true);

	React.useEffect(() => {
		insertElementStyles(
			`.wp-block-heading, .wp-block-post-title`,
			showHeadings
		);
		const getGoodHeadings = (headArr: any[]) => {
			return headArr.every((h: any, idx: number) => {
				const nextHeading =
					headArr.length > idx + 1 ? headArr[idx + 1] : h;
				return (
					h.level === nextHeading.level ||
					nextHeading.level - h.level === 1 ||
					nextHeading.level < h.level
				);
			});
		};

		setHasGoodHeadings(getGoodHeadings(headings));
		setLoading(false);
	}, [hasGoodHeadings, headings, showHeadings]);

	const handleDocOutlineClick = () => {
		setOpenDoc((prev) => (!prev ? true : false));
		const outlineButton = document.querySelector(
			`[aria-label="Document Overview"]`
		);
		let outlineClicked = false;
		outlineButton.addEventListener('click', () => {
			outlineClicked = true;
		});
		// @ts-expect-error
		outlineButton.click();

		setTimeout(() => {
			if (outlineClicked) {
				const outline = document.querySelector(
					'.edit-post-editor__document-overview-panel__tab-panel .components-tab-panel__tabs button:last-child'
				);
				if (outline) {
					// @ts-expect-error
					outline.click();
				}
			}
		}, 800);
	};
	return (
		<Panel className="ally-check-panel">
			<PanelBody title="Headings are descriptive and in order.">
				<PanelRow>
					<HowToPass olItems={ol} ulItems={ul} />
				</PanelRow>
				<FoundPanel
					found={hasPostTitle || hasHeadings}
					onClick={handleShow}
					showEl={showHeadings}
					setShowEl={setShowHeadings}
					el="headings"
				/>
				<PanelRow className="a11y-heading-order">
					<h3>
						{loading && 'Processing headings...'}
						{!loading && !hasGoodHeadings ? (
							<>
								<Icon icon={warning} />
								{`Headings are out of order`}
							</>
						) : (
							<>{`Headings in order.`}</>
						)}
					</h3>

					<h3>
						{hasMultipleH1 ? (
							<>
								<Icon icon={warning} />
								{`Only one H1 heading allowed on a page`}
							</>
						) : (
							<>{`H1 looks good!`}</>
						)}
					</h3>
					{(!loading && !hasGoodHeadings) || hasMultipleH1 ? (
						<>
							<Icon icon={warning} />
							<p>Please open the Document Outline to reaolve.</p>
							<Button
								onClick={handleDocOutlineClick}
								aria-pressed={openDoc}
							>
								Open Document Outline
							</Button>
						</>
					) : (
						<>{`Page is looking good!`}</>
					)}
				</PanelRow>
			</PanelBody>
		</Panel>
	);
};
export default InfoArchitectureCheck;
