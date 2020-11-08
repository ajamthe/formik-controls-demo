import React from 'react';
import * as Yup from 'yup'
import { Formik, Form } from 'formik'
import FormikControl from './FormikControl';
import { Button } from '@chakra-ui/core'


interface ILoginFormProps {
}

const LoginForm: React.FunctionComponent<ILoginFormProps> = (props) => {
    const initialValues = {
        email: '',
        password: ''
    }

    const validationSchema = Yup.object({
        email: Yup.string().required('Required').email('Invalid email format'),
        password: Yup.string().required('Required'),
    })

    const onSubmit = (values: any) => {
        console.log('onSubmit', values);
    }

  return (<div>
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
          {
              formik => {
                  return <Form>
                      <FormikControl control='chakrainput' type='input' label='Email' name='email'/>
                      <FormikControl control='chakrainput' type='password' label='Password' name='password'/>
                      <Button type='submit' isDisabled={!formik.isValid}>Submit</Button>
                  </Form>
              }
          }
      </Formik>

  </div>);
};

export default LoginForm;
