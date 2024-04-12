import { AxiosResponse } from "axios";
import {
  CrearClienteDTO,
  ResBuscarCliente,
  ResBuscarTiposDeCliente,
  ResCrearCliente,
} from "../dtos/clientes";
import { axiosIsellCargas } from "../instanciaAxios";

export const buscarClientePorId = async (clienteId: number) => {
  const { data } = await axiosIsellCargas.get<ResBuscarCliente["datos"]>(`/clientes/${clienteId}`);
  return data;
};

export const buscarClientes = async () => {
  const { data } = await axiosIsellCargas.get<ResBuscarCliente["datos"]>(`/clientes`);
  return data;
};

export const buscarTiposDeCliente = async () => {
  const { data } = await axiosIsellCargas.get<ResBuscarTiposDeCliente["datos"]>(`/clientes/tipos`);
  return data;
};

export const crearUsuarioCliente = async (crearClienteDTO: CrearClienteDTO) => {
  const { data }: AxiosResponse<ResCrearCliente["datos"]> = await axiosIsellCargas.post(
    `/usuarios/cliente`,
    crearClienteDTO,
  );
  return data;
};
