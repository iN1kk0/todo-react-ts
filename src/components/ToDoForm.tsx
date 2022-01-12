import { Formik, Form, Field, ErrorMessage } from "formik";

const ToDoForm = (props: any) => {
  return (
    <Formik
      initialValues={{ text: "" }}
      validate={(values) => {
        const errors: { text?: string } = {};
        if (!values.text) {
          errors.text = "Empty value";
        }
        return errors;
      }}
      onSubmit={(values) => {
        props.handleSubmit(values);
      }}
    >
      {(prop) => {
        console.log(prop.values, prop.errors, prop.touched);
        return (
          <Form>
            <Field type="text" name="text" />
            <button type="submit"> Add </button>
            <ErrorMessage name="text" component="div" />
          </Form>
        );
      }}
    </Formik>
  );
};

export default ToDoForm;
