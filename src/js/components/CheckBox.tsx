// eslint-disable-next-line import/no-extraneous-dependencies
import * as React from 'react';
import { CheckboxControl } from '@wordpress/components';

interface CheckBox {
	help: string;
	label: string;
	onChange: (e: any) => boolean;
}

const CheckBox = (props: CheckBox) => {
	const { help, label, onChange } = props;
	// const [checked, setChecked] = React.useState(false);
	// const handleChange = (e: any) => {
	// 	if (e.target.checked) {
	// 		setChecked(true);
	// 	} else {
	// 		setChecked(false);
	// 	}
	// };

	return <CheckboxControl help={help} label={label} onChange={onChange} />;
};

export default CheckBox;
