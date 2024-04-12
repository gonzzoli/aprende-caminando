import z from "zod";
import { numberZod, stringZod } from "@utils/zodUtils";

export const schemaDireccion = z.object({
  descripcion: stringZod("descripcion").optional(),
  calle: stringZod("nombre de calle").optional(),
  numero: stringZod("numero de direccion").optional(),
  coordenadas: numberZod("coordenadas").array().length(2),
});

export const OrdenamientoDireccion = {
  FECHA_CREACION: "fyhAlta",
} as const;
