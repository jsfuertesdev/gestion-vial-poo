import React from 'react';
import Conductores from '../conductores';

const ScrollableSidebar = () => {
 return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-full h-full bg-gray-100"> {/* Cambiado a w-full y h-full */}
        <div className="overflow-y-scroll h-full">
          <Conductores/>
        </div>
      </div>
    </div>
 );
};

export default ScrollableSidebar;
