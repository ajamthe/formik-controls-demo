import { Field, ErrorMessage } from 'formik';
import * as React from 'react';

import TextError from './TextError';

interface IOption {
    key: string;
    value: string;
}

interface ICheckboxGroupProps {
    label: string;
    name: string;
    options?: Array<IOption>;
}

const CheckboxGroup: React.FunctionComponent<ICheckboxGroupProps> = (props) => {
    const { label, name, options, ...rest } = props;
  return (
      <div className='form-control'>
          <label htmlFor={name}>{name}</label>
          <Field name={name} {...rest} >
            {
                ({ field } : any) => {
                    if (options) {
                    return options.map((option) => {
                        return (
                            <React.Fragment key={option.key}>
                                <input type='checkbox' id={option.value} {...field} value={option.value} />
                                {/* checked={field.value === option.value} */}
                        <label htmlFor={option.value}>{option.key}</label>
                            </React.Fragment>
                        )
                    });
                    } else {
                        return (<div>No options found</div>);
                    }
                }
            }
          </Field>
          <ErrorMessage name={name} component={TextError} />
      </div>
  );
};

export default CheckboxGroup;
