/* eslint-disable @typescript-eslint/ban-ts-comment */
// eslint-disable-next-line import/no-extraneous-dependencies
import * as React from 'react';
import { registerPlugin } from '@wordpress/plugins';
// @ts-expect-error
import { PluginSidebar } from '@wordpress/edit-post';
// eslint-disable-next-line import/no-extraneous-dependencies
import { image } from '@wordpress/icons';

const A11ySidebar = () => {
	return (
		<>
			<PluginSidebar
				name="plugin-sidebar-test"
				title="My Plugin"
				icon={image}
			>
				<p>Plugin Sidebar</p>
			</PluginSidebar>
		</>
	);
};
registerPlugin('a11y-check-sidebar', {
	render: A11ySidebar,
});
