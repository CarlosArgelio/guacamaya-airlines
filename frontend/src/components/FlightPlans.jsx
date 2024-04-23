import { CalendarIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { getAllFligthPlans } from "./../services/api";

function Table() {

  const [fligth, setFligth] = useState(null);
  // eslint-disable-next-line no-unused-vars
  const [t, i18n] = useTranslation("global");

  useEffect(() => {
    getAllFligthPlans(setFligth);
  }, []);

  if (!fligth) return null;

  return (
    <div id="flightPlans" className="container max-w-6xl mx-auto py-8 ">
      <div className="flex">
        <h1 className="text-3xl font-semibold mb-8 ml-4 mb:mr-4">
          {t("table.flightPlans")}
        </h1>


        <CalendarIcon className="w-10 h-10 "></CalendarIcon>
      </div>
      <table className="table-auto w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-900 text-yellow-300">
            <th className="px-4 py-2 text-left">{t("table.hours")}</th>
            <th className="px-4 py-2 text-left">{t("table.destination")}</th>
            <th className="px-4 py-2 text-left">{t("table.code")}</th>
            <th className="px-4 py-2 text-left">{t("table.door")}</th>
            <th className="px-4 py-2 text-left">{t("table.status")}</th>
          </tr>
        </thead>
        <tbody>
          {fligth.map((flightPlan) => (
            <tr key={flightPlan.id} className="bg-gray-900 text-yellow-300">
              <td className="border px-4 py-2">{flightPlan.departureTime}</td>
              <td className="border px-4 py-2">{flightPlan.destination}</td>
              <td className="border px-4 py-2">{flightPlan.code}</td>
              <td className="border px-4 py-2">{flightPlan.door}</td>
              <td className="border px-4 py-2">
                {flightPlan.status ? "CONFIRMADO" : "EN ESPERA"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
