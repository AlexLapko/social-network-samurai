import React from 'react'
import { Field } from "redux-form";

export const createField = (placeholder, validate, component, name, props = {}, text = '') => {
	return (
		<div>
      <Field
        placeholder={placeholder}
        validate={validate}
        component={component}
				name={name}
				{...props}
      /> {text}
		</div>
	)
}