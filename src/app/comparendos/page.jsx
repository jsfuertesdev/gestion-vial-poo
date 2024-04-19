// components/Formulario.js
'use client'
// components/Formulario.js

import React, { useState } from 'react';
import ComponenteTabla from '../components/tablacomparendos';

const Formulario = () => {
 const [cedula, setCedula] = useState('');
 const [nombre, setNombre] = useState('');
 const [licencia, setLicencia] = useState('');
 const [estadoLicencia, setEstadoLicencia] = useState('');
 const [fechaVencimiento, setFechaVencimiento] = useState('');
 const [estadoRUNT, setEstadoRUNT] = useState('');
 const [updateData, setUpdateData] = useState(false)

 const handleSubmit = (e) => {
    e.preventDefault();
    setUpdateData(true);
    console.log({ cedula, nombre, licencia, estadoLicencia, fechaVencimiento, estadoRUNT });
 };

 const resetUpdateData = () => {
  setUpdateData(false);
 };

 return (
  <div className='flex flex-col gap-7'>
    <form onSubmit={handleSubmit} className="flex flex-wrap justify-center items-center space-x-4 gap-3">
      <div className="flex flex-wrap justify-center items-center space-x-4">
        <div className="flex flex-col space-y-2 w-full sm:w-auto">
          <label htmlFor="cedula" className="text-sm font-medium text-gray-700">Cédula</label>
          <input
            type="number"
            id="cedula"
            value={cedula}
            onChange={(e) => setCedula(e.target.value)}
            className="p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="flex flex-col space-y-2 w-full sm:w-auto">
          <label htmlFor="nombre" className="text-sm font-medium text-gray-700">Nombre</label>
          <input
            type="text"
            id="nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            className="p-2 border border-gray-300 rounded-md"
            />
        </div>
        <div className="flex flex-col space-y-2 w-full sm:w-auto">
          <label htmlFor="licencia" className="text-sm font-medium text-gray-700">Licencia</label>
          <select
            id="licencia"
            value={licencia}
            onChange={(e) => setLicencia(e.target.value)}
            className="p-2 border border-gray-300 rounded-md"
          >
            <option value="">Seleccione una licencia</option>
            <option value="A2">A2</option>
            <option value="A1">A1</option>
            <option value="B1">B1</option>
            <option value="B2">B2</option>
            <option value="C1">C1</option>
            <option value="C2">C2</option>
            <option value="C3">C3</option>
          </select>
        </div>
        <div className="flex flex-col space-y-2 w-full sm:w-auto">
          <label htmlFor="estadoLicencia" className="text-sm font-medium text-gray-700">Estado de Licencia</label>
          <select
            id="estadoLicencia"
            value={estadoLicencia}
            onChange={(e) => setEstadoLicencia(e.target.value)}
            className="p-2 border border-gray-300 rounded-md"
          >
            <option value="">Seleccione un estado</option>
            <option value="Activo">Activo</option>
            <option value="Inactivo">Inactivo</option>
          </select>
        </div>
        <div className="flex flex-col space-y-2 w-full sm:w-auto">
          <label htmlFor="fechaVencimiento" className="text-sm font-medium text-gray-700">Fecha de Vencimiento</label>
          <input
            type="date"
            id="fechaVencimiento"
            value={fechaVencimiento}
            onChange={(e) => setFechaVencimiento(e.target.value)}
            className="p-2 border border-gray-300 rounded-md"
            />
        </div>
        <div className="flex flex-col space-y-2 w-full sm:w-auto">
          <label htmlFor="estadoRUNT" className="text-sm font-medium text-gray-700">Estado RUNT</label>
          <select
            id="estadoRUNT"
            value={estadoRUNT}
            onChange={(e) => setEstadoRUNT(e.target.value)}
            className="p-2 border border-gray-300 rounded-md"
          >
            <option value="">Seleccione un estado</option>
            <option value="Activo">Activo</option>
            <option value="Inactivo">Inactivo</option>
          </select>
        </div>
      </div>
      <div>
        <div>
          <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Enviar
          </button>
        </div>
      </div>
    </form>
    <ComponenteTabla cedula={cedula} nombre={nombre} licencia={licencia} estadoLicencia={estadoLicencia} fechaVencimiento={fechaVencimiento} estadoRUNT={estadoRUNT}/>
  </div>
 );
};

export default Formulario;