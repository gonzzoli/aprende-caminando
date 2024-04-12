import { useMutation, useQuery } from "@tanstack/react-query";
import {
  buscarClientePorId,
  buscarClientes,
  buscarTiposDeCliente,
  crearUsuarioCliente,
} from "./peticiones";
import { CrearClienteDTO } from "../dtos/clientes";

export const usePerfilCliente = (clienteId: number) => {
  return useQuery({
    queryKey: ["perfil", "clientes", clienteId],
    queryFn: () => buscarClientePorId(clienteId),
  });
};

// Solo para testear
export const useClientes = () => {
  return useQuery({
    queryKey: ["clientes"],
    queryFn: buscarClientes,
  });
};

export const useTiposDeCliente = () => {
  return useQuery({
    queryKey: ["clientes", "tipos"],
    queryFn: buscarTiposDeCliente,
  });
};

export const useCrearUsuarioCliente = () => {
  return useMutation({
    mutationFn: (crearClienteDTO: CrearClienteDTO) => crearUsuarioCliente(crearClienteDTO),
    onSuccess: (data) => console.log("CREADOOO", data),
  });
};
