

function Faqs() {
  return (
    <div className="max-w-3xl mx-auto py-8">
      <h2 className="text-3xl font-semibold mb-4">Preguntas Frecuentes</h2>
      <div className="divide-y divide-gray-300">
        {/* Pregunta 1 */}
        <div className="py-4">
          <h3 className="text-xl font-medium mb-2">¿Cuál es el equipaje permitido?</h3>
          <p className="text-gray-700">Cada pasajero puede llevar una maleta de mano y una maleta facturada. Consulta nuestras políticas para obtener más detalles sobre el tamaño y el peso permitido.</p>
        </div>
        {/* Pregunta 2 */}
        <div className="py-4">
          <h3 className="text-xl font-medium mb-2">¿Cómo puedo realizar el check-in?</h3>
          <p className="text-gray-700">Puedes realizar el check-in en línea a través de nuestra página web o aplicación móvil, o también en el mostrador de check-in del aeropuerto.</p>
        </div>
        {/* Pregunta 3 */}
        <div className="py-4">
          <h3 className="text-xl font-medium mb-2">¿Qué debo hacer si pierdo mi vuelo?</h3>
          <p className="text-gray-700">Si pierdes tu vuelo, por favor contacta a nuestro personal en el aeropuerto para obtener asistencia. Dependiendo de la situación, es posible que podamos reprogramar tu vuelo sin cargo adicional.</p>
        </div>
        {/* Pregunta 4 */}
        <div className="py-4">
          <h3 className="text-xl font-medium mb-2">¿Puedo cambiar mi reserva?</h3>
          <p className="text-gray-700">Sí, puedes cambiar tu reserva sujeto a disponibilidad y tarifas adicionales. Te recomendamos que consultes nuestras políticas de cambio antes de realizar cualquier modificación.</p>
        </div>
        {/* Pregunta 5 */}
        <div className="py-4">
          <h3 className="text-xl font-medium mb-2">¿Qué debo hacer si tengo una pregunta adicional?</h3>
          <p className="text-gray-700">Si tienes alguna pregunta adicional, no dudes en contactar a nuestro equipo de atención al cliente. Estamos aquí para ayudarte en todo lo que necesites.</p>
        </div>
      </div>
    </div>
  );
}

export default Faqs;

