import { ErrorMessage, Field } from 'formik';
import * as React from 'react';
import TextError from './TextError';

interface IOption {
    key: string;
    value: string;
}

interface ISelectProps {
    label: string;
    name: string;
    options?: Array<IOption>;
}

const Select: React.FunctionComponent<ISelectProps> = (props) => {
    const {name, label, options, ...rest } = props;
    if (options) {
        return (
            <div className='form-control'>
                <label htmlFor={name}>{label}</label>
                <Field as='select' id={name} name={name} {...rest}>
                    {
                        options.map(option => {
                            return <option key={option.key} value={option.value}>
                                {option.key}
                            </option>
                        })
                    }
                </Field>
                <ErrorMessage name={name} component={TextError}/>
              </div>
          )        
    } else {
        return null;
    }
};

export default Select;
