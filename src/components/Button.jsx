const Button = ({ onMostrar, offEliminar }) => {
  return (
    <div className="d-flex justify-content-center">
      <button
        type="button"
        className="btn btn-outline-success m-2"
        onClick={() => {
          alert("Se presionó el botón. Se va a mostrar la imagen.");
          onMostrar();
        }}
      >
        Agregar triste
      </button>

      <button
        type="button"
        className="btn btn-outline-danger m-2"
        onClick={offEliminar}
      >
        Eliminar
      </button>
    </div>
  );
};

export default Button;
