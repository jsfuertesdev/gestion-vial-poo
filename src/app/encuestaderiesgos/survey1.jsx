import React from 'react';

const Survey1 = () => {
 return (
    <div className="flex flex-col items-cente">
      <h1 className="text-center bg-gray-400 p-2 text-3xl">Transversal</h1>
      <div className="w-full overflow-x-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 bg-gray-100">
          <div className="bg-gray-50 p-4">
            <h2 className="text-center bg-gray-300 p-2">Verificación de criterios</h2>
            Publicación y socialización de objetivos y política SG-SST, seguridad vial, alcohol tabaco y drogas psicoactivas
          </div>
          <div className="bg-gray-100 p-4">
            <h2 className="text-center bg-gray-300 p-2">Evaluación</h2>
            <select className="form-select block w-full mt-1">
              <option value="default">Seleccionar una opción</option>
              <option value="option1">0</option>
              <option value="option2">5</option>
              <option value="option2">1</option>
              <option value="option2">N/A</option>
            </select>
          </div>
          <div className="bg-gray-100 p-4">
            <h2 className="text-center bg-gray-300 p-2">Causal de rechazo</h2>
            <input type="text" placeholder="Introduce información" className="form-input block w-full mt-1" />
          </div>
          <div className="bg-gray-100 p-4">
            <h2 className="text-center bg-gray-300 p-2">Registro fotográfico</h2>
            <input type="file" placeholder="Introduce información" className="form-input block w-full mt-1" />
          </div>
          <div className="bg-gray-100 p-4">
            <h2 className="text-center bg-gray-300 p-2">Observaciones</h2>
            <input type="text" placeholder="Introduce información" className="form-input block w-full mt-1" />
          </div>
          <div className="bg-gray-100 p-4">
            <h2 className="text-center bg-gray-300 p-2">Plan de acción</h2>
            <input type="text" placeholder="Introduce información" className="form-input block w-full mt-1" />
          </div>
          <div className="bg-gray-100 p-4">
            <h2 className="text-center bg-gray-300 p-2">Fecha de ejecución</h2>
            <input type="date" placeholder="Introduce información" className="form-input block w-full mt-1" />
          </div>
          <div className="bg-gray-100 p-4">
            <h2 className="text-center bg-gray-300 p-2">Soportes de cierre de plan de acción</h2>
            <input type="text" placeholder="Introduce información" className="form-input block w-full mt-1" />
            <input type="file" placeholder="Introduce información" className="form-input block w-full mt-1" />
          </div>
        </div>
      </div>
    </div>
 );
};

export default Survey1;
