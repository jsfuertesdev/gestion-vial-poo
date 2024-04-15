'use client'
import React from 'react';

const AlertaPase = ({ nombre,fechaVencimiento }) => {
    const hoy = new Date();
    const fechaVencimientoObj = new Date(fechaVencimiento);
    const diferenciaDias = Math.ceil((fechaVencimientoObj - hoy) / (1000 * 60 * 60 * 24));

let mensaje = '';
let clase = '';

if (diferenciaDias > 30) {
    mensaje = `El pase de ${nombre} se vence en ${diferenciaDias} días`;
    clase = 'bg-green-200 text-green-800';
} else if (diferenciaDias > 10) {
    mensaje = `El pase se vence en ${diferenciaDias} días`;
    clase = 'bg-yellow-200 text-yellow-800';
} else if (diferenciaDias >= 5) {
    mensaje = `El pase de ${nombre} se vence en ${diferenciaDias} días`;
    clase = 'bg-red-200 text-red-800';
} else {
    mensaje = `El pase de ${nombre} está vencido`;
    clase = 'bg-red-200 text-red-800';
}

return (
<div className={`p-4 rounded-md ${clase}`}>
    {mensaje}
</div>
);
};

export default AlertaPase;
