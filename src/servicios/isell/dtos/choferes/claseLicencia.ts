import { CodigosError } from "@servicios/isell/errores";
import { ChoferClaseLicencia } from "@servicios/isell/tipos";
import { numberZod } from "@utils/zodUtils";
import z from "zod";

/**
 * Aun hay que ver como enviar los archivos, pero la rutaArchivo no iria en el dto,
 * si no que es algo que generamos en el server. En el dto iria el archivo en si.
 */
export const schemaAgregarClaseLicenciaChoferDTO = z.object({
  params: z.object({
    choferId: numberZod("id del chofer"),
    claseLicenciaId: numberZod("id de la licencia"),
  }),
  body: z.object({
    rutaArchivo: z.string(),
    fechaVencimiento: z.coerce.date(),
  }),
});

export type AgregarClaseLicenciaChoferDTO = z.infer<
  typeof schemaAgregarClaseLicenciaChoferDTO
>["body"] &
  z.infer<typeof schemaAgregarClaseLicenciaChoferDTO>["params"];

export type ResAgregarClaseLicenciaChofer = {
  codigosError: CodigosError.CHOFER_NO_PERTENECE_A_EMPRESA | CodigosError.RECURSO_NO_ENCONTRADO;
  datos: ChoferClaseLicencia;
};

export const schemaActualizarChoferClaseLicenciaDTO = z.object({
  body: z
    .object({
      rutaArchivo: z.string(),
      fechaVencimiento: z.coerce.date(),
    })
    .partial(),
  params: z.object({
    choferId: numberZod("id del chofer"),
    claseLicenciaId: numberZod("id de la licencia"),
  }),
});

export type ActualizarChoferClaseLicenciaDTO = z.infer<
  typeof schemaActualizarChoferClaseLicenciaDTO
>["body"] &
  z.infer<typeof schemaActualizarChoferClaseLicenciaDTO>["params"];

export type ResActualizarChoferClaseLicencia = {
  codigosError: CodigosError.CHOFER_NO_PERTENECE_A_EMPRESA | CodigosError.RECURSO_NO_ENCONTRADO;
  datos: ChoferClaseLicencia;
};
