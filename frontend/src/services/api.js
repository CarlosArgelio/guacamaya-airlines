import axios from "axios"
import { API } from "../configuration/config"

export const getAllAirports = (setAirPort) => {
  return axios.get(`${API}/api/v1/airports/`)
  .then((response) => {
    setAirPort(response.data.data)
  });
}

