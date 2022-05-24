import {Field} from 'formik';
import React, {FC} from 'react';
import {RegisterFieldProps} from "../../types/types";


const FormField: FC<RegisterFieldProps> = ({content, type, id, errors, touched}) => {
	return (
		<div className="form-field">
			<label className="text-primaryTxt text-lg" htmlFor={id}>
				{content.charAt(0).toUpperCase() + content.slice(1)}:
			</label>
			<div className="options-container">
				<Field name={id} id={id} type={type} className="field"
					   placeholder={content.charAt(0).toUpperCase() + content.slice(1)}/>
				{errors && touched ? (
					<div className="flex items-center">
						<span className="field-error">{errors}</span>
					</div>
				) : null}
			</div>
		</div>
	);
};

export default FormField;