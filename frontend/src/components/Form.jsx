import { useState, useEffect } from "react";
import { TicketIcon } from "@heroicons/react/24/outline";
import { useTranslation } from "react-i18next";

import { getAllAirports } from "./../services/api"
import { postCreateReservation } from "./../services/api"

function Form() {
  const [airPorts, setAirPort] = useState(null)
  const [oneWay, setOneWay] = useState(true);
  const [roundTrip, setRoundTrip] = useState(false);
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [dateStart, setDateStart] = useState("");
  const [dateEnd, setDateEnd] = useState("");
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [email, setEmail] = useState("");
  // eslint-disable-next-line no-unused-vars
  const [t, i18n] = useTranslation("global");

  useEffect(() => {
    getAllAirports(setAirPort)
  }, [])

  if (!airPorts) return null;


  const handleSubmit = async (event) => {

    event.preventDefault();
  
    const formData = {
      oneWay: oneWay,
      roundTrip: roundTrip,
      from: from,
      to: to,
      dateStart: dateStart,
      dateEnd: dateEnd,
      adults: adults,
      children: children,
      email: email,
    };
    
    if (formData.oneWay === true) {
      delete formData.dateEnd
    } 
    
    try {
      const response = await postCreateReservation(formData);
      console.log('Respuesta del servidor:', response.data);
    
    } catch (error) {
      alert('El correo ya esta en uso', error);
      
    }
  };
  

  return (
    <div id="reservation" className="relative max-w-6xl mx-auto rounded-b-xl shadow-xl dark:shadow-green-500/30">
    <div className="flex rounded-t-xl pt-2 justify-center text-white bg-lime-400 drop-shadow-lg dark:bg-green-500 ">
      <h1 className="md:text-3xl text-xl  font-bold mb-4">{t('form.reserveYourFlight')}</h1>
      <TicketIcon className="md:w-10 w-8 h-10" />
    </div>
    <div className="max-w-6xl p-4 bg-gray-100 rounded-b-xl">
      <form onSubmit={handleSubmit}>
        <div className="py-2">
          <input
            id="draft"
            className="appearance-none border border-gray-400 rounded-full w-4 h-4 checked:bg-lime-400 dark:checked:bg-green-500"
            type="radio"
            name="status"
            checked={oneWay}
              onChange={() => {
                setOneWay(true);
                setRoundTrip(false);
              }}
          />
          <label className="px-2 py-2">{t('form.oneWay')}</label>
          <input
            id="published"
            className="appearance-none border border-gray-400 rounded-full w-4 h-4 checked:bg-lime-400 dark:checked:bg-green-500"
            type="radio"
            name="status"
            checked={roundTrip}
              onChange={() => {
                setOneWay(false);
                setRoundTrip(true);
              }}
          />
          <label className="px-2 py-2">{t('form.roudTrip')}</label>
        </div>
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/4 mb-4 mx-2">
            <label htmlFor="name" className="block text-gray-700 font-semibold">
            {t('form.from')}:
            </label>
            <select id="select"  className="w-full px-4 py-2 border rounded-md" value={from} onChange={(e) => setFrom(e.target.value)}>
              <option value="">{t('form.select')}</option>
              {
                airPorts.map(item => (
                  <>
                     <option key={item.id} id={item.id} value={item.name}>{item.name}</option>
                  </>
                ))
              }
            </select>
        
            <><label htmlFor="name" className="block text-gray-700 font-semibold">
                  {t('form.to')}:
                </label><select id="select" className="w-full px-4 py-2 border rounded-md" value={to} onChange={(e) => setTo(e.target.value)}>
                    <option value="">{t('form.select')}</option>
                    {
                airPorts.map(item => (
                  <>
                     <option key={item.id} id={item.id} value={item.name}>{item.name}</option>
                  </>
                ))
              }
                  </select></>
        
          </div>
          <div className="md:w-1/4 mb-4 mx-2">
            <label className="block text-gray-700 font-semibold">
            {t('form.dateStart')}:
            </label>
            <input
              type="date"
              id="date"
              className="w-full px-4 py-2 border rounded-md"
              value={dateStart}
    onChange={(e) => setDateStart(e.target.value)}
    required
              
            />
             {!oneWay && (
            <><label className="block text-gray-700 font-semibold">
                  {t('form.dateEnd')}:
                </label><input
                    type="date"
                    id="date"
                    className="w-full px-4 py-2 border rounded-md"
                    value={dateEnd}
                    onChange={(e) => setDateEnd(e.target.value)} /></>
             )}
          </div>
          <div className="md:w-1/4 mb-4 mx-2">
            <label className="block text-gray-700 font-semibold">
            {t('form.howManyAdultTravel')}:
            </label>
            <input
              type="number"
              id="date"
              className="w-full px-4 py-2 border rounded-md"
              value={adults}
              onChange={(e) => setAdults(parseInt(e.target.value))}
              required
            />
            <label className="block text-gray-700 font-semibold">
            {t('form.howManyChildrenTravel')}:
            </label>
            <input
              type="number"
              id="date"
              className="w-full px-4 py-2 border rounded-md"
              value={children}
              onChange={(e) => setChildren(parseInt(e.target.value))}
              required
            />
          </div>
          <div className="md:w-1/4 mb-4 mx-2">
            <label htmlFor="email" className="block text-gray-700 font-semibold">
            {t('form.email')}:
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 border rounded-md"
              value={email}
    onChange={(e) => setEmail(e.target.value)}
    required
            />
          </div>
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="bg-lime-400 shadow-md shadow-lime-300 hover:shadow-lime-400  text-white px-6 py-2 rounded-lg text-lg font-semibold hover:bg-lime-500 dark:bg-green-500 dark:shadow-green-600 dark:hover:bg-green-600 dark:hover:shadow-green-700"
          >
            {t('form.CTAButtom')}
          </button>
        </div>
      </form>
    </div>
  </div>
  );
}

export default Form;
