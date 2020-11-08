import { ErrorMessage, Field } from 'formik';
import * as React from 'react';
import TextError from './TextError';

export interface IInputProps {
    label: string;
    name: string;
}

export function Input (props: IInputProps) {
    const { label, name, ...rest } = props;
  return (
    <div className='form-control'>
        <label htmlFor={name}>{label}</label>
        <Field id={name} name={name} {...rest}/>
        <ErrorMessage name={name} component={TextError}/>
    </div>
  );
}
