import { useState } from 'react';

function Form() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí puedes hacer algo con los datos del formulario, como enviarlos a un servidor
    console.log('Datos del formulario:', { name, email, message });
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-4 bg-gray-100 rounded-lg">
      <h1 className="text-xl font-bold mb-4">Formulario de Contacto</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-semibold">Nombre:</label>
          <input
            type="text"
            id="name"
            className="w-full px-3 py-2 border rounded-md"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-semibold">Email:</label>
          <input
            type="email"
            id="email"
            className="w-full px-3 py-2 border rounded-md"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-gray-700 font-semibold">Mensaje:</label>
          <textarea
            id="message"
            className="w-full px-3 py-2 border rounded-md"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">Enviar</button>
      </form>
    </div>
  );
}

export default Form;
