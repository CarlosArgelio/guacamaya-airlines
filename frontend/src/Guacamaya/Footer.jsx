

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8 ">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row ">
         
          <div className="md:w-1/3 mb-4 md:mb-0">
            <h3 className="text-lg font-semibold mb-2">Sobre Nosotros</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non efficitur justo.</p>
          </div>

          <div className="md:w-1/3 mb-4 md:mb-0">
            <h3 className="text-lg font-semibold mb-2">Enlaces Útiles</h3>
            <ul>
              <li><a href="#">Términos y Condiciones</a></li>
              <li><a href="#">Política de Privacidad</a></li>
              <li><a href="#">Preguntas Frecuentes</a></li>
            </ul>
          </div>

          <div className="md:w-1/3">
            <h3 className="text-lg font-semibold mb-2">Contacto</h3>
            <p>Dirección: 123 Calle Principal, Ciudad, País</p>
            <p>Teléfono: +123456789</p>
            <p>Email: info@example.com</p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row ">
        
          <div className="md:w-auto mt-3">
            <p>Dirección: 123 Calle Principal, Ciudad, País</p>
            
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
