'use client'
import Survey1 from './survey1';
import Survey2 from './survey2';
import Survey3 from './survey3';
import React, { useState } from 'react';

const Survey = () => {
    const [activeSurvey, setActiveSurvey] = useState(1);
   
    const nextSurvey = () => {
       setActiveSurvey(activeSurvey === 2 ? 1 : activeSurvey + 1);
    };
   
    const prevSurvey = () => {
       setActiveSurvey(activeSurvey === 1 ? 2 : activeSurvey - 1);
    };
   
    return (
       <div className='p-10 relative'>
         <button
           onClick={prevSurvey}
           className="absolute left-0 top-1/2 transform -translate-y-1/2 p-2 bg-blue-500 text-white rounded"
         >
           Anterior
         </button>
   
         <button
           onClick={nextSurvey}
           className="absolute right-0 top-1/2 transform -translate-y-1/2 p-2 bg-blue-500 text-white rounded"
         >
           Siguiente
         </button>
   
         <div className="transition-opacity duration-500 ease-in-out">
           {activeSurvey === 1 && (
             <div className={`opacity-${activeSurvey === 1 ? '100' : '0'}`}>
               {/* Survey2 */}
               <Survey1 />
             </div>
           )}
           {activeSurvey === 2 && (
             <div className={`opacity-${activeSurvey === 2 ? '100' : '0'}`}>
               {/* Survey3 */}
               <Survey3 />
             </div>
           )}
         </div>
       </div>
    );
   };
   
   export default Survey;