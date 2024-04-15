
function Table() {
    return (
      <div className="container max-w-6xl mx-auto py-8">
        <h1 className="text-3xl font-semibold mb-8">Planes de vuelo</h1>
        <table className="table-auto w-full border-collapse border border-gray-400">
          <thead>
            <tr className="bg-gray-200">
              <th className="px-4 py-2 text-left">Número de Vuelo</th>
              <th className="px-4 py-2 text-left">Origen</th>
              <th className="px-4 py-2 text-left">Destino</th>
              <th className="px-4 py-2 text-left">Hora de Salida</th>
              <th className="px-4 py-2 text-left">Hora de Llegada</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white">
              <td className="border px-4 py-2">FL123</td>
              <td className="border px-4 py-2">Ciudad A</td>
              <td className="border px-4 py-2">Ciudad B</td>
              <td className="border px-4 py-2">08:00</td>
              <td className="border px-4 py-2">10:00</td>
            </tr>
            <tr className="bg-white">
              <td className="border px-4 py-2">FL123</td>
              <td className="border px-4 py-2">Ciudad A</td>
              <td className="border px-4 py-2">Ciudad B</td>
              <td className="border px-4 py-2">08:00</td>
              <td className="border px-4 py-2">10:00</td>
            </tr>
            <tr className="bg-white">
              <td className="border px-4 py-2">FL123</td>
              <td className="border px-4 py-2">Ciudad A</td>
              <td className="border px-4 py-2">Ciudad B</td>
              <td className="border px-4 py-2">08:00</td>
              <td className="border px-4 py-2">10:00</td>
            </tr>
            <tr className="bg-white">
              <td className="border px-4 py-2">FL123</td>
              <td className="border px-4 py-2">Ciudad A</td>
              <td className="border px-4 py-2">Ciudad B</td>
              <td className="border px-4 py-2">08:00</td>
              <td className="border px-4 py-2">10:00</td>
            </tr>
            <tr className="bg-white">
              <td className="border px-4 py-2">FL123</td>
              <td className="border px-4 py-2">Ciudad A</td>
              <td className="border px-4 py-2">Ciudad B</td>
              <td className="border px-4 py-2">08:00</td>
              <td className="border px-4 py-2">10:00</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }

  export default Table;