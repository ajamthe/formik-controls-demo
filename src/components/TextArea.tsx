import { ErrorMessage, Field } from 'formik';
import * as React from 'react';
import TextError from './TextError';

interface ITextAreaProps {
    label: string;
    name: string;
}

const TextArea: React.FunctionComponent<ITextAreaProps> = (props) => {
    const { label, name, ...rest } = props;
  return (
        <div>
            <label htmlFor={name}>{label}</label>
            <Field as='textarea' id={name} name={name} {...rest} />
            <ErrorMessage name={name} component={TextError}/>
        </div>);
};

export default TextArea;
