const Form = (props: any) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <input type="text" onChange={props.handleChange} />
      <input type="submit" value="Add" />
    </form>
  );
};

export default Form;
