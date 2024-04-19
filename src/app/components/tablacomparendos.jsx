import React, { useEffect, useState } from 'react';

function ComponenteTabla({ cedula, nombre, licencia, estadoLicencia, fechaVencimiento, estadoRUNT }) {
    const [comparendos, setComparendos] = useState([]);
    const [editing, setEditing] = useState({ rowIndex: null, columnName: null });

    useEffect(() => {
        obtenerComparendosIniciales().then(setComparendos);
    }, []);

    
    useEffect(() => {
        if (cedula === "" && nombre === "" && licencia === "" && estadoLicencia === "" && fechaVencimiento === "" && estadoRUNT === "") { 
            obtenerComparendosIniciales().then(setComparendos);
        }
        else if (cedula || nombre || licencia || estadoLicencia || fechaVencimiento || estadoRUNT) {
            fetch('/comparendos.json')
                .then((response) => response.json())
                .then((data) => {
                    const comparendosFiltrados = data.filter(item => 
                        (!cedula || item.cedula === cedula) &&
                        (!nombre || item.nombre.toLowerCase().includes(nombre.toLowerCase())) &&
                        (!licencia || item.licencia === licencia) &&
                        (!estadoLicencia || item.estadoLicencia === estadoLicencia) &&
                        (!fechaVencimiento || item.fechaVencimiento === fechaVencimiento) &&
                        (!estadoRUNT || item.estadoRUNT === estadoRUNT)
                    );
                    setComparendos(comparendosFiltrados);
                });
        }
    }, [cedula, nombre, licencia, estadoLicencia, fechaVencimiento, estadoRUNT]);

    const handleClick = (rowIndex, columnName) => {
        setEditing({ rowIndex, columnName });
    };

    const handleChange = (event, rowIndex, columnName) => {
        const newComparendos = [...comparendos];
        newComparendos[rowIndex][columnName] = event.target.value; // Asegúrate de que este es el valor completo del campo de entrada
        setComparendos(newComparendos);
        };

    const handleBlur = () => {
        setEditing({ rowIndex: null, columnName: null }); // Salir del modo de edición al perder el foco
    };

    
    return (
        <div className="flex flex-col gap-3">
            <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                    <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg w-full mx-auto"> {/* Cambiado a w-full */}
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        cedula
                                    </th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        nombre
                                    </th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        licencia
                                    </th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        estado de Licencia
                                    </th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        fecha de Vencimiento
                                    </th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        estado de RUNT
                                    </th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Número
                                    </th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Fecha
                                    </th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Valor
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {comparendos.map((item, rowIndex) => (
                                    <tr key={rowIndex}>
                                        {Object.keys(item).map((columnName) => (
                                            <td key={columnName} onClick={() => handleClick(rowIndex, columnName)}>
                                                {editing.rowIndex === rowIndex && editing.columnName === columnName ? (
                                                 <input
                                                    type="text"
                                                    value={item[columnName]}
                                                    onChange={(event) => handleChange(event, rowIndex, columnName)}
                                                    onBlur={handleBlur}
                                                    className="w-full" // Asegúrate de que el input ocupe todo el espacio disponible
                                                 />) : (item[columnName])}
                                            </td>
                                        ))}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-auto block">
                    Actualizar
            </button>
        </div>
    );
}

    // Función para obtener los comparendos iniciales
    const obtenerComparendosIniciales = () => {
        return fetch('/comparendos.json')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Error al obtener los comparendos');
                }
                return response.json();
            })
            .then(data => {
                // Asegúrate de que los datos estén en el formato correcto
                if (!Array.isArray(data)) {
                    throw new Error('Los datos no están en el formato esperado');
                }
                console.log('llega data')
                return data;
            })
            .catch(error => {
                console.error('Error al obtener los comparendos:', error);
                // Puedes decidir qué hacer en caso de error, por ejemplo, devolver un array vacío
                return [];
            });
    };


export default ComponenteTabla;
