import { Storage } from "@kinde-oss/react-native-sdk-0-7x";
import axios, { InternalAxiosRequestConfig } from "axios";
import { clienteKinde } from "../../app/_layout";

export const axiosIsellCargas = axios.create({
  baseURL: process.env.EXPO_PUBLIC_URL_API,
});

/**
 * Agrega el token de acceso de Kinde si el usuario está autenticado.
 * Si no, no hace nada. Por eso, para todas las peticiones que requieran el token, el usuario
 * ya debería estar autenticado y tener un token almacenado.
 */
async function agregarHeaderAutorizacion(axiosConfig: InternalAxiosRequestConfig) {
  const estaAutenticado = await clienteKinde.isAuthenticated;
  if (estaAutenticado) {
    const tokenAcceso = await Storage.getAccessToken();
    axiosConfig.headers.Authorization = `Bearer ${tokenAcceso}`;
  }
  return axiosConfig;
}

axiosIsellCargas.interceptors.request.use(agregarHeaderAutorizacion);
axiosIsellCargas.interceptors.response.use((response) => {
  console.log(response)
  return response
})