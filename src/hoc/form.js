import React from 'react'
import classes from './../components/common/FormsControls/FormsControls.module.css'

export const Element = Element => ({ input, meta, ...props }) => {
  const hasError = meta.touched && meta.error;
  return (
    <div className={ classes.formControl + " " + (hasError ? classes.error : "") }>
      <Element {...input} {...props} />
      { hasError && <span> { meta.error } </span> }
    </div>
  );
};