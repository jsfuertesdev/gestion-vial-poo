import { useEffect, useState } from 'react';
import AlertaPase from "./alertaPase";

function Conductores() {
 const [conductores, setConductores] = useState([]);

 useEffect(() => {
    fetch('/conductores.json')
      .then((response) => response.json())
      .then((data) => setConductores(data));
 }, []);

 return (
    <div>
      {conductores.map((conductor, index) => (
        <div className="flex flex-col m-4 gap-3" key={index}>
            <AlertaPase nombre={conductor.nombre} fechaVencimiento={conductor.fechaVencimientoLicencia} />
        </div>
      ))}
    </div>
 );
}

export default Conductores;
