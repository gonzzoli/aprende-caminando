import z from "zod";
import { numberZod } from "@utils/zodUtils";

import { schemaDireccion } from "./comun";

export const schemaCrearDireccionHangarDTO = z.object({
  body: schemaDireccion.extend({ hangarId: numberZod("id de hangar") }),
});

export type CrearDireccionHangarDTO = z.infer<typeof schemaCrearDireccionHangarDTO>["body"] 
