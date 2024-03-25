// eslint-disable-next-line import/no-extraneous-dependencies
import * as React from 'react';
import { CheckboxControl } from '@wordpress/components';

interface CheckBox {
	checked: boolean;
	help: string;
	label: string;
	onChange: (e: boolean) => void;
}

const CheckBox = (props: CheckBox) => {
	const { checked, help, label, onChange } = props;

	return (
		<CheckboxControl
			checked={checked}
			help={help}
			label={label}
			onChange={onChange}
		/>
	);
};

export default CheckBox;
