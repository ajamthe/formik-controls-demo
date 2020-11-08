import React from 'react';
import * as Yup from 'yup'
import { Formik, Form } from 'formik'
import FormikControl from './FormikControl';

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
                      <FormikControl control='input' type='input' label='Email' name='email'/>
                      <FormikControl control='input' type='password' label='Password' name='password'/>
                      <button type='submit' disabled={!formik.isValid}>Submit</button>
                  </Form>
              }
          }
      </Formik>

  </div>);
};

export default LoginForm;
