import React from 'react';
import Conductores from '../conductores';

const ScrollableSidebar = () => {
 return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-50 h-1/2 bg-gray-100">
        <div className="overflow-y-scroll h-full">
          <Conductores/>
        </div>
      </div>
    </div>
 );
};

export default ScrollableSidebar;