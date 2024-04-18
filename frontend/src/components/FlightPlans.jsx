
function Table() {
    return (
      <div className="container max-w-6xl mx-auto py-8">
        <h1 className="text-3xl font-semibold mb-8">Planes de vuelo</h1>
        <table className="table-auto w-full border-collapse border border-gray-400">
          <thead>
            <tr className="bg-gray-200">
              <th className="px-4 py-2 text-left">Hora de Salida</th>
              <th className="px-4 py-2 text-left">Destino</th>
              <th className="px-4 py-2 text-left">Código de vuelo</th>
              <th className="px-4 py-2 text-left">Puerta</th>
              <th className="px-4 py-2 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {
              FlightPlans.map(flightPlan => (

              <tr key={flightPlan.id} className="bg-white">
                <td className="border px-4 py-2">{flightPlan.leave}</td>
                <td className="border px-4 py-2">{flightPlan.destination}</td>
                <td className="border px-4 py-2">{flightPlan.code}</td>
                <td className="border px-4 py-2">{flightPlan.door}</td>
                <td className="border px-4 py-2">{flightPlan.status}</td>
              </tr>
              ))
            }
           
          </tbody>
        </table>
      </div>
    );
  }

  const FlightPlans = [
    {
      id: 1,
      leave: '12:39',
      destination: 'Roraima',
      code: '2913 - CJT',
      door: '01',
      status: 'Confirmado',
    },
    {
      id: 2,
      leave: '12:39',
      destination: 'Mochima',
      code: '2913 - CJT',
      door: '01',
      status: 'Esperando',
    },
    {
      id: 3,
      leave: '12:39',
      destination: 'Merida',
      code: '2913 - CJT',
      door: '01',
      status: 'Saliendo',
    },
    {
      id: 4,
      leave: '12:39',
      destination: 'Morrocoy',
      code: '2913 - CJT',
      door: '01',
      status: 'Cancelado',
    },
    {
      id: 5,
      leave: '12:39',
      destination: 'Margarita',
      code: '2913 - CJT',
      door: '01',
      status: 'Confirmado',
    },
    {
      id: 6,
      leave: '12:39',
      destination: 'Puerto la cruz',
      code: '2913 - CJT',
      door: '01',
      status: 'Esperando',
    },
    {
      id: 7,
      leave: '12:39',
      destination: 'Medanos de Coro',
      code: '2913 - CJT',
      door: '01',
      status: 'Saliendo',
    },
    {
      id: 8,
      leave: '12:39',
      destination: 'Los roques',
      code: '2913 - CJT',
      door: '01',
      status: 'Cancelado',
    },
  ]

  export default Table;