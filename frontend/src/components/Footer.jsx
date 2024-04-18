import { Linkedin } from "../assets";

function Footer() {
  return (
    <footer className="bg-gray-700 text-white py-4 ">
      <div className="container mx-auto px-8 ">
        <div className="flex flex-col md:flex-row ">
          <div className="md:w-1/3 mb-5 md:mb-0">
            <h3 className="text-xl font-bold mb-2">Sobre Nosotros</h3>
            <p className="mr-20 text-justify">
              En Guacamaya Airlines, somos más que una simple aerolínea, somos
              un puente que te conecta con los rincones más paradisíacos de
              Venezuela. Con una trayectoria impecable y un equipo apasionado
              por el vuelo, nos enorgullecemos de ofrecer una experiencia de
              viaje incomparable, donde la comodidad, la seguridad y la atención
              personalizada son nuestros pilares fundamentales.
            </p>
          </div>

          <div className="md:w-1/3 mb-4 md:mb-0">
            <h3 className="text-xl font-bold mb-2">Secciones</h3>
            <ul>
              <li>
                <a href="#">Formulario de viaje</a>
              </li>
              <li>
                <a href="#">Mejores destinos</a>
              </li>
              <li>
                <a href="FAQS">Preguntas Frecuentes</a>
              </li>
              <li>
                <a href="#">Panel de vuelos</a>
              </li>
            </ul>
          </div>

          <div className="md:w-1/3">
            <h3 className="text-xl font-bold mb-2">Desarrolladores</h3>
            
            {
              Developers.map(developer => (
                <div key={developer.id}>
                
                  <div className="flex py-1">
                
                    <img src={developer.img} alt="" className="w-4 h-4 mr-2 " />
                    <a href={developer.linkedin} className="py-1 hover:text-blue-500"> {developer.name} </a>

                  </div>

                </div>
              ))
            }

          </div>
        </div>

        <div className="flex flex-col md:flex-row ">
          <div className="md:w-auto mt-6">
            <p>
              © 2024 Guacamaya Airlines. Todos los derechos reservados para la
              Hackaton 2024 de “Del Rincon del Dev”. | Política de privacidad 👀
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

const Developers = [
{  
  id: 1 ,
  name: 'Jisbel C. Rodriguez P. (Developer Frontend)',
  img: Linkedin,
  linkedin: 'https://www.linkedin.com/in/jisbel-carolina-rodriguez-padron/',
},
{  
  id: 2 ,
  name: 'Carlos A. Palacios R. (Developer Backend)',
  img: Linkedin,
  linkedin: 'https://www.linkedin.com/in/palaciosrcarlosa/',
},
{  
  id: 3 ,
  name: ' Betania N. Lezama (Estudiante de informatica)',
  img: Linkedin,
  linkedin: 'https://www.linkedin.com/in/betania-lezama-nohemyvimas',
},
{  
  id: 4 ,
  name: 'Carlos S. Palacios F. (DevOps)',
  img:Linkedin ,
  linkedin: 'https://www.linkedin.com/in/carlosspalacios/',
}
]



export default Footer;
