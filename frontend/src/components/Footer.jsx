import { Link } from 'react-scroll';
import { useTranslation } from "react-i18next";
import { Linkedin } from "../assets";


function Footer() {
  // eslint-disable-next-line no-unused-vars
  const [t, i18n] = useTranslation("global");

  return (
    <footer id="footer" className="bg-gray-700 text-white py-4 ">
      <div className="container mx-auto px-8 ">
        <div className="flex flex-col lg:flex-row lg:flex-wrap">
          <div className="lg:w-1/3 mb-5 lg:mb-0">
            <h3 className="text-xl font-bold mb-2">{t('footer.aboutWe')}</h3>
            <p className="text-justify lg:mr-10">{t('footer.description')}</p>
          </div>

          <div className="lg:w-1/3 mb-4 lg:mb-0">
            <h3 className="text-xl font-bold mb-2">{t('footer.sections')}</h3>
            <ul>

              <li className='hover:text-blue-400 cursor-pointer'>
                <Link to="reservation" smooth={true} duration={900} >{t('footer.form')}</Link>
              </li>
              <li className='hover:text-blue-400 cursor-pointer'>
                <Link to="ourPlaces" smooth={true} duration={900} >{t('footer.bestDestiny')}</Link>
              </li>
              <li className='hover:text-blue-400 cursor-pointer'>
                <Link to="FAQs" smooth={true} duration={900} >{t('faq.frequentQuestions')}</Link>
              </li> 
              <li className='hover:text-blue-400 cursor-pointer'>
                <Link to="flightPlans" smooth={true} duration={900} >{t('footer.dashboard')}</Link>
              </li>
            </ul>
          </div>

          <div className="lg:w-1/3">
            <h3 className="text-xl font-bold mb-2">{t('footer.developers')}</h3>
            
            {
              Developers.map(developer => (
                <div key={developer.id}>
                
                  <div className="flex py-1 ">
                
                    <img src={developer.img} alt="" className="w-4 h-4 mt-2 " />
                    
                    <a href={developer.linkedin} className="py-1 hover:text-blue-400  pl-2 "> {developer.name} </a>

                  </div>

                </div>
              ))
            }

          </div>
        </div>

        <div className="flex justify-center lg:justify-end mt-6">
         
            <p>
            {t('footer.copyright')}
            </p>
      
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
