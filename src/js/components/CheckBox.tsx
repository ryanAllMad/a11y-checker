// eslint-disable-next-line import/no-extraneous-dependencies
import * as React from 'react';
import { CheckboxControl } from '@wordpress/components';

interface CheckBox {
	help: string;
	label: string;
	onChange: (e: any) => void;
}

const CheckBox = (props: CheckBox) => {
	const { help, label, onChange } = props;

	return <CheckboxControl help={help} label={label} onChange={onChange} />;
};

export default CheckBox;
