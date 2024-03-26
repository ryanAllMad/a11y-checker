import * as React from 'react';
import { Icon } from '@wordpress/components';
import { external } from '@wordpress/icons';

interface HowToPass {
	olItems: string[];
	ulItems: {
		text: string;
		href: string;
	}[];
}
const HowToPass = (props: HowToPass) => {
	const { olItems, ulItems } = props;
	return (
		<>
			<h2>How to pass:</h2>
			<ol>
				{olItems.map((li) => {
					return <li key={li}>{li}</li>;
				})}
			</ol>
			<h3>WCAG 2.0 references</h3>
			<ul>
				{ulItems.map((li) => {
					return (
						<li key={li.text}>
							<a href={li.href} target="_blank" rel="noreferrer">
								{li.text}
								<Icon icon={external} size={14} />
							</a>
						</li>
					);
				})}
			</ul>
		</>
	);
};

export default HowToPass;
