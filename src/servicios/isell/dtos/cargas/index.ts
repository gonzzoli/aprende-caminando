import { z } from "zod";

import { schemaCarga } from "./comun";
import { numberZod } from "@utils/zodUtils";
import { CodigosError } from "@servicios/isell/errores";
import { Carga } from "@servicios/isell/tipos";
export * from "./cliente"
export * from "./tipos"

export const schemaActualizarCargaDTO = z.object({
  body: z.object(schemaCarga),
  params: z.object({ cargaId: numberZod("id de la carga") }),
});

// definimos el DTO que contiene todo junto (body, query, params, headers, lo que traiga), y debemos juntar esos datos en el controlador
export type ActualizarCargaDTO = z.infer<typeof schemaActualizarCargaDTO>["body"] &
  z.infer<typeof schemaActualizarCargaDTO>["params"]

  export type ResActualizarCarga = {
    codigosError: CodigosError.RECURSO_AJENO | CodigosError.RECURSO_NO_ENCONTRADO,
    datos: Carga
  }