const TaskInput = ({ tipo, nombre }) => {
  return (
    <>
      <input
        type={tipo}
        className="form-control"
        id="inputEmail4"
        placeholder={nombre}
      />
    </>
  );
};

export default TaskInput;
