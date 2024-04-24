import axios from "axios";
import { API } from "../configuration/config";

/// Reserve form 
export const getAllAirports = (setAirPort) => {
  return axios.get(`${API}/api/v1/airports/`).then((response) => {
    setAirPort(response.data.data);
  });
};

export const postCreateReservation = (formData) => {
  return axios.post(`${API}/api/v1/reservations/`, formData);
};


//// Flicht Plans
export const getAllFligthPlans = (FligthPlans) => {
  return axios
    .get(`${API}/api/v1/reservations/flight-plans/`)
    .then((response) => {
      FligthPlans(response.data.data);
    });
};
