import z from "zod";
import { numberZod, ordenamientoZod, paginacionZod } from "@utils/zodUtils";

import { OrdenamientoDireccion } from "./comun";

export const schemaBuscarDireccionesDeClienteDTO = z.object({
  body: z.object({
    filtros: z.object({
      rangoCargasRecibidas: z
        .object({
          cargasRecibidasDesde: numberZod("minimo de cargas recibidas"),
          cargasRecibidasHasta: numberZod("maximo de cargas recibidas"),
        })
        .partial()
        .optional(),
    }),
    paginacion: paginacionZod(),
    ordenamiento: ordenamientoZod<typeof OrdenamientoDireccion>(OrdenamientoDireccion),
  }),
});

export type BuscarDireccionesDeClienteDTO = z.infer<
  typeof schemaBuscarDireccionesDeClienteDTO
>["body"] &
  DatosUsuario;
