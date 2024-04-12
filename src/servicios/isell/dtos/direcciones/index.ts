import { z } from "zod";

import { numberZod } from "@utils/zodUtils";
import { schemaDireccion } from "./comun";
export * from "./cliente";
export * from "./propietario";
export * from "./hangar";

/**
 * Esto de crear Direccion es únicamente para los casos de DireccionPropietario,
 * DireccionCliente, y DireccionHangar. Las demás relaciones con Direccion
 * se van a crear en otros casos de uso que no solo crean una Direccion, si no que configuran un Vehiculo,
 * crean una Carga, etc.
 */

export const schemaCrearDireccionDTO = z.object({
  body: schemaDireccion,
});

export type CrearDireccionDTO =  z.infer<typeof schemaCrearDireccionDTO>["body"];

export const schemaActualizarDireccionDTO = z.object({
  body: schemaDireccion.omit({ coordenadas: true }),
  params: z.object({ direccionId: numberZod("id de direccion") }),
});

export type ActualizarDireccionDTO = z.infer<
  typeof schemaActualizarDireccionDTO
>["body"] &
  z.infer<typeof schemaActualizarDireccionDTO>["params"];
