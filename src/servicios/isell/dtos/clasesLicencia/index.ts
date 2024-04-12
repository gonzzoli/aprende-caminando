import { CodigosError } from "@servicios/isell/errores";
import { Paginado, ClaseLicencia } from "@servicios/isell/tipos";
import { stringZod } from "@utils/zodUtils";
import { z } from "zod";

export const schemaClaseLicencia = z.object({
  id: z.number(),
  nombreClaseLicencia: stringZod("nombre de la clase de licencia"),
});

export type ResBuscarClasesLicencia = {
  codigosError: CodigosError.PAGINACION_INVALIDA | CodigosError.ORDENAMIENTO_INVALIDO;
  datos: Paginado<ClaseLicencia>;
};
