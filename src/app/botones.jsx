'use client'
import Link from 'next/link';

function ButtonLinks() {
    const openNewTab = (url) => {
        window.open(url, '_blank');
    };

    return (
        <div className="flex flex-col items-center gap-3 m-4">
            <div >
                <button class="w-48 px-4 py-2 bg-blue-500 text-white rounded-full overflow-hidden text-wrap" onClick={() => openNewTab(`https://forms.office.com/pages/responsepage.aspx?id=lFn8QAVAukWYxhkoA8IpmkQVSLMTRPpJqho9zFD6xbRURE8yN1pGSU5ZNkhYWEVHSVVGRzhVTllZOS4u`)}>Solicitud Servicios RTS</button>
            </div>
            <div>
                <button class="w-48 px-4 py-2 bg-blue-500 text-white rounded-full overflow-hidden text-wrap" onClick={() => openNewTab(`https://forms.office.com/pages/responsepage.aspx?id=lFn8QAVAukWYxhkoA8Ipmv3iAKhKjj5LjDJdtFIZlYFUQjQ0UlBRWDY0WTZZWTMxMU9GT0FERzNQOC4u`)}>Asistencia RTS</button>
            </div>
            <div>
                <button class="w-48 px-4 py-2 bg-blue-500 text-white rounded-full overflow-hidden text-wrap" onClick={() => openNewTab(`https://forms.office.com/pages/responsepage.aspx?id=lFn8QAVAukWYxhkoA8IpmkQVSLMTRPpJqho9zFD6xbRURE8yN1pGSU5ZNkhYWEVHSVVGRzhVTllZOS4u`)}>Calificacion practica</button>
            </div>
            <div>
                <button class="w-48 px-4 py-2 bg-blue-500 text-white rounded-full overflow-hidden text-wrap" onClick={() => openNewTab(`https://forms.office.com/pages/responsepage.aspx?id=lFn8QAVAukWYxhkoA8IpmiIyWY6SiyVGlPIFnMPPyh1UM1VEUFRUNllFM0kzQjBZSDdZWVZMRDBBNC4u`)}>Prueba Pre-ingreso</button>
            </div>
            <div>
                <button class="w-48 px-4 py-2 bg-blue-500 text-white rounded-full overflow-hidden text-wrap" onClick={() => openNewTab(`https://forms.office.com/pages/responsepage.aspx?id=lFn8QAVAukWYxhkoA8IpmiIyWY6SiyVGlPIFnMPPyh1UMzJPNVRYSk9KWU5BTklZR0RSVURCUllIQS4u`)}>Inspeccion periodica Liviano</button>
            </div>
            <div>
                <button class="w-48 px-4 py-2 bg-blue-500 text-white rounded-full overflow-hidden text-wrap" onClick={() => openNewTab(`https://forms.office.com/pages/responsepage.aspx?id=lFn8QAVAukWYxhkoA8IpmiIyWY6SiyVGlPIFnMPPyh1UNUFBVFExTzBWNUNJU0Q3NUhXNzA5TzRLNC4u`)}>Inspeccion periodica tracto camion</button>
            </div>
        </div>
    );
}

export default ButtonLinks;
