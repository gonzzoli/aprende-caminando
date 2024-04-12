import z from "zod";
import { numberZod, ordenamientoZod, paginacionZod, stringZod } from "@utils/zodUtils";

export const schemaCrearPersonaFisicaDTO = z.object({
  body: z.object({
    nombre: stringZod("nombre"),
    apellido: stringZod("apellido"),
    telefono: numberZod("numero de telefono"),
  }),
});

export type CrearPersonaFisicaDTO = z.infer<typeof schemaCrearPersonaFisicaDTO>["body"];

export const schemaCrearPersonaJuridicaDTO = z.object({
  body: z.object({
    nombreFantasia: stringZod("nombre"),
    telefono: numberZod("numero de telefono"),
  }),
});

export type CrearPersonaJuridicaDTO = z.infer<typeof schemaCrearPersonaJuridicaDTO>["body"];

const OrdenamientoPropietarios = {
  FECHA_ALTA: "fyhAlta",
} as const;

export const schemaBuscarPropietariosDTO = z.object({
  query: z.object({
    filtros: z.object({}).partial().optional(),
    paginacion: paginacionZod(),
    ordenamiento: ordenamientoZod(OrdenamientoPropietarios, { orden: "desc", nombre: "fyhAlta" }),
  }),
});

export type BuscarPropietariosDTO = z.infer<typeof schemaBuscarPropietariosDTO>["query"];
