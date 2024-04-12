import z from "zod";
import { numberZod, stringZod } from "@utils/zodUtils";

export const schemaCrearTramoRutaDTO = z.object({
  body: z.object({
    distanciaMts: stringZod("distancia en metros"),
    rutaId: numberZod("id de ruta"),
  }),
});

export type CrearTramoRutaDTO = z.infer<typeof schemaCrearTramoRutaDTO>["body"];

export const schemaActualizarTramoRutaDTO = z.object({
  body: z.object({
    distanciaMts: stringZod("distancia en metros"),
    rutaId: numberZod("id de ruta"),
  }),
  params: z.object({ id: numberZod("id del tramo ruta") }),
});

export type ActualizarTramoRutaDTO = z.infer<typeof schemaActualizarTramoRutaDTO>["body"] &
  z.infer<typeof schemaActualizarTramoRutaDTO>["params"];
