import { numberZod } from "@utils/zodUtils";
import z from "zod";

export const schemaCrearEspecificacionTecnicaDTO = z.object({
  body: z.object({
    pesoMaximoKg: numberZod("peso maximo").positive(),
    altoMts: numberZod("alto en metros").positive(),
    anchoMts: numberZod("ancho en metros").positive(),
    largoMts: numberZod("largo en metros").positive(),
    volumenMtsCubicos: numberZod("volumen en metros cubicos").positive(),
    vehiculoTipoId: numberZod("id del tipo de vehiculo"),
  }),
});

export type CrearEspecificacionTecnicaDTO = z.infer<
  typeof schemaCrearEspecificacionTecnicaDTO
>["body"];
