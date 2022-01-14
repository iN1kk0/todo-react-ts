import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { ITask } from "../App";

interface IProps {
  handleSubmit: (value: Partial<ITask>) => void;
}

const ToDoForm = (props: IProps) => {
  const formValidationSchema = Yup.object().shape({
    description: Yup.string()
      .min(3, "Text must be 3 characters at minimum")
      .required("Text is required"),
  });

  return (
    <Formik
      initialValues={{ description: "" }}
      validationSchema={formValidationSchema}
      onSubmit={(values) => {
        props.handleSubmit(values);
      }}
    >
      {(prop) => {
        //console.log(prop.values, prop.errors, prop.touched);
        return (
          <Form>
            <Field
              type="text"
              name="description"
              className="border-2 border-gray-200 rounded py-2 px-4 my-4"
            />
            <button
              type="submit"
              className="bg-sky-500/100 py-2 px-4 border-2 border-sky-500/100 rounded ml-2 text-white font-bold"
            >
              Add
            </button>
            <ErrorMessage
              name="description"
              component="div"
              className="text-red-600"
            />
          </Form>
        );
      }}
    </Formik>
  );
};

export default ToDoForm;
