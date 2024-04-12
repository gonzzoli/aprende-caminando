import { CodigosError } from "@servicios/isell/errores";
import { Chofer, Calificacion, ChoferDocumentoEntregado, Documento } from "@servicios/isell/tipos";
import { stringZod, numberZod } from "@utils/zodUtils";
import { z } from "zod";
export * from "./claseLicencia";

export const schemaCrearChoferDTO = z.object({
  body: z.object({
    nombre: stringZod("nombre"),
    apellido: stringZod("apellido"),
    dni: stringZod("dni"),
    numeroTelefono: stringZod("numero de telefono"),
    propietarioId: numberZod("id de propietario"),
  }),
});

export type CrearChoferDTO = z.infer<typeof schemaCrearChoferDTO>["body"];
export type ResCrearChofer = {
  codigosError: CodigosError.EMAIL_USUARIO_YA_REGISTRADO;
  datos: Chofer;
};

export const schemaActualizarChoferDTO = z.object({
  body: z.object(schemaCrearChoferDTO.shape.body.omit({ propietarioId: true }).shape),
  params: z.object({ choferId: numberZod("id del chofer") }),
});

export type ActualizarChoferDTO = z.infer<
  typeof schemaActualizarChoferDTO
>["body"] &
  z.infer<typeof schemaActualizarChoferDTO>["params"];
export type ResActualizarChofer = {
  codigosError: CodigosError.RECURSO_AJENO;
  datos: Chofer;
};

// CALIFICACION

const calificacionDTO = {
  puntuacion: numberZod("puntuación"),
  comentario: stringZod("comentario"),
  calificadoId: numberZod("id del calificado"),
};

export const schemaCrearCalificacionDTO = z.object({
  body: z.object(calificacionDTO),
});

export type CrearCalificacionDTO = z.infer<typeof schemaCrearCalificacionDTO>["body"];
export type ResCrearCalificacion = {
  codigosError: CodigosError.RECURSO_NO_ENCONTRADO;
  datos: Calificacion;
};

export const schemaActualizarCalificacionDTO = z.object({
  body: z.object(calificacionDTO),
  params: z.object({ calificacionId: numberZod("id de la calificacion") }),
});

export type bodyActualizarCalificacionDTO = z.infer<typeof schemaActualizarCalificacionDTO>["body"];

export type paramsActualizarCalificacionDTO = z.infer<
  typeof schemaActualizarCalificacionDTO
>["params"];

export type ActualizarCalificacionDTO = bodyActualizarCalificacionDTO &
  paramsActualizarCalificacionDTO;

export type ResBuscarChofer = {
  codigosError: CodigosError.RECURSO_NO_ENCONTRADO;
  datos: Chofer;
};

export type ResBuscarChoferes = {
  codigosError:
    | CodigosError.RECURSO_NO_ENCONTRADO
    | CodigosError.ORDENAMIENTO_INVALIDO
    | CodigosError.PAGINACION_INVALIDA;
  datos: Chofer[];
};

export type ResBuscarDocumentosPorChoferId = {
  codigosError: CodigosError.RECURSO_NO_ENCONTRADO | CodigosError.RECURSO_AJENO;
  datos: (ChoferDocumentoEntregado & { documento: Documento })[];
};
