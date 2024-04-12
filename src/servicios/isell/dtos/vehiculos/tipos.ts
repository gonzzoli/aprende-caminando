import { stringZod } from "@utils/zodUtils";
import { z } from "zod";

const vehiculoTipoDTO = {
  nombreVehiculoTipo: stringZod("nombre del vehiculo tipo"),
};

export const schemaCrearVehiculoTipoDTO = z.object({
  body: z.object(vehiculoTipoDTO),
});

export type CrearVehiculoTipoDTO = z.infer<typeof schemaCrearVehiculoTipoDTO>["body"];

export const schemaActualizarVehiculoTipoDTO = z.object({
  body: z.object(vehiculoTipoDTO),
  params: z.object({ vehiculoTipoId: z.coerce.number() }),
});

export type ActualizarVehiculoTipoDTO = z.infer<typeof schemaActualizarVehiculoTipoDTO>["body"] &
  z.infer<typeof schemaActualizarVehiculoTipoDTO>["params"];

export const schemaCrearVehiculoTipoCargaTipoDTO = z.object({
  body: z.object({
    cargaTipoId: z.coerce.number(),
    vehiculoTipoId: z.coerce.number(),
  }),
});

export type CrearVehiculoTipoCargaTipoDTO = z.infer<
  typeof schemaCrearVehiculoTipoCargaTipoDTO
>["body"];
