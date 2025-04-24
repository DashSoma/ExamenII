import React from "react";

function Target({ titulo, descripcion, imagen, items, link }) {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src={imagen} className="card-img-top" alt={titulo} />
      <div className="card-body">
        <h5 className="card-title">{titulo}</h5>
        <p className="card-text">{descripcion}</p>
      </div>
      <ul className="list-group list-group-flush">
        {items.map((item, index) => (
          <li className="list-group-item" key={index}>{item}</li>
        ))}
      </ul>
      <div className="card-body">
        <a href={link} className="card-link" target="_blank" rel="noopener noreferrer">Sitio Web</a>
      </div>
    </div>
  );
}

export default Target;