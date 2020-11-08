import * as React from 'react';
import { Field } from 'formik'
import { Input, FormControl, FormLabel, FormErrorMessage } from '@chakra-ui/core'

interface IChakraInputProps {
    label: string;
    name: string;
}

const ChakraInput: React.FunctionComponent<IChakraInputProps> = (props) => {
    const { label, name, ...rest } = props;
  return (
      <Field name={name}>
          {
              ({field, form} : any) => {
                return <FormControl isInvalid={form.errors[name] && form.touched[name]}>
                    <FormLabel htmlFor={name}>{label}</FormLabel>
                    <Input id={name} {...rest} {...field} />
                    <FormErrorMessage>{form.errors[name]}</FormErrorMessage>
                </FormControl>
              }
          }
      </Field>
  );
};

export default ChakraInput;
