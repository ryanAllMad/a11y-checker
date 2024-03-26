import * as React from 'react';
import { PanelRow, Icon, Button } from '@wordpress/components';
import { warning, seen } from '@wordpress/icons';
import CheckBox from './CheckBox';

interface FoundPanel {
	found?: NodeListOf<Element>;
	onClick: (e: any) => void;
	showEl: boolean;
	setShowEl: (v: any) => any;
	el: string;
}

const FoundPanel = (props: FoundPanel) => {
	const { found, onClick, showEl, setShowEl, el } = props;

	return (
		<>
			<PanelRow className="a11y-found-show">
				<h3>
					<Icon icon={warning} />
					{`We found ${el} on the page`}
				</h3>
				{found && (
					<>
						<Button onClick={onClick} aria-pressed={showEl}>
							{!showEl ? `Show ${el}?` : `Hide ${el}?`}
							<Icon icon={seen} />
						</Button>
						<CheckBox
							help={`${el.toUpperCase()} are highlighted in the editor. Mark done if ${el} are descriptive.`}
							label={`Are the ${el} descriptive?`}
							onChange={(e) => setShowEl(e ? false : showEl)}
						/>
					</>
				)}
			</PanelRow>
		</>
	);
};

export default FoundPanel;
