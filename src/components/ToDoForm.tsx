import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const ToDoForm = (props: any) => {
  const formValidationSchema = Yup.object().shape({
    text: Yup.string()
      .min(3, "Text must be 3 characters at minimum")
      .required("Text is required"),
  });

  return (
    <Formik
      initialValues={{ text: "" }}
      validationSchema={formValidationSchema}
      onSubmit={(values) => {
        props.handleSubmit(values);
      }}
    >
      {(prop) => {
        //console.log(prop.values, prop.errors, prop.touched);
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
