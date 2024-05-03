import React from 'react';

const Survey3 = () => {
 return (
    <div className="flex flex-col items-center">
      <table className="table-auto w-4/5 mb-5">
        <thead>
          <tr>
            <th className="col-span-8 text-center bg-red-300 font-bold text-2xl" colSpan="8">Transversal</th>
          </tr>
          <tr>
            <th className="px-4 py-2 bg-gray-100">Verificación de criterios</th>
            <th className="px-4 py-2 bg-gray-100">Evaluación</th>
            <th className="px-4 py-2 bg-gray-100">Causal de rechazo</th>
            <th className="px-4 py-2 bg-gray-100">Registro fotográfico</th>
            <th className="px-4 py-2 bg-gray-100">Observaciones</th>
            <th className="px-4 py-2 bg-gray-100">Plan de acción</th>
            <th className="px-4 py-2 bg-gray-100">Fecha de ejecución</th>
            <th className="px-4 py-2 bg-gray-100">Soportes de cierre de plan de acción</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border px-4 py-2">
            Contrato y pólizas de cada unos de los contratistas que se encuentran en el proyecto (muestra de 3 contratistas en el proyecto)
            </td>
            <td className="border px-4 py-2">
              <select className="form-select block w-full mt-1">
                <option value="default">Seleccionar una opción</option>
                <option value="option1">0</option>
                <option value="option2">5</option>
                <option value="option2">1</option>
                <option value="option2">N/A</option>
              </select>
            </td>
            <td className="border px-4 py-2">
              <input type="text" placeholder="Introduce información" className="form-input block w-full mt-1" />
            </td>
            <td className="border px-4 py-2">
              <input type="file" placeholder="Introduce información" className="form-input block w-full mt-1" />
            </td>
            <td className="border px-4 py-2">
              <input type="text" placeholder="Introduce información" className="form-input block w-full mt-1" />
            </td>
            <td className="border px-4 py-2">
              <input type="text" placeholder="Introduce información" className="form-input block w-full mt-1" />
            </td>
            <td className="border px-4 py-2">
              <input type="date" placeholder="Introduce información" className="form-input block w-full mt-1" />
            </td>
            <td className="border px-4 py-2">
              <input type="text" placeholder="Introduce información" className="form-input block w-full mt-1" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
 );
};

export default Survey3;