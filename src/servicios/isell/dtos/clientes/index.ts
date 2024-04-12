import { CodigosError } from "@servicios/isell/errores";
import { ClienteTipo, Cliente } from "@servicios/isell/tipos";
import { stringZod, numberZod } from "@utils/zodUtils";
import { z } from "zod";

const clienteDTO = {
  dni: stringZod("DNI").min(8),
  nombre: stringZod("nombre"),
  apellido: stringZod("apellido"),
  numeroTelefono: stringZod("numero de telefono").min(8).optional(),
  clienteTipoId: numberZod("tipo de cliente"),
};

export type ResBuscarTiposDeCliente = {
  codigosError: number;
  datos: ClienteTipo[];
};

export type ResBuscarCliente = {
  codigosError: number;
  datos: Cliente;
};

export const schemaCrearClienteDTO = z.object({
  body: z.object(clienteDTO),
});

export type CrearClienteDTO = z.infer<typeof schemaCrearClienteDTO>["body"];

export type ResCrearCliente = {
  codigosError: CodigosError.EMAIL_USUARIO_YA_REGISTRADO;
  datos: Cliente;
};

export const schemaActualizarClienteDTO = z.object({
  body: z.object(clienteDTO),
  params: z.object({ clienteId: numberZod("id del cliente") }),
});

export type bodyActualizarClienteDTO = z.infer<typeof schemaActualizarClienteDTO>["body"];

export type paramsActualizarClienteDTO = z.infer<typeof schemaActualizarClienteDTO>["params"];

// definimos el DTO que contiene todo, y debemos juntar esos datos en el controlador
export type ActualizarClienteDTO = bodyActualizarClienteDTO & paramsActualizarClienteDTO;
