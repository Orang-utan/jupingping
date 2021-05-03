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
            <FormField name='title' type='title' label='标题' errors={errors} />
            <FormField
              name='description'
              type='description'
              label='描述'
              errors={errors}
            />
            <FormField
              name='maxParticipants'
              type='maxParticipants'
              label='最多人数'
              errors={errors}
            />
            <FormField name='price' type='price' label='价格' errors={errors} />
            <FormField
              name='location'
              type='location'
              label='地点'
              errors={errors}
            />
            <FormField
              name='startTime'
              type='startTime'
              label='开始时间'
              errors={errors}
            />
            <FormField
              name='expiredTime'
              type='expiredTime'
              label='过期时间'
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
