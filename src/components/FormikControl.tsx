import * as React from 'react';
import { Input } from './Input';
import RadioButtons from './RadioButtons';
import CheckboxGroup from './CheckboxGroup';
import Select from './Select';
import TextArea from './TextArea';
import Datepicker from './Datepicker';

interface IOption {
    key: string;
    value: string;
}

interface IFormikControlProps {
    control: string;
    label: string;
    name: string;
    type?: string;
    options?: Array<IOption>
}

const FormikControl: React.FunctionComponent<IFormikControlProps> = (props) => {
    const { control, options, ...rest } = props;

    switch (control) {
        case 'input': 
            return <Input {...rest}/>
        case 'textarea':
            return <TextArea {...rest}/>
        case 'select':
            return <Select options={options} {...rest}/>
        case 'radio':
            return <RadioButtons options={options} {...rest}/>
        case 'checkbox':
            return <CheckboxGroup options={options} {...rest}/>
        case 'date':
            return <Datepicker {...rest}/>
        default: return null;
    }
};

export default FormikControl;
