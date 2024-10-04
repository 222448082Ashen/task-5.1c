import React from 'react';
import { Form } from 'semantic-ui-react';

const ArticleForm = () => {
  return (
    <Form>
      <Form.Input label='Title' placeholder='Enter a descriptive title' />
      <Form.TextArea label='Abstract' placeholder='Enter a 1-paragraph abstract' />
      <Form.TextArea label='Article Text' placeholder='Enter the article text' />
      <Form.Input label='Tags' placeholder='Add up to 3 tags' />
      <Form.Button primary>Post</Form.Button>
    </Form>
  );
};

export default ArticleForm;
