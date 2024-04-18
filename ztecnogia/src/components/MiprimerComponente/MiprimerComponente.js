import React from "react";
import { AuthContext } from "../../Auth/AuthContext";
import { useState, useEffect, useContext } from "react";
const MiprimerComponente = () => {
  const [result, setResult] = useState(0);
  const [operation, setoperation] = useState(false);
  const [resultMulti, setResultMulti] = useState(0);
  const user = useContext(AuthContext);
  const email= useContext(AuthContext)

  const fnSuma = () => {
    setResult(result + 1);
  };
  const fnRestar = () => {
    setResult(result - 1);
  };
  const fnMultiplicar = () => {
    setTimeout(() => {
      setoperation(true);
    }, 3000);
  };
  useEffect(() => {
    if (operation) {
      console.log("Entra a useefect");
      setResultMulti(result * 2);
    }
  }, [operation, result]);

  return (
    <div>
      <h1 className="text-3xl font-bold underline text-red-700">
        Bienvenido {user.email } 
        
      </h1>
      {/* <div>
        <h2>Resutado: </h2>
        {result}
        <h2>Resutlado Multiplicacion: </h2>
        {resultMulti}
      </div>
      <button onClick={() => fnSuma()}>SUMA</button>
      <div>
        <button onClick={() => fnRestar()}>RESTAR</button>
      </div>
      <div>
        <button onClick={() => fnMultiplicar()}>MULTIPLICAR</button>
      </div> */}
    </div>
  );
};
export default MiprimerComponente;
