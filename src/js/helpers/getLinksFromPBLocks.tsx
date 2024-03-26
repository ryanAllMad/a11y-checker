import * as React from 'react';
import { addFilter } from '@wordpress/hooks';

// let hasLinks = false;
const blockIds = [];

const getLinksFromPBlocks = (BlockEdit: any) => {
	return (props: any) => {
		if (
			props.name === 'core/paragraph' &&
			props.attributes.content.includes(`data-type="link"`)
		) {
			// hasLinks = true;
			blockIds.push(props.clientId);
			return <BlockEdit {...props} />;
		}
		return <BlockEdit {...props} />;
	};
};

addFilter('editor.BlockEdit', 'a11y-check/get-links', getLinksFromPBlocks);
