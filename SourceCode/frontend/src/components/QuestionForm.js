import React from 'react';
import { Form } from 'semantic-ui-react';

const QuestionForm = () => {
  return (
    <Form>
      <Form.Input label='Title' placeholder='Start your question with how, what, why, etc.' />
      <Form.TextArea label='Describe your problem' />
      <Form.Input label='Tags' placeholder='Add up to 3 tags' />
      <Form.Button primary>Post</Form.Button>
    </Form>
  );
};

export default QuestionForm;
