import { schemaCrearDireccionDTO } from "../direcciones";
import { numberZod } from "@utils/zodUtils";
import z from "zod";

export const OrdenamientoCargas = [
  { nombre: "fyhAlta", tabla: "carga", columna: "fyh_alta" },
  { nombre: "costo", tabla: "carga", columna: "costo" },
  { nombre: "altura", tabla: "carga", columna: "altura_mts" },
  { nombre: "pesoKg", tabla: "carga", columna: "peso_kg" },
] as const;

export const schemaDireccionCarga = z.object({
  direccionId: numberZod("id de la direccion"),
  ventanasDeTiempo: z
    .object({
      fyhDesde: z.coerce.date(),
      fyhHasta: z.coerce.date(),
    })
    .array(),
});

export const schemaCarga = {
  pesoKg: numberZod("peso").positive(),
  altoMts: numberZod("peso").positive(),
  anchoMts: numberZod("peso").positive(),
  largoMts: numberZod("peso").positive(),
  volumenMtsCubicos: numberZod("volumen").positive(),
  cargaTipoId: numberZod("tipo de carga"),
  direccionCargaOrigen: schemaDireccionCarga.or(schemaCrearDireccionDTO.shape.body),
  direccionCargaDestino: schemaDireccionCarga.or(schemaCrearDireccionDTO.shape.body),
};
