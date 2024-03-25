import * as React from 'react';
import { registerPlugin } from '@wordpress/plugins';
// @ts-expect-error
import { PluginSidebar } from '@wordpress/edit-post';
import { check } from '@wordpress/icons';
import ImagesCheck from './ImagesCheck';
import InfoArchitectureCheck from './InfoArchitecture';
import LinksCheck from './LinksCheck';

const A11ySidebar = () => {
	return (
		<>
			<PluginSidebar
				name="plugin-sidebar-test"
				title="A11y Checker"
				icon={check}
				description="Check your content for accessibiilty issues below."
			>
				<ImagesCheck />
				<InfoArchitectureCheck />
				<LinksCheck />
			</PluginSidebar>
		</>
	);
};
registerPlugin('a11y-check-sidebar', {
	render: A11ySidebar,
});
