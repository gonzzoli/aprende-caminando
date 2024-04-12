import z from "zod";
import { OrdenamientoCargas, schemaCarga } from "./comun";
import { numberZod, ordenamientoZod, paginacionZod } from "@utils/zodUtils";
import { CodigosError } from "../../errores";
import { Carga, Paginado } from "../../tipos";

export const schemaCrearCargaClienteDTO = z.object({
  body: z.object(schemaCarga),
  params: z.object({ clienteId: numberZod("id del cliente") }),
});

export type CrearCargaClienteDTO = z.infer<typeof schemaCrearCargaClienteDTO>["body"] &
  z.infer<typeof schemaCrearCargaClienteDTO>["params"]

export type ResCrearCargaCliente = {
  codigosError: CodigosError.RECURSO_NO_ENCONTRADO;
  datos: Carga;
};

export const schemaBuscarCargasClienteDTO = z.object({
  query: z.object({
    filtros: z.object({}).partial().optional(),
    paginacion: paginacionZod(),
    ordenamiento: ordenamientoZod(OrdenamientoCargas, { orden: "desc", nombre: "fyhAlta" }),
  }),
  params: z.object({ clienteId: numberZod("id de cliente") }),
});

export type BuscarCargasClienteDTO = z.infer<typeof schemaBuscarCargasClienteDTO>["params"] &
  z.infer<typeof schemaBuscarCargasClienteDTO>["query"]

export type ResBuscarCargasCliente = {
  codigosError:
    | CodigosError.ORDENAMIENTO_INVALIDO
    | CodigosError.PAGINACION_INVALIDA
    | CodigosError.RECURSO_NO_ENCONTRADO;
  datos: Paginado<Carga>;
};

export type ResBuscarCargaPorId = {
  codigosError: CodigosError.RECURSO_AJENO | CodigosError.RECURSO_NO_ENCONTRADO,
  datos: Carga
}