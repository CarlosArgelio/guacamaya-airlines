

function Navbar() {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <span className="text-white text-lg font-bold">Mi Sitio</span>
          </div>
          <div className="flex items-center">
            <a href="#" className="text-white px-3 py-2">Inicio</a>
            <a href="#" className="text-white px-3 py-2">Acerca</a>
            <a href="#" className="text-white px-3 py-2">Servicios</a>
            <a href="#" className="text-white px-3 py-2">Contacto</a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
