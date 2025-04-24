import { useState } from "react";
import Button from "../components/Buttons/Buttons";
import Target from "../components/TargetTask";


const Button = () => {
  const [showTarea, setShowTarea] = useState(false);

  const mostrar = () => setShowImage(true);
  const eliminar = () => setShowImage(false);

  return (
    
    <div className="text-center p-4">
      <Buttons onMostrar={mostrar} offEliminar={eliminar} />
      
      {showTarea && (
        <div className="mt-4">
          <Target></Target>
        </div>
      )}
    </div>
  );
};

export default Button
