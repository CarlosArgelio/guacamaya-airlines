import { QuestionMarkCircleIcon } from "@heroicons/react/24/outline";


function Faqs() {
  return (
    <div className="max-w-6xl mx-auto py-8">
       <div className="flex">

      <h2 className="text-3xl font-semibold mb-4">Preguntas Frecuentes</h2>
      <QuestionMarkCircleIcon className="w-10 h-10 "></QuestionMarkCircleIcon>
       </div>

      <div className="divide-y divide-gray-300">
        {
          FAQS.map(faq => (
            <div key={faq.id} className="py-4">
              <h3 className="text-xl font-medium mb-2">{faq.question}</h3>
              <p className="text-gray-700">{faq.answer}</p>
            </div>
          ))
        }
      </div>
    </div>
  );
}

const FAQS = [
  {
    id: 1,
    question: '¿Cuál es el equipaje permitido?',
    answer: 'Cada pasajero puede llevar una maleta de mano y una maleta facturada. Consulta nuestras políticas para obtener más detalles sobre el tamaño y el peso permitido.'
  },
  {
    id: 2,
    question: '¿Cómo puedo realizar el check-in?',
    answer: 'Puedes realizar el check-in en línea a través de nuestra página web o aplicación móvil, o también en el mostrador de check-in del aeropuerto.'
  },
  {
    id: 3,
    question: '¿Qué debo hacer si pierdo mi vuelo?',
    answer: 'Si pierdes tu vuelo, por favor contacta a nuestro personal en el aeropuerto para obtener asistencia. Dependiendo de la situación, es posible que podamos reprogramar tu vuelo sin cargo adicional.'
  },
  {
    id: 4,
    question: '¿Puedo cambiar mi reserva?',
    answer: 'Sí, puedes cambiar tu reserva sujeto a disponibilidad y tarifas adicionales. Te recomendamos que consultes nuestras políticas de cambio antes de realizar cualquier modificación.'
  },
  {
    id: 5,
    question: '¿Qué debo hacer si tengo una pregunta adicional?',
    answer: 'Si tienes alguna pregunta adicional, no dudes en contactar a nuestro equipo de atención al cliente. Estamos aquí para ayudarte en todo lo que necesites.'
  }
]

export default Faqs;

