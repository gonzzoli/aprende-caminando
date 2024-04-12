import z from "zod";
import { stringZod } from "@utils/zodUtils";

export const schemaCrearAdministradorDTO = z.object({
  body: z.object({
    nombre: stringZod("nombre"),
  }),
});

export type CrearAdministradorDTO = z.infer<typeof schemaCrearAdministradorDTO>["body"];
