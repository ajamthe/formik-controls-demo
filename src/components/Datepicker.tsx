import * as React from 'react';
import DateView from 'react-datepicker'
import { Field, ErrorMessage } from 'formik'
import "react-datepicker/dist/react-datepicker.css";
import TextError from './TextError';

interface IDatepickerProps {
    label: string;
    name: string;
}

const Datepicker: React.FunctionComponent<IDatepickerProps> = (props) => {
    const { label, name, ...rest } = props;
    return (<div className='form-control'>
                <label htmlFor={name}>{name}</label>
                <Field name={name}>
                    {
                        ({form, field} :any) => {
                            const { setFieldValue } = form;
                            const { value } = field;
                            return <DateView id={name} {...field} {...rest} selected={value} onChange={val => setFieldValue(name, val)} />
                        }
                    }
                </Field>
                <ErrorMessage name={name} component={TextError}/>
            </div>
        );
};

export default Datepicker;
