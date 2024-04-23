import { useState, useEffect } from "react";
import { TicketIcon } from "@heroicons/react/24/outline";
import { useTranslation } from "react-i18next";

import { getAllAirports } from "./../services/api"

function Form() {
  const [airPorts, setAirPort] = useState(null)
  // const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  // eslint-disable-next-line no-unused-vars
  const [t, i18n] = useTranslation("global");

  useEffect(() => {
    getAllAirports(setAirPort)
  }, [])

  if (!airPorts) return null;


  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("Datos del formulario:", {  email });
  };

  return (
    <div id="reservation" className="relative max-w-6xl mx-auto rounded-b-xl shadow-xl ">
    <div className="flex rounded-t-xl pt-2 justify-center bg-green-400 drop-shadow-lg">
      <h1 className="text-3xl font-bold mb-4">{t('form.reserveYourFlight')}</h1>
      <TicketIcon className="w-10 h-10" />
    </div>
    <div className="max-w-6xl p-4 bg-gray-100 rounded-b-xl">
      <form onSubmit={handleSubmit}>
        <div className="py-2">
          <input
            id="draft"
            className="peer/draft"
            type="radio"
            name="status"
            checked
          />
          <label className="px-2 py-2">{t('form.oneWay')}</label>
          <input
            id="published"
            className="peer/published"
            type="radio"
            name="status"
          />
          <label className="px-2 py-2">{t('form.roudTrip')}</label>
        </div>
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/4 mb-4 ">
            <label htmlFor="name" className="block text-gray-700 font-semibold">
            {t('form.from')}:
            </label>
            <select id="select"  className="w-full px-4 py-2 border rounded-md">
              <option value="">{t('form.select')}</option>
              {
                airPorts.map(item => (
                  <>
                     <option key={item.id} id={item.id} value={item.name}>{item.name}</option>
                  </>
                ))
              }
            </select>
          </div>
          <div className="md:w-1/4 mb-4">
            <label htmlFor="name" className="block text-gray-700 font-semibold">
            {t('form.to')}:
            </label>
            <select id="select" className="w-full px-4 py-2 border rounded-md">
              <option value="">{t('form.select')}</option>
              {
                airPorts.map(item => (
                  <>
                     <option id={item.id} value={item.name}>{item.name}</option>
                  </>
                ))
              }
            </select>
          </div>
          <div className="md:w-1/4 mb-4">
            <label className="block text-gray-700 font-semibold">
            {t('form.calendar')}:
            </label>
            <input
              type="date"
              id="date"
              className="w-full px-4 py-2 border rounded-md"
              required
            />
          </div>
          <div className="md:w-1/4 mb-4">
            <label className="block text-gray-700 font-semibold">
            {t('form.howManyTravel')}:
            </label>
            <input
              type="number"
              id="date"
              className="w-full px-4 py-2 border rounded-md"
              required
            />
          </div>
          <div className="md:w-1/4 mb-4">
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
            className="bg-green-400 text-white px-6 py-2 rounded-lg"
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
