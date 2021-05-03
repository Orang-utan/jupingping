import styled from 'styled-components';
import { Formik, Form } from 'formik';
import FormField from '../components/FormField';

const Container = styled.div`
  padding: 10px;
`;

export default function Create() {
  return (
    <Container>
      <h1>创建事件</h1>
      <Formik initialValues={{ email: '', password: '' }} onSubmit={() => {}}>
        {({ errors, isSubmitting }) => (
          <Form>
            <FormField
              name='email'
              type='email'
              label='Email'
              errors={errors}
            />
            <FormField
              name='password'
              type='password'
              label='Password'
              errors={errors}
            />
            <FormField
              name='email'
              type='email'
              label='Email'
              errors={errors}
            />
            <FormField
              name='password'
              type='password'
              label='Password'
              errors={errors}
            />
            <button
              type='submit'
              className='button is-link'
              disabled={isSubmitting}
            >
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </Container>
  );
}
