import TaskLayout from "./TaskLayout";
import Label from "./Label";

function Tasks() {
  return (
    <>
      <form className="row g-3">
        <div className="col-md-6">
          <label htmlFor="inputNamel14" className="form-label">
            Nombre
          </label>
          <TaskLayout
            type="text"
            className="form-control"
            id="inputName4"
            placeholder="Nombre"
          ></TaskLayout>
        </div>
        <div className="col-md-6">
          <label htmlFor="inputPassword4" className="form-label">
            Password
          </label>
          <TaskLayout
            type="password"
            className="form-control"
            id="inputPassword4"
            placeholder="Contraseña"
          ></TaskLayout>
        </div>
        <div className="col-12">
          <label htmlFor="inputAddress" className="form-label">
            Descripcion
          </label>
          <TaskLayout
            type="text"
            className="form-control"
            id="inputAddress4"
            placeholder="Labor por hacer"
          ></TaskLayout>
        </div>
        <div className="col-12">
          <label htmlFor="inputAddress2" className="form-label">
            Materia
          </label>
          <TaskLayout
            type="text"
            className="form-control"
            id="inputAddress2"
            placeholder="Materia"
          ></TaskLayout>
        </div>
        <div className="col-md-6">
          <label htmlFor="inputCity" className="form-label">
            City
          </label>
          <input type="text" className="form-control" id="inputCity" />
        </div>
        <div className="col-md-4">
          <label htmlFor="inputState" className="form-label">
            State
          </label>
          <select id="inputState" className="form-select">
            <option selected="">Choose...</option>
            <option>...</option>
          </select>
        </div>
        <div className="col-md-2">
          <label htmlFor="inputZip" className="form-label">
            Zip
          </label>
          <input type="text" className="form-control" id="inputZip" />
        </div>
        <div className="col-12">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="gridCheck"
            />
            <label className="form-check-label" htmlFor="gridCheck">
              Check me out
            </label>
          </div>
        </div>
        <div className="col-12">
          <button type="submit" className="btn btn-primary">
            Sign in
          </button>
        </div>
      </form>
    </>
  );
}

export default Tasks;
