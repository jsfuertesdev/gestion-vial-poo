const Sidebar = ({ isOpen, children }) => {
    return (
       <div className={`transform top-0 left-0 w-64 bg-gray-800 overflow-auto ease-in-out transition-all duration-300 z-30 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
         {children}
       </div>
    );
   };
export default Sidebar;