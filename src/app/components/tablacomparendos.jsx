import React, { useEffect, useState } from 'react';

function ComponenteTabla({ cedula, nombre, licencia, estadoLicencia, fechaVencimiento, estadoRUNT }) {
    const [comparendos, setComparendos] = useState([]);

    useEffect(() => {
        if (cedula || nombre || licencia || estadoLicencia || fechaVencimiento || estadoRUNT) {
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

    return (
        <div className="flex flex-col">
            <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                    <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg w-1/2 mx-auto">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
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
                                {comparendos.map((item, index) => (
                                    <tr key={index}>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="text-sm text-gray-900">{item.numero}</div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="text-sm text-gray-900">{item.fecha}</div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="text-sm text-gray-900">{item.valor}</div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ComponenteTabla;
