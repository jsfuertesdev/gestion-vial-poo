import Link from "next/link";

function Navbar() {
 return (
    <nav className="bg-blue-500 p-4 flex justify-between items-center">
      <div className="text-white font-bold text-xl">Gestión Vial</div>
      <div className="flex space-x-4">
        <Link href="/" className="text-white hover:text-blue-300">Dashboard</Link>
        <Link href="/comparendos" className="text-white hover:text-blue-300">Comparendos</Link>
        <Link href="/encuestaderiesgos" className="text-white hover:text-blue-300">Encuesta de riesgos</Link>
      </div>
    </nav>
 );
}

export default Navbar;
