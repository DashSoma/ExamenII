const Label = ({ id, titulo }) => {
  return (
    <>
      <label htmlFor={id} className="form-label">
        {titulo}
      </label>
    </>
  );
};

export default Label;
