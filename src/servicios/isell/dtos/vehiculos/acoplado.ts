import { stringZod, numberZod } from "@utils/zodUtils";
import z from "zod";

export const schemaCrearAcopladoDTO = z.object({
  body: z.object({
    nombreAcoplado: stringZod("nombre del acoplado"),
    pesoMaximo: numberZod("peso maximo").positive(),
    //metrosCuadrados: numberZod().positive(),
    documentos: z.object({
      tituloAcoplado: stringZod("titulo del acoplado"),
      seguroAcoplado: stringZod("seguro del acoplado"),
    }).partial().optional(),
  }),
});

export type CrearAcopladoDTO = z.infer<
  typeof schemaCrearAcopladoDTO
>["body"];
